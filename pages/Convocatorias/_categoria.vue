<template>
    <div id="main-wrapper" class="main-wrapper">

        <div v-if="loading">
            <Loader />
        </div>
        
        <Header showHeaderTop="true" />

        <BreadCrumbTwo :title='$route.params.categoria'  v-if="$route.params.categoria != 'All'"/>
        <BreadCrumbTwo title='Publicaciones universitarias'  v-if="$route.params.categoria == 'All'"/>
        
        <div class="edu-course-area course-area-1 gap-tb-text">
            <div class="container">
                <div class="edu-sorting-area">
                    <div class="sorting-left">
                        <h6 class="showing-text">Encontramos <span>{{ cantidad }}</span> {{ $route.params.categoria }} para ti</h6>
                    </div>
                    <div class="sorting-right">
                        <div class="layout-switcher">
                            <label>Listado</label>
                            <ul class="switcher-btn">
                                <li><n-link :to="'/convocatorias/'+$route.params.categoria" class="active"><i class="icon-53"></i></n-link></li>
                                <li><n-link :to="'/convocatoriasLista/'+$route.params.categoria" ><i class="icon-54"></i></n-link></li>
                            </ul>
                        </div>
                        <!--<div class="edu-sorting">
                            <div class="icon"><i class="icon-55"></i></div>
                            <select class="edu-select">
                                <option>Filters</option>
                                <option>Low To High</option>
                                <option>High Low To</option>
                                <option>Last Viewed</option>
                            </select>
                        </div>-->
                    </div>
                </div>

                <!-- publicaciones -->
                <div class="row g-5" v-if="$route.params.categoria == 'publicaciones'">
                    <div 
                        class="col-md-6 col-lg-4"                        
                        v-for="(publicacion) in publicaciones" :key="encryptID(publicacion.publicaciones_id)"
                    >
                        <CourseTypeTwo :tipo='$route.params.categoria' :coleccion="publicacion" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!-- publicaciones -->
                <div class="row g-5" v-if="$route.params.categoria == 'servicios'">
                    <div 
                        class="col-md-6 col-lg-4"                        
                        v-for="(servicio) in servicios" :key="encryptID(servicio.publicaciones_id)"
                    >
                        <CourseTypeTwo :tipo='$route.params.categoria' :coleccion="servicio" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!-- noticias -->
                <div class="row g-5" v-if="$route.params.categoria == 'noticias'">
                    <div 
                        class="col-md-6 col-lg-4"                        
                        v-for="(noticia) in noticias" :key="encryptID(noticia.publicaciones_id)"
                    >
                        <CourseTypeTwo :tipo='$route.params.categoria' :coleccion="noticia" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!-- publicaciones de las carreras-->
                <div class="row g-5" v-if="$route.params.categoria == 'All'">
                    <div 
                        class="col-md-6 col-lg-4"                        
                        v-for="(publicacion) in publicacionesCarreras" :key="encryptID(publicacion.publicaciones_id)"
                    >
                        <CourseTypeTwo :tipo='$route.params.categoria' :coleccion="publicacion" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!-- gacetas -->
                <div class="row g-5" v-if="$route.params.categoria == 'gacetas'">
                    <div 
                        class="col-md-6 col-lg-4"                                                
                        v-for="(gaceta) in gacetas" :key="encryptID(gaceta.gaceta_id)"
                    >
                        <CourseTypeTwo :tipo='$route.params.categoria' :coleccion="gaceta" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!-- auditorias -->
                <div class="row g-5" v-if="$route.params.categoria == 'auditorias'">
                    <div 
                        class="col-md-6 col-lg-4"                                                
                        v-for="(gaceta) in auditorias" :key="encryptID(gaceta.gaceta_id)"
                    >
                        <CourseTypeTwo :tipo='$route.params.categoria' :coleccion="gaceta" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!-- eventos -->
                <div class="row g-5" v-if="$route.params.categoria == 'eventos'">
                    <div 
                        class="col-md-6 col-lg-4"                        
                        v-for="(evento) in eventos" :key="encryptID(evento.evento_id)"
                    >
                        <CourseTypeTwo :tipo='$route.params.categoria' :coleccion="evento" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!-- videos -->
                <div class="row g-5" v-if="$route.params.categoria == 'videos'">
                    <div 
                        class="col-md-6 col-lg-4"                        
                        v-for="(video) in videos" :key="encryptID(video.video_id)"
                    >
                        <CourseTypeTwo :tipo='$route.params.categoria' :coleccion="video" extraClass="course-box-shadow" />
                    </div>
                </div>

                <!--<div class="load-more-btn">
                    <button 
                        class="edu-btn"
                        @click="loadMore" 
                        v-if="defaultNumberOfCourses < courseData.courses.length"
                    >
                        Ver mas<i class="icon-56"></i>
                    </button>
                </div>-->
            </div>
        </div>

        <FooterOne />
    </div>
</template>

