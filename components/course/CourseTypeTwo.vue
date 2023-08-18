<template>
    <div class="edu-course course-style-3" :class="extraClass">

        <!-- PUBLICACIONES Y SERVICIOS UNIVERSITARIOS y ALL =========================-->
        <div v-if="tipo == 'publicaciones' || tipo == 'servicios' || tipo == 'All' || tipo == 'noticias'">
            <div class="inner">
            <div class="thumbnail">
                <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(coleccion.publicaciones_id) }}">
                    <img  style="height:100%;height: 420px;object-fit: cover;" :src="url_api + '/Publicaciones/' + coleccion.publicaciones_imagen" :alt="coleccion.publicaciones_titulo">
                </n-link>
                <div class="time-top">
                    <span class="duration">{{ coleccion.publicaciones_tipo }}</span>
                </div>
            </div>
            <div class="content">
                <span class="course-level">{{ coleccion.publicaciones_documento }}</span>
                <h5 class="title">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(coleccion.publicaciones_id) }}">{{ coleccion.publicaciones_titulo }}</n-link>
                </h5>
                <p>{{ convertirFecha2(coleccion.publicaciones_fecha) }}</p>
                <div class="course-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                    <!--<span class="rating-count">({{ course.ratingAvarage }} /{{ course.ratingTotal }} {{ course.ratingTotal > 1 ? 'Ratings' : 'Rating' }})</span>-->
                </div>
                <div class="read-more-btn">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(coleccion.publicaciones_id) }}" class="edu-btn btn-small btn-secondary">Ver mas detalles <i class="icon-4"></i></n-link>
                </div>
            </div>
            </div>
        </div>    

        <!-- GACETAS UNIVERSITARIAS ===========================================-->
        <div v-if="tipo == 'gacetas' || tipo == 'auditorias'">
            <div class="inner">
            <div class="thumbnail">
                <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(coleccion.gaceta_id) }}">                    
                    <client-only>
                        <pdf-embed
                          :source="url_api + '/Gaceta/' + coleccion.gaceta_documento"
                          :page="1"
                        />
                    </client-only>
                </n-link>                
            </div>
            <div class="content">
                <span class="course-level">{{ tipo }}</span>
                <h5 class="title">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(coleccion.gaceta_id) }}">{{ coleccion.gaceta_titulo }}</n-link>
                </h5>
                <p>{{ convertirFecha(coleccion.gaceta_fecha) }}</p>
                <div class="course-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                    <!--<span class="rating-count">({{ course.ratingAvarage }} /{{ course.ratingTotal }} {{ course.ratingTotal > 1 ? 'Ratings' : 'Rating' }})</span>-->
                </div>
                <div class="read-more-btn">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(coleccion.gaceta_id) }}" class="edu-btn btn-small btn-secondary">Ver mas detalles <i class="icon-4"></i></n-link>
                </div>
            </div>
            </div>
        </div>  

        <!-- EVENTOS UNIVERSITARIOS ============================================-->
        <div v-if="tipo == 'eventos'">
            <div class="inner">
            <div class="thumbnail">
                <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(coleccion.evento_id) }}">
                    <img  style="height:462px;object-fit: cover;" :src="url_api + '/Eventos/' + coleccion.evento_imagen" alt="img" />
                </n-link>
                <div class="time-top">
                    <span class="duration">{{ coleccion.evento_tipo }}</span>
                </div>
            </div>
            <div class="content">
                <span class="course-level">{{ coleccion.evento_lugar }}</span>
                <h5 class="title">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(coleccion.evento_id) }}">{{ coleccion.evento_titulo }}</n-link>
                </h5>
                <p>{{ convertirFecha2(coleccion.evento_fecha) }}</p>
                <div class="course-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                    <!--<span class="rating-count">({{ course.ratingAvarage }} /{{ course.ratingTotal }} {{ course.ratingTotal > 1 ? 'Ratings' : 'Rating' }})</span>-->
                </div>
                <div class="read-more-btn">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(coleccion.evento_id) }}" class="edu-btn btn-small btn-secondary">Ver mas detalles <i class="icon-4"></i></n-link>
                </div>
            </div>
            </div>
        </div>

        <!-- VIDEOS UNIVERSITARIOS =============================================-->
        <div v-if="tipo == 'videos'">
            <div class="inner">
            <div class="thumbnail">
                <iframe
                        :src="coleccion.video_enlace"
                        frameborder="0"                        
                        style="border-radius: 5px; width: 100%; height: 420px;"
                />    
                <div class="time-top">
                    <span class="duration">Video</span>
                </div>
            </div>
            <div class="content">
                <span class="course-level">Upea</span>
                <h5 class="title">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(coleccion.video_id) }}">{{ coleccion.video_titulo }}</n-link>
                </h5>
                <div class="course-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                    <!--<span class="rating-count">({{ course.ratingAvarage }} /{{ course.ratingTotal }} {{ course.ratingTotal > 1 ? 'Ratings' : 'Rating' }})</span>-->
                </div>
                <div class="read-more-btn">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(coleccion.video_id) }}" class="edu-btn btn-small btn-secondary">Ver mas detalles <i class="icon-4"></i></n-link>
                </div>
            </div>
            </div>
        </div>        
    </div>
</template>

<script>    
    import CryptoJS from 'crypto-js'
    import { useInstitucionStore } from '@/stores/store'
    export default {
        props: ['extraClass','tipo','coleccion'],
        data() {
            return {                
                url_api: process.env.APP_ROOT_API, 
                currentPage: 1,
                clave_encryptacion: useInstitucionStore().clave_encryptacion,
            }
        },
        methods: {
            encryptID(id) {
                const encryptionKey = this.clave_encryptacion // Cambia esto por tu clave de encriptaci贸n
                const ciphertext = CryptoJS.AES.encrypt(id.toString(), encryptionKey).toString()
                return ciphertext
            }, 
            convertirFecha(fecha) {
              const fechaObjeto = new Date(fecha);
              const dia = fechaObjeto.getDate();
              const mes = fechaObjeto.toLocaleString('es', { month: 'long' });
              const año = fechaObjeto.getFullYear();
              return `${dia} de ${mes} ${año}`;
            },
            convertirFecha2(fecha) {
              const fechaObjeto = new Date(fecha);
              const opcionesFecha = { day: 'numeric', month: 'long', year: 'numeric' };
              const fechaFormateada = fechaObjeto.toLocaleString('es', opcionesFecha);
              return fechaFormateada;
            }
        },
        components: {
            //VuePdf
        },
    }
</script>