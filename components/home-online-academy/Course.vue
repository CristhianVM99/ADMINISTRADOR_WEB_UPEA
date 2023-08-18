<template>
    <div class="home-four-course edu-course-area course-area-4 gap-tb-text bg-image">
        <div class="container edublink-animated-shape">
            <SectionTitle :preTitle="iniciales" :title='title' alignment='section-center' />

            <div class="row g-5">
                <div 
                    class="col-xl-6" 
                    data-aos-delay="100" 
                    data-aos="fade-up" 
                    data-aos-duration="800" 
                    v-for="(publicacion) in publicacionesCarreras.slice(-4).reverse()" :key="encryptID(publicacion.publicaciones_id)"
                >
                    <CourseTypeFour :publicacion="publicacion" />
                </div>
            </div>
            <div class="course-view-all" data-aos-delay="150" data-aos="fade-up" data-aos-duration="1200">
                <n-link to="/Convocatorias/All" class="edu-btn">Ver mas Publicaciones <i class="icon-4"></i></n-link>
            </div>
            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="-2" data-aos-delay="500" data-aos="fade" data-aos-duration="200" imgSrc="/images/about/shape-13.png" />
                <MouseMove addClassName="shape-2" dataDepth="1" data-aos-delay="500" data-aos="fade" />
            </ul>
        </div>
    </div>
</template>

<script>
    import CryptoJS from 'crypto-js'
    import { useInstitucionStore } from '@/stores/store'
    import courseData from '~/data/course';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            CourseTypeFour: () => import('@/components/course/CourseTypeFour'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        async asyncData({ $axios }) {
            const useInstitucion = useInstitucionStore()
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
                courseData,
                iniciales: useInstitucionStore().institucion.institucion_iniciales,
                title: useInstitucionStore().titlePublicacionesCarreras,
                carreras: useInstitucionStore().carreras,
                publicacionesCarreras: [],
                clave_encryptacion: useInstitucionStore().clave_encryptacion,
            }
        },
        methods: {                        
            encryptID(id) {
                const encryptionKey = this.clave_encryptacion // Cambia esto por tu clave de encriptación
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