<script>
    import CryptoJS from 'crypto-js'    
    import { useInstitucionStore } from '@/stores/store'
    import courseData from '~/data/course';
    export default {
        components: {
            Loader: () => import('@/components/loaders/LoaderUniv'),
            Header: () => import("@/components/header/HeaderThree"),
            BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
            CourseTypeTwo: () => import('@/components/course/CourseTypeTwo'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        async asyncData({ $axios }) {               
            let noticias = []
            let pubuniv = []
            const useInstitucion = useInstitucionStore()
            const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
            useInstitucion.asignarInstitucion(institucion.Descripcion)   
        
            if(useInstitucionStore().institucion == null || useInstitucionStore().linksNavUnidadesAdministrativas == null){
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                const LinksUniversidad = await $axios.$get('/api/linksIntExtAll/'+ process.env.APP_ID_INSTITUCION)              
                const LinksNavUnidadesAdministrativas = LinksUniversidad.filter(link => link.ei_tipo === "NAV_UNID_ADMIN")
                const LinksServiciosVirtuales = LinksUniversidad.filter(link => link.ei_tipo === "NAV_SERV_VIRT")
                const LinksOfertasAcademicas = LinksUniversidad.filter(link => link.ei_tipo === "NAV_OFER_ACAD")
                const LinksMediosDeComunicacion = LinksUniversidad.filter(link => link.ei_tipo === "NAV_MED_COM")
                const LinksInteraccionSocial = LinksUniversidad.filter(link => link.ei_tipo === "NAV_INT_SOC")
                useInstitucion.asignarInstitucion(institucion.Descripcion)  
                useInstitucion.asignarLinksUniversidad(LinksUniversidad)
                useInstitucion.asignarLinksUnidadesAdministrativas(LinksNavUnidadesAdministrativas)              
                useInstitucion.asignarLinksServiciosVirtuales(LinksServiciosVirtuales) 
                useInstitucion.asignarLinksOfertasAcademicas(LinksOfertasAcademicas) 
                useInstitucion.asignarLinksMediosDeComunicacion(LinksMediosDeComunicacion)         
                useInstitucion.asignarLinksInteraccionSocial(LinksInteraccionSocial)   
            }
            if(useInstitucionStore().carreras == null){
                const carreras  = await $axios.$get('api/upeacarrera')    
                useInstitucion.asignarCarreras(carreras)  

                // async function getCarreraPublicaciones(id) {
                //     const response = await this.$axios.$get('/api/publicacionesAll/'+ id);                        
                //     if(Object.keys(response).length > 0){        
                //         response.forEach(element => {        
                //             pubuniv.push(element)                    
                //         });
                //     }                
                // }
                // carreras.forEach((carrera) => {
                //     getCarreraPublicaciones(carrera.carrera_id)
                // })                                    
            }
            if(useInstitucionStore().publicacionesUniversidad == null || useInstitucionStore().serviciosUniversidad == null){                
                const publicacionesUniversidad = await $axios.$get('/api/publicacionesAll/'+ process.env.APP_ID_INSTITUCION)
                let publicaciones = []
                let servicios = []
                /* CLASIFICACION DE PUBLICACION */
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
            return { pubuniv }                  
        },
        data() {
            return {
                courseData,
                defaultNumberOfCourses: 9,
                publicaciones: useInstitucionStore().publicacionesUniversidad,
                servicios: useInstitucionStore().serviciosUniversidad,
                noticias: useInstitucionStore().noticiasUniversidad,
                publicacionesAll:useInstitucionStore().publicacionesCarreras,
                gacetas: useInstitucionStore().gacetasUniversidad,
                auditorias: useInstitucionStore().auditoriasUniversidad,
                eventos: useInstitucionStore().eventosUniversidad,
                videos: useInstitucionStore().videosUniversidad,
                carreras: useInstitucionStore().carreras,
                cantidad: 0,
                clave_encryptacion: useInstitucionStore().clave_encryptacion,
                loading: true,
                publicacionesCarreras: [],                 
            }
        },
        computed: {
            courses() {
                return this.courseData.courses.slice( 0, this.defaultNumberOfCourses );
            }
        },
        methods: {
            encryptID(id) {
                const encryptionKey = this.clave_encryptacion // Cambia esto por tu clave de encriptaci贸n
                const ciphertext = CryptoJS.AES.encrypt(id.toString(), encryptionKey).toString()
                return ciphertext
            },  
            loadMore() {
                this.defaultNumberOfCourses += 4;
            },
            async getCarreraPublicaciones(id) {
            const response = await this.$axios.$get('/api/publicacionesAll/'+ id);                        
                if(Object.keys(response).length > 0){        
                    response.forEach(element => {        
                        this.publicacionesCarreras.push(element)                    
                        this.cantidad = this.publicacionesCarreras.length
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
            createdComponent(){
                switch (this.$route.params.categoria) {
                    case 'publicaciones':
                            this.cantidad = Object.keys(this.publicaciones).length
                        break;
                    case 'servicios':
                            this.cantidad = Object.keys(this.servicios).length
                        break;
                    case 'noticias':
                            this.cantidad = Object.keys(this.noticias).length
                        break;
                    case 'gacetas':
                            this.cantidad = Object.keys(this.gacetas).length
                        break;
                    case 'auditorias':
                            this.cantidad = Object.keys(this.auditorias).length
                        break;
                    case 'eventos':
                            this.cantidad = Object.keys(this.eventos).length
                        break;
                    case 'videos':
                            this.cantidad = Object.keys(this.videos).length
                        break;
                    case 'All':                                   
                            const useInstitucion = useInstitucionStore()
                            this.getPublicacionesCarreraAll()   
                            useInstitucion.asignarPublicacionesCarreras(this.publicacionesCarreras)    
                            console.log("publicaciones",this.publicacionesCarreras)                          
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
                title: 'UPEA | CONVOCATORIAS'
            }
        }
    }
</script>