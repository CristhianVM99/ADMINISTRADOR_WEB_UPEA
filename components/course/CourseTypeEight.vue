<template>
    <div class="edu-course course-style-6" :class="extraClass">
        <div class="inner" v-if="tipo == 'videos'">
            <div class="thumbnail">
                <n-link to="/course/course-details">
                    <iframe
                        :src="coleccion.video_enlace"
                        frameborder="0"                        
                        style="border-radius: 5px; width: 100%; height: 420px;"
                    /> 
                </n-link>
                <div class="course-price price-round">Video</div>
            </div>
            <div class="content">
                <span class="course-level">Upea</span>
                <h5 class="title">
                    <n-link to="/course/course-details">{{ coleccion.video_titulo }}</n-link>
                </h5>
                <!--<ul class="course-meta">
                    <li><i class="icon-24"></i>{{ course.lessons }} {{ course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                    <li><i class="icon-25"></i>{{ course.students }} {{ course.students ? 'Students' : 'Student' }}</li>
                </ul>-->
            </div>
        </div>
        <div class="inner" v-if="tipo == 'noticias'">
            <div class="thumbnail">
                <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(coleccion.publicaciones_id) }}">
                    <img style="height:462px;object-fit: cover;width: 100%;" :src="url_api + '/Publicaciones/' + coleccion.publicaciones_imagen" :alt="coleccion.publicaciones_titulo">
                </n-link>
                <div class="course-price price-round">Upea</div>
            </div>
            <div class="content">
                <span class="course-level">{{ coleccion.publicaciones_documento }}</span>
                <h5 class="title">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(coleccion.publicaciones_id) }}">{{ coleccion.publicaciones_titulo }}</n-link>
                </h5>
                <!--<ul class="course-meta">
                    <li><i class="icon-24"></i>{{ course.lessons }} {{ course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                    <li><i class="icon-25"></i>{{ course.students }} {{ course.students ? 'Students' : 'Student' }}</li>
                </ul>-->
            </div>
        </div>
    </div>
</template>

<script>
    import CryptoJS from 'crypto-js' 
    import { useInstitucionStore } from '@/stores/store'   
    export default {
        props: ['extraClass', 'coleccion', 'tipo',],
        data() {
            return {
                url_api: process.env.APP_ROOT_API, 
                clave_encryptacion: useInstitucionStore().clave_encryptacion,
            }
        },        
        methods:{
            encryptID(id) {
                const encryptionKey = this.clave_encryptacion // Cambia esto por tu clave de encriptaci贸n
                const ciphertext = CryptoJS.AES.encrypt(id.toString(), encryptionKey).toString()
                return ciphertext
            }, 
        }
    }
</script>