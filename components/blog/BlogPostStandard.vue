<template>
    <div class="edu-blog blog-style-4">
        <div class="inner">
            <div class="thumbnail">            
                <img v-if="tipo == 'publicaciones' || tipo == 'All' || tipo == 'servicios' || tipo == 'noticias'" :src="url_api + '/Publicaciones/' + coleccion.publicaciones_imagen" :alt="coleccion.publicaciones_titulo">
                <img v-if="tipo == 'eventos'" :src="url_api + '/Eventos/' + coleccion.evento_imagen" :alt="coleccion.evento_titulo">
                <iframe  
                    v-if="tipo == 'videos'"                      
                    :src="coleccion.video_enlace"
                    frameborder="0"                        
                    style="border-radius: 5px;width: 100%; height: 420px;"
                />                
                <!--<vue-pdf v-if="tipo == 'gacetas'" :src="url_api + '/Gaceta/' + coleccion.gaceta_documento" :page="currentPage" />                -->
                <client-only v-if="tipo == 'gacetas' || tipo == 'auditorias'">
                    <pdf-embed
                        :source="url_api + '/Gaceta/' + coleccion.gaceta_documento"
                        :page="1"
                    />
                </client-only>
            </div>
            <div class="content">
                <div class="category-wrap">
                    <h4 v-if="tipo == 'publicaciones' || tipo == 'All' || tipo == 'servicios' || tipo == 'noticias'" class="blog-category">{{ coleccion.publicaciones_tipo }}</h4>
                    <h4 v-if="tipo == 'eventos'" class="blog-category">{{ coleccion.evento_tipo }}</h4>
                </div>
                <h3 class="title">
                    <h2 v-if="tipo == 'publicaciones' || tipo == 'All' || tipo == 'servicios' || tipo == 'noticias'">{{ coleccion.publicaciones_titulo }}</h2>
                    <h2 v-if="tipo == 'eventos'" >{{ coleccion.evento_titulo }}</h2>
                    <h2 v-if="tipo == 'gacetas' || tipo == 'auditorias'" >{{ coleccion.gaceta_titulo }}</h2>
                    <h2 v-if="tipo == 'videos'" >{{ coleccion.video_titulo }}</h2>
                </h3>
                <ul class="blog-meta">
                    <li v-if="tipo == 'publicaciones' || tipo == 'All' || tipo == 'servicios' || tipo == 'noticias'"><i class="icon-27"></i>{{ coleccion.publicaciones_fecha }}</li>
                    <li v-if="tipo == 'eventos'"><i class="icon-27"></i>{{ coleccion.evento_fecha }}</li>
                    <li v-if="tipo == 'gacetas' || tipo == 'auditorias'"><i class="icon-27"></i>{{ convertirFecha(coleccion.gaceta_fecha) }}</li>
                    <li v-if="tipo == 'publicaciones' || tipo == 'All' || tipo == 'servicios' || tipo == 'noticias'"><i class="icon-28"></i>{{ coleccion.publicaciones_autor }} / {{ coleccion.publicaciones_documento }}</li>
                    <li v-if="tipo == 'evento'"><i class="icon-28"></i>{{ coleccion.evento_lugar }} / {{ coleccion.evento_hora }}</li>
                </ul>
                <p v-if="tipo == 'publicaciones' || tipo == 'All' || tipo == 'servicios' || tipo == 'noticias'" v-html="coleccion.publicaciones_descripcion"></p>
                <p v-if="tipo == 'eventos'" v-html="coleccion.evento_descripcion"></p>
                <p v-if="tipo == 'videos'" v-html="coleccion.video_breve_descripcion"></p>
                <div v-if="tipo == 'gacetas' || tipo == 'auditorias'" class="read-more-btn">
                    <a :href="url_api + '/Gaceta/' + coleccion.gaceta_documento" class="edu-btn btn-border btn-medium" target="_blank">
                        Descargar PDF <i class="icon-4"></i>
                    </a>
                </div>
                <!--<div class="blog-gallery-activation" v-if="tipo == 'eventos'">
                    <swiper class="swiper" :options="swiperOptions">
                        <div 
                            class="swiper-slide"
                            v-for="(galeria) in coleccion.evento_galeria"
                            :key="galeria.galeria_id"
                        >
                            <n-link to="/">
                                <img :src="url_api + '/Eventos/' + galeria.galeria_imagen" :alt="galeria.galeria_imagen">
                            </n-link>
                        </div>
                    </swiper>

                    <div class="swiper-navigation">
                        <div class="swiper-btn-nxt">
                            <i class="icon-west"></i>
                        </div>
                        <div class="swiper-btn-prv">
                            <i class="icon-east"></i>
                        </div>
                    </div>
                </div>-->
            </div>
        </div>
        <!--<CoolLightBox
            :items="blogInfo.video !== undefined ? blogInfo.video : []"
            :index="index"
            @close="index = null"
        >
        </CoolLightBox>-->
    </div>
</template>

<script>    
    export default {
        props: ['coleccion','tipo'],
        data() {
            return {
                index: null,
                videoList:[
                    {
                        src : this.coleccion?.video_enlace
                    }
                ] ,
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    pagination: false,
                    grabCursor: true,
                    speed: 1000,
                    autoplay: {
                        delay: 3000
                    },
                    navigation: {
                        nextEl: ".swiper-btn-nxt",
                        prevEl: ".swiper-btn-prv"
                    }
                },
                url_api: process.env.APP_ROOT_API, 
                currentPage: 1,                
            }
        },
        methods: {            
            convertirFecha(fecha) {
              const fechaObjeto = new Date(fecha);
              const dia = fechaObjeto.getDate();
              const mes = fechaObjeto.toLocaleString('es', { month: 'long' });
              const año = fechaObjeto.getFullYear();
              return `${dia} de ${mes} ${año}`;
            }
        },
        components: {
            
        },
        computed: {
            /*fechaFormateada(fecha_data) {
            const fecha = new Date(fecha_data);
            const dia = format(fecha, 'dd');
            const mes = format(fecha, 'MM');
            const anio = format(fecha, 'yyyy');
            
            return `${dia}/${mes}/${anio}`;
            }*/
        }
    }
</script>

<style>
    .blog-gallery-activation {
        position: relative;
    }
</style>