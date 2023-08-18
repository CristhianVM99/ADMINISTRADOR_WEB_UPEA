<template>
    <div class="edu-blog blog-style-1">
        <div class="inner">
            <div class="thumbnail">
                <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(servicio.publicaciones_id) }}">
                    <img style="height:462px;object-fit: cover;width: 100%;" :src="url_api + '/Publicaciones/' + servicio.publicaciones_imagen" alt="" />
                </n-link>
            </div>
            <div class="content position-top">
                <div class="read-more-btn">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(servicio.publicaciones_id) }}" class="btn-icon-round">
                        <i class="icon-4"></i>
                    </n-link>
                </div>
                <div class="category-wrap">
                    <n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(servicio.publicaciones_id) }}" class="blog-category">{{ servicio.publicaciones_tipo }}</n-link>
                </div>
                <h5 class="title"><n-link :to="{ path: '/ConvocatoriasDetalle/'+tipo, query: { id: encryptID(servicio.publicaciones_id) }}">{{ servicio.publicaciones_titulo }}</n-link></h5>
                <ul class="blog-meta">
                    <li><i class="icon-27"></i>{{ splitYear(servicio.publicaciones_fecha)  }} {{ splitMonth(servicio.publicaciones_fecha)  }}  {{ splitDay(servicio.publicaciones_fecha)  }}</li>
                </ul>
                <p>{{ servicio.publicaciones_autor }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import CryptoJS from 'crypto-js'    
    import { useInstitucionStore } from '@/stores/store'    
        export default {
            props: ['servicio'],
            data() {
                return {
                    direccion : useInstitucionStore().institucion.institucion_direccion,
                    url_api: process.env.APP_ROOT_API, 
                    tipo: 'servicios',
                    clave_encryptacion: useInstitucionStore().clave_encryptacion,
                }
            },
            methods: {   
                encryptID(id) {
                    const encryptionKey = this.clave_encryptacion // Cambia esto por tu clave de encriptaci贸n
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
                    'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN',
                    'jUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'
                ];
                return monthNames[month - 1];
                },                        
            }
        }    
</script>