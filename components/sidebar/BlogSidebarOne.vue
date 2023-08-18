<template>
    <div class="edu-blog-sidebar">
        <!--<div class="edu-blog-widget widget-search">
            <div class="inner">
                <h4 class="widget-title">Search</h4>
                <div class="content">
                    <form class="blog-search" action="#">
                        <button class="search-button"><i class="icon-2"></i></button>
                        <input type="text" placeholder="Search">
                    </form>
                </div>
            </div>
        </div>

        <div class="edu-blog-widget widget-latest-post" v-if="tipo == 'publicaciones' || tipo == 'eventos' ">
            <div class="inner">
                <h4 class="widget-title">Ultimas publicaciones</h4>
                <div class="content latest-post-list">
                    <div class="latest-post" v-for="blog in blogItems.slice(0, 3)" :key="blog.id">
                        <div class="thumbnail">
                            <n-link to="/blog/blog-details">
                                <img :src="'/images/blog/blog-thumb/' + blog.thumbSrc" :alt="blog.alt">
                            </n-link>
                        </div>
                        <div class="post-content">
                            <h6 class="title">
                                <n-link to="/blog/blog-details">{{ blog.title }}</n-link>
                            </h6>
                            <ul class="blog-meta">
                                <li><i class="icon-27"></i>{{ blog.date }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->

        <div class="edu-blog-widget widget-categories">
            <div class="inner">
                <h4 class="widget-title">Categorias</h4>
                <div class="content">
                    <ul class="category-list">
                        <li>
                            <n-link to="/convocatorias/All">publicaciones <span>({{ cant_publicaciones }})</span></n-link>
                        </li>
                        <li>
                            <n-link to="/convocatorias/servicios">servicios <span>({{ cant_ser }})</span></n-link>
                        </li>
                        <li>
                            <n-link to="/convocatorias/noticias">noticias <span>({{ cant_not }})</span></n-link>
                        </li>
                        <li>
                            <n-link to="/convocatorias/eventos">eventos <span>({{ cant_eve }})</span></n-link>
                        </li>
                        <li>
                            <n-link to="/convocatorias/gacetas">gacetas <span>({{ cant_gac }})</span></n-link>
                        </li>
                        <li>
                            <n-link to="/convocatorias/auditorias">auditorias <span>({{ cant_aud }})</span></n-link>
                        </li>
                        <li>
                            <n-link to="/convocatorias/videos">videos <span>({{ cant_vid }})</span></n-link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>

        <!--<div class="edu-blog-widget widget-action">
            <div class="inner">
                <h4 class="title">Get Online Courses From <span>EduBlink</span></h4>
                <span class="shape-line"><i class="icon-19"></i></span>
                <p>Nostrud exer ciation laboris aliqup</p>
                <n-link to="/course/course-one" class="edu-btn btn-medium">Start Now <i class="icon-4"></i></n-link>
            </div>
        </div>
        
        <div class="edu-blog-widget widget-categories">
            <div class="inner">
                <h4 class="widget-title">Archives</h4>
                <div class="content">
                    <ul class="category-list">
                        <li v-for="(archive, index) in archives.slice(0, 5)" :key="index">
                            <n-link to="/blog/blog-masonry">{{ archive.title }} <span>({{ archive.number }})</span></n-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="edu-blog-widget widget-tags">
            <div class="inner">
                <h4 class="widget-title">Tags</h4>
                <div class="content">
                    <div class="tag-list">
                        <n-link to="/blog/blog-masonry" v-for="(tag, index) in tags.slice(0, 5)" :key="index">{{ tag }}</n-link>
                    </div>
                </div>
            </div>
        </div>-->
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    export default {
        props: ['blogItems', 'tags', 'categories', 'archives', 'tags','tipo','contPub'],
        async asyncData({ $axios }) {
            const useInstitucion = useInstitucionStore()
            const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
            useInstitucion.asignarInstitucion(institucion.Descripcion)                   
            if(useInstitucionStore().publicacionesUniversidad == null || useInstitucionStore().serviciosUniversidad == null){                
                const publicacionesUniversidad = await $axios.$get('/api/publicacionesAll/'+ process.env.APP_ID_INSTITUCION)
                let publicaciones = []
                let servicios = []                
                /* CLASIFICAION DE PUBLICACIONES */
                publicacionesUniversidad.forEach(pub => {
                    switch (pub.publicaciones_tipo) {
                        case 'SERVICIO':
                            servicios.push(pub)
                            break;
                        case 'PUBLICACION':
                            publicaciones.push(pub)
                            break;
                        default:
                            publicaciones.push(pub)
                            break;
                    }
                });
                useInstitucion.asignarPublicacionesUniversidad(publicaciones)
                useInstitucion.asignarServiciosUniversidad(servicios)

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
        },
        data() {
            return {                
                publicaciones: useInstitucionStore().publicacionesCarreras,
                servicios: useInstitucionStore().serviciosUniversidad,            
                noticias: useInstitucionStore().noticiasUniversidad,
                gacetas: useInstitucionStore().gacetasUniversidad,
                auditorias: useInstitucionStore().auditoriasUniversidad,
                eventos: useInstitucionStore().eventosUniversidad,
                videos: useInstitucionStore().videosUniversidad,

                cant_ser: 0,
                cant_gac: 0,
                cant_aud: 0,
                cant_vid: 0,
                cant_eve: 0,
            }
        },
        computed: {
            cant_publicaciones(){
                let cantidad = Object.keys(this.publicaciones).length
                return cantidad
            }
        },
        methods: {
            createdComponent(){
                this.cant_ser = Object.keys(this.servicios).length
                this.cant_gac = Object.keys(this.gacetas).length
                this.cant_aud = Object.keys(this.auditorias).length
                this.cant_vid = Object.keys(this.videos).length
                this.cant_eve = Object.keys(this.videos).length
                this.cant_not = Object.keys(this.noticias).length
            }
        },
        created() {
            this.createdComponent()
        },
    };
</script>