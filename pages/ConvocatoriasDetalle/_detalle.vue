<template>
    <div id="main-wrapper" class="main-wrapper">

        <div v-if="loading">
            <Loader />
        </div>

        <Header showHeaderTop="true" />

        <BreadCrumbTwo :title='$route.params.detalle' v-if="$route.params.detalle != 'All'" />
        <BreadCrumbTwo title='Publicacion' v-if="$route.params.detalle == 'All'" />

        <section class="section-gap-equal">
            <div class="container">
                <div class="row row--30">
                    <div class="col-lg-8">
                        <div 
                            class="blog-standard-each-item"                             
                        >
                            <BlogPostStandard :coleccion="coleccion" :tipo="$route.params.detalle"/>
                        </div>

                        <!--<div v-if="getPaginateCount > 1">
                            <pagination 
                                class="edublink-vue-pagination mt--0" 
                                v-model="currentPage" 
                                :per-page="perPage" 
                                :records="blogData.blogs.length"
                                @paginate="paginateClickCallback"
                                :page-count="getPaginateCount" 
                                :options="paginationOptions"
                            />
                        </div>-->
                    </div>

                    <div class="col-lg-4">
                        <BlogSidebarOne :tipo="$route.params.detalle" :contPub="contPub" :blogItems="blogData.blogs" :categories="blogData.categories" :archives="blogData.archives" :tags="blogData.tags" />
                    </div>
                </div>
            </div>
        </section>        

        <FooterOne />
    </div>
</template>

