<template>
    <div class="edu-event-area" :class="extraClass">
        <div class="container edublink-animated-shape">

            <SectionTitle :preTitle='preTitle' :title='title' alignment='section-center' />
            <div class="row g-5">
                <div 
                    class="col-lg-4 col-md-6" 
                    data-aos-delay="100" 
                    data-aos="fade-up" 
                    data-aos-duration="800"
                    v-for="publicacion in publicaciones.slice(-2).reverse()" :key="encryptID(publicacion.publicaciones_id)"
                >
                    <EventOne :publicacion="publicacion" />
                </div>
                <div 
                    class="col-lg-4 col-md-6" 
                    data-aos-delay="100" 
                    data-aos="fade-up" 
                    data-aos-duration="800"
                    v-for="(publicacion) in publicacionesCarreras.slice(-1).reverse()" :key="encryptID(publicacion.publicaciones_id)"
                >
                    <EventOne :publicacion="publicacion" />
                </div>
            </div>            
            <div class="event-view-all-btn" data-aos-delay="150" data-aos="fade-up" data-aos-duration="1200">
                <h6 class="view-text">las ultimas publicaciones de la universidad publica de el alto y sus carreras 
                    <!-- <n-link to="/convocatorias/publicaciones" class="btn-transparent">la universidad<i class="icon-4"></i></n-link> -->
                    <n-link to="/convocatorias/All" class="btn-transparent">ver mas<i class="icon-4"></i></n-link>
                </h6>
            </div>

            <ul class="shape-group">
                <li class="shape-1" data-aos-delay="500" data-aos="fade" data-aos-duration="200">
                    <img class="rotateit" src="/images/about/shape-13.png" alt="Shape">
                </li>
                <MouseMove addClassName="shape-2" dataDepth=".9" data-aos-delay="500" data-aos="fade" data-aos-duration="200" />
            </ul>
        </div>
    </div>
</template>

<script>
    import CryptoJS from 'crypto-js'
    import eventData from '~/data/event';
    import { useInstitucionStore } from '@/stores/store'
    export default {
        props: ['extraClass'],
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            EventOne: () => import('@/components/event/EventOne'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data () {
            return {
                eventData,
                publicaciones: useInstitucionStore().publicacionesUniversidad,
                preTitle: useInstitucionStore().preTitlePublicaciones,
                title: useInstitucionStore().titlePublicacionesUpea,  
                clave_encryptacion: useInstitucionStore().clave_encryptacion,                
                carreras: useInstitucionStore().carreras,
                publicacionesCarreras: [],                
            }
        },
        methods: {
            encryptID(id) {
                const encryptionKey = this.clave_encryptacion // Cambia esto por tu clave de encriptaci贸n
                const ciphertext = CryptoJS.AES.encrypt(id.toString(), encryptionKey).toString()
                return ciphertext
            },  
            async getCarreraPublicaciones(id) {
            const response = await this.$axios.$get('/api/publicacionesAll/'+ id);                        
                if(Object.keys(response).length > 0){        
                    response.forEach(element => {        
                        this.publicacionesCarreras.push(element)
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
                const useInstitucion = useInstitucionStore()
                this.getPublicacionesCarreraAll()   
                useInstitucion.asignarPublicacionesCarreras(this.publicacionesCarreras)                             
            }
        },
        created() {
            this.createdComponent()
        },
    }
</script>