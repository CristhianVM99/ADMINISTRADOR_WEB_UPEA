<template>
    <div class="edu-course course-style-4" :class="extraClass">
        <div class="inner">
            <div class="thumbnail">
                <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(publicacion.publicaciones_id) }}">
                    <img style="height:250px;width: 300px;object-fit: cover;" :src="url_api + '/Publicaciones/' + publicacion.publicaciones_imagen" alt="" />                    
                </n-link>
                <div class="time-top">
                    <span class="duration">{{ publicacion.publicaciones_tipo }}</span>
                </div>
            </div>
            <div class="content">
                <div class="course-price">{{ splitMonth(publicacion.publicaciones_fecha) }}</div>
                <h6 class="title">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(publicacion.publicaciones_id) }}">{{ publicacion.publicaciones_titulo }}</n-link>                    
                </h6>                               
                <p>{{  publicacion.publicaciones_documento }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import CryptoJS from 'crypto-js'
    import { useInstitucionStore } from '@/stores/store'
    export default {
        props: ['extraClass','publicacion'],
        data() {
            return {          
                url_api: process.env.APP_ROOT_API,                 
                direccion : useInstitucionStore().institucion.institucion_direccion,
                tipo: 'All',
                clave_encryptacion: useInstitucionStore().clave_encryptacion,
            }
        },
        methods: {    
            encryptID(id) {
                const encryptionKey = this.clave_encryptacion // Cambia esto por tu clave de encriptación
                const ciphertext = CryptoJS.AES.encrypt(id.toString(), encryptionKey).toString()
                return ciphertext
            }, 
            
            splitYear(fecha) {
            const [year] = fecha.split('-');
            return parseInt(year);
            },
            
            splitMonth(fecha) {
            const [, month] = fecha.split('-');
            return this.getMonthName(parseInt(month));
            },
            
            splitDay(fecha) {
            const [, , day] = fecha.split('-');
            return parseInt(day);
            },
            
            getMonthName(month) {
            const monthNames = [
                'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
            ];
            return monthNames[month - 1];
            },
                        
        }
    }
</script>