<script>
    import CryptoJS from 'crypto-js'    
    import { useInstitucionStore } from '@/stores/store'
    import blogData from '~/data/blog';
    export default {
        components: {
            Loader: () => import('@/components/loaders/LoaderUniv'),
            Header: () => import("@/components/header/HeaderThree"),
            BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
            BlogSidebarOne: () => import('@/components/sidebar/BlogSidebarOne'),
            BlogPostStandard: () => import('@/components/blog/BlogPostStandard'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        async asyncData({ $axios }) {
            const useInstitucion = useInstitucionStore()
            if(useInstitucionStore().institucion == null || useInstitucionStore().linksNavUnidadesAdministrativas == null){
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                const LinksUniversidad = await $axios.$get('/api/linksIntExtAll/'+ process.env.APP_ID_INSTITUCION)              
                const LinksNavUnidadesAdministrativas = LinksUniversidad.filter(link => link.ei_tipo === "NAV_UNID_ADMIN")
                useInstitucion.asignarInstitucion(institucion.Descripcion)  
                useInstitucion.asignarLinksUniversidad(LinksUniversidad)
                useInstitucion.asignarLinksUnidadesAdministrativas(LinksNavUnidadesAdministrativas)                             
            }                  
            if(useInstitucionStore().publicacionesUniversidad == null || useInstitucionStore().serviciosUniversidad == null){                
                const publicacionesUniversidad = await $axios.$get('/api/publicacionesAll/'+ process.env.APP_ID_INSTITUCION)
                let publicaciones = []
                let servicios = []      
                let noticias = []          
                /* CLASIFICAION DE PUBLICACIONES */
                publicacionesUniversidad.forEach(pub => {
                    switch (pub.publicaciones_tipo) {
                        case 'SERVICIO':
                            servicios.push(pub)
                            break;
                        case 'PUBLICACION':
                            publicaciones.push(pub)
                            break;
                        case 'NOTICIA':
                            noticias.push(pub)
                            break;
                        default:
                            publicaciones.push(pub)
                            break;
                    }
                });
                useInstitucion.asignarPublicacionesUniversidad(publicaciones)
                useInstitucion.asignarServiciosUniversidad(servicios)
                useInstitucion.asignarNoticiasUniversidad(noticias)
            }            
            if(useInstitucionStore().gacetasUniversidad == null || useInstitucionStore().auditoriasUniversidad == null){
                const gacetasUniversidad = await $axios.$get('/api/gacetaunivAll/' + process.env.APP_ID_INSTITUCION)
                let auditorias =  []
                let gacetas = []
                /* CLASIFICACION DE GACETAS */                
                gacetasUniversidad.forEach(gac => {
                    if(gac.gaceta_titulo.includes('AUDITORIA')){
                        auditorias.push(gac)
                    }else{
                        gacetas.push(gac)
                    }
                });
                useInstitucion.asignarGacetasUniversidad(gacetas)
                useInstitucion.asignarAuditoriasUniversidad(auditorias)
            }
            if(useInstitucionStore().eventosUniversidad == null){
                const eventosUniversidad = await $axios.$get('/api/eventoAll/' + process.env.APP_ID_INSTITUCION)
                useInstitucion.asignarEventosUniversidad(eventosUniversidad)
            }
            if(useInstitucionStore().videosUniversidad == null){
                const videosUniversidad = await $axios.$get('/api/VideosAll/' + process.env.APP_ID_INSTITUCION)                                    
                useInstitucion.asignarVideosUniversidad(videosUniversidad)   
            }    
            if(useInstitucionStore().institucion == null){
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                useInstitucion.asignarInstitucion(institucion.Descripcion)  
            }
            if(useInstitucionStore().carreras == null){
                const carreras  = await $axios.$get('api/upeacarrera')    
                useInstitucion.asignarCarreras(carreras)  
            }        
        },
        data () {
            return {
                blogData,
                currentPage: 1,
                perPage: 5,
                paginationOptions: {
                    texts: {
                        nextPage: '',
                        prevPage: ''
                    }
                },
                coleccion: {},
                clave_encryptacion: useInstitucionStore().clave_encryptacion,
                id_coleccion: this.$route.query.id,
                publicaciones: useInstitucionStore().publicacionesUniversidad,
                servicios: useInstitucionStore().serviciosUniversidad,
                noticias: useInstitucionStore().noticiasUniversidad,
                publicacionesCarreras : [],
                gacetas: useInstitucionStore().gacetasUniversidad,
                auditorias: useInstitucionStore().auditoriasUniversidad,
                eventos: useInstitucionStore().eventosUniversidad,
                videos: useInstitucionStore().videosUniversidad,
                carreras: useInstitucionStore().carreras,          
                loading: true,      
                contPub: 0,
            }
        },
        computed: {
            getItems() {
                let start = ( this.currentPage - 1 ) * this.perPage;
                let end = this.currentPage * this.perPage;
                return this.blogData.blogs.slice( start, end );
            },
            getPaginateCount() {
                return Math.ceil( this.blogData.blogs.length / this.perPage );
            }
        },                
        methods: {
            decryptID(ciphertext) {
                const encryptionKey = this.clave_encryptacion; // Cambia esto por tu clave de encriptación
                const bytes = CryptoJS.AES.decrypt(ciphertext, encryptionKey);
                const decryptedID = bytes.toString(CryptoJS.enc.Utf8);
                return decryptedID;
            },
            async getCarreraPublicaciones(id) {
            const response = await this.$axios.$get('/api/publicacionesAll/'+ id);                        
                if(Object.keys(response).length > 0){        
                    response.forEach(element => {        
                        this.publicacionesCarreras.push(element)
                        if(element.publicaciones_id == this.decryptID(this.id_coleccion)){
                            this.coleccion = element
                        }
                        
                    });
                }                
            },
            async getPublicacionesCarreraAll() {
            try {
                this.carreras.forEach((carrera) => {
                    this.getCarreraPublicaciones(carrera.carrera_id)
                })
            } catch (e) {
                console.log(e)
            }
            },
            paginateClickCallback( page ) {
                this.currentPage = Number( page );
            },
            createdComponent(){                
                switch (this.$route.params.detalle) {
                    case 'publicaciones':
                        this.publicaciones.forEach(e => {
                            if(e.publicaciones_id == this.decryptID(this.id_coleccion)){
                                this.coleccion = e
                            }
                        });
                    case 'servicios':
                        this.servicios.forEach(e => {
                            if(e.publicaciones_id == this.decryptID(this.id_coleccion)){
                                this.coleccion = e
                            }
                        });
                        break;
                    case 'noticias':
                        this.noticias.forEach(e => {
                            if(e.publicaciones_id == this.decryptID(this.id_coleccion)){
                                this.coleccion = e
                            }
                        });
                        break;   
                    case 'gacetas':
                        this.gacetas.forEach(e => {
                            if(e.gaceta_id == this.decryptID(this.id_coleccion)){
                                this.coleccion = e
                            }
                        });
                    case 'auditorias':
                        this.auditorias.forEach(e => {
                            if(e.gaceta_id == this.decryptID(this.id_coleccion)){
                                this.coleccion = e
                            }
                        });
                        break;
                    case 'eventos':
                        this.eventos.forEach(e => {
                            if(e.evento_id == this.decryptID(this.id_coleccion)){
                                this.coleccion = e
                            }
                        });
                        break;
                    case 'videos':
                        this.videos.forEach(e => {
                            if(e.video_id == this.decryptID(this.id_coleccion)){
                                this.coleccion = e
                            }
                        });
                        break;
                    case 'All':                        
                            const useInstitucion = useInstitucionStore()
                            this.getPublicacionesCarreraAll()   
                            useInstitucion.asignarPublicacionesCarreras(this.publicacionesCarreras)                                                                                                             
                        break;
                    default:                    
                        break;
                }        
            }
        },
        created() {            
            this.createdComponent()            
        },
        mounted() {        
            this.loading= false
        },
        head() {
            return {
                title: 'UPEA | CONVOCATORIA DETALLE'
            }
        },
    }
</script>

