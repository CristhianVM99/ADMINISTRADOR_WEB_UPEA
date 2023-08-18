<template>
    <div id="main-wrapper" class="main-wrapper">
                
        <Header showHeaderTop="true" />

        <BreadCrumbTwo pageTitle='Autoridad' title='autoridad' />

        <div class="edu-team-details-area section-gap-equal">
            <div class="container">
                <div class="row row--40">
                    <div class="col-lg-4">
                        <div class="team-details-thumb">
                            <div class="thumbnail">
                                <img :src="url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad" alt="" />
                            </div>
                            <ul class="social-share">
                                <li><a target="_blank" :href="autoridad.celular_autoridad"><i class="icon-phone"></i></a></li>
                                <li><a target="_blank" :href="autoridad.facebook_autoridad"><i class="icon-facebook"></i></a></li>
                                <li><a target="_blank" :href="autoridad.twiter_autoridad"><i class="icon-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="team-details-content">
                            <div class="main-info">
                                <span class="subtitle">{{ $route.params.autoridad }}</span>
                                <h3 class="title">{{ autoridad.nombre_autoridad }}</h3>
                                <!--<span class="designation">{{ autoridad.cargo_autoridad }}</span>-->
                                <ul class="team-meta">
                                    <li><i class="icon-25"></i>{{ autoridad.cargo_autoridad }}</li>
                                    <!--<li>
                                        <div class="rating">
                                            <i class="icon-23"></i>
                                            <i class="icon-23"></i>
                                            <i class="icon-23"></i>
                                            <i class="icon-23"></i>
                                            <i class="icon-23"></i>
                                        </div>
                                        <span class="rating-count">(720 Rating)</span>
                                    </li>-->
                                </ul>
                            </div>
                            <div class="bio-describe">
                                <h4 class="title">Acerca de la Autoridad</h4>
                                <p>Descripcion de la Autoridad</p>
                            </div>
                            <div class="contact-info">
                                <h4 class="title">Contacto</h4>
                                <ul>
                                    <li><span>Direccion:</span>Direccion de la Universidad Publica de El Alto.</li>
                                    <li><span>Correo:</span><a href="mailto:edublink@example.com" target="_blank">correo@gmail.com</a></li>
                                    <li><span>Celular:</span><a href="tel:+37(417)683-4409">+591 {{ autoridad.celular_autoridad }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--<div class="edu-course-area course-area-1 edu-section-gap bg-lighten01">
            <div class="container">
                <SectionTitle title='My Popular Courses' alignment='section-center' />

                <div class="row g-5">
                    <div 
                        class="col-md-6 col-lg-4 col-xl-3" 
                        data-aos-delay="100" 
                        data-aos="fade-up" 
                        data-aos-duration="800" 
                        v-for="course in courseData.courses.slice(0, 8)" 
                        :key="course.id"
                    >
                        <CourseTypeOne :course="course" />
                    </div>
                </div>
            </div>
        </div>-->

        <FooterOne />
    </div>
</template>

<script>
    /* STORE: variables globales */
    import { useInstitucionStore } from '@/stores/store' 
    import CryptoJS from 'crypto-js'
    import courseData from '~/data/course';
    export default {
        async asyncData({ $axios }) {               
            let noticias = []
            const useInstitucion = useInstitucionStore()
            const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
            useInstitucion.asignarInstitucion(institucion.Descripcion)   
        
            if(useInstitucionStore().institucion == null){
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                useInstitucion.asignarInstitucion(institucion.Descripcion)  
            }                                                          
        },
        components: {
            Header: () => import("@/components/header/HeaderThree"),
            BreadCrumbTwo: () => import('@/components/common/BreadCrumbTwo'),
            SectionTitle: () => import('@/components/common/SectionTitle'),
            FooterOne: () => import("@/components/footer/FooterOne")
        },
        data () {
            return {
                courseData,
                url_api: process.env.APP_ROOT_API,
                autoridades: useInstitucionStore().institucion.autoridad,  
                clave_encryptacion: useInstitucionStore().clave_encryptacion,
                id_coleccion: this.$route.query.id,
                autoridad: {},
            }
        },
        methods: {
            decryptID(ciphertext) {
                const encryptionKey = this.clave_encryptacion; // Cambia esto por tu clave de encriptación
                const bytes = CryptoJS.AES.decrypt(ciphertext, encryptionKey);
                const decryptedID = bytes.toString(CryptoJS.enc.Utf8);
                return decryptedID;
            },
            recorrerAutoridad(){
                this.autoridades.forEach(aut => {
                    if(aut.id_autoridad == this.decryptID(this.id_coleccion)){
                        console.log(aut)
                        this.autoridad = aut
                        console.log("autoridad",this.autoridad)
                    }
                });
            },
            createdComponent(){
                this.recorrerAutoridad()
            }
        },
        created() {            
            this.createdComponent()
        },
        head() {
            return {
                title: 'Upea | Autoridades'
            }
        }
    }
</script>