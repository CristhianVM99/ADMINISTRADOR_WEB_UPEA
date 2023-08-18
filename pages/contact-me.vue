<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <div v-if="loading">
            <Loader />
        </div>

        <Header showHeaderTop="true" />

        <BreadCrumbTwo title='Contacto' />
        
        <section class="section-gap-equal contact-me-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-9">
                        <div class="contact-me">
                            <div class="inner">
                                <div class="thumbnail">
                                    <div class="thumb">
                                        <img style="width: 390px;height: 390px;object-fit: cover;" src="/images/universidad/fondocontacto.jpg" alt="Contact Me">
                                    </div>
                                    <ul class="shape-group">
                                        <MouseMove addClassName="shape-1" dataDepth="1.4" imgSrc="/images/about/shape-13.png" />
                                        <MouseMove addClassName="shape-2" dataDepth="-1.4" imgSrc="/images/counterup/shape-02.png" />
                                        <li class="shape-3">
                                            <img src="/images/about/shape-07.png" alt="Shape">
                                        </li>
                                    </ul>
                                </div>

                                <div class="contact-us-info">
                                    <h3 class="heading-title">Responderé todas tus preguntas</h3>
                                    <ul class="address-list">
                                        <li>
                                            <h5 class="title">Direccion</h5>
                                            <p>{{ direccion }}</p>
                                        </li>
                                        <li>
                                            <h5 class="title">Correos</h5>
                                            <p><a :href="'mailto:'+ correo1" target="_blank">{{ correo1 }}</a></p>
                                            <p><a :href="'mailto:'+ correo2" target="_blank">{{ correo2 }}</a></p>
                                        </li>
                                        <li>
                                            <h5 class="title">Celulares</h5>
                                            <p><a :href="'tel:+591'+celular1">(+591) {{ celular1 }}</a></p>
                                            <p><a :href="'tel:+591'+celular2">(+591) {{ celular2 }}</a></p>                                            
                                        </li>
                                        <li>
                                            <h5 class="title">Telefonos</h5>
                                            <p><a :href="telefono1">{{ telefono1 }}</a></p>
                                            <p><a :href="telefono2">{{ telefono2 }}</a></p>                                            
                                        </li>
                                    </ul>

                                    <ul class="social-share">
                                        <li><a target="_blank" :href="facebook"><i class="icon-facebook"></i></a></li>
                                        <li><a target="_blank" :href="twitter"><i class="icon-twitter"></i></a></li>
                                        <li><a target="_blank" :href="youtube"><i class="icon-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--<section class="edu-section-gap contact-form-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="contact-form">
                            <div class="section-title section-center">
                                <h3 class="title">Just Drop Me a Line</h3>
                            </div>

                            <form class="rnt-contact-form rwt-dynamic-form" ref="form" @submit.prevent="sendEmail">
                                <div class="row row--10">
                                    <div class="form-group col-lg-6">
                                        <input type="text" name="fullname" placeholder="Your Name">
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <input type="email" name="email" placeholder="Your Email">
                                    </div>
                                    <div class="form-group col-12">
                                        <input type="tel" name="phone" placeholder="Phone number">
                                    </div>
                                    <div class="form-group col-12">
                                        <textarea name="message" cols="30" rows="6" placeholder="Type your message"></textarea>
                                    </div>
                                    <div class="form-group col-12 text-center">
                                        <button class="rn-btn edu-btn submit-btn" name="submit" type="submit">Submit Now <i class="icon-4"></i></button>
                                         <div v-if="showResult" class="col-12 success-msg">
                                            <p>{{ resultText }}</p>
                                        </div> 
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="-2" imgSrc="/images/about/shape-15.png" />
                <MouseMove addClassName="shape-2" dataDepth="2" imgSrc="/images/cta/shape-04.png" />
                <MouseMove addClassName="shape-3" dataDepth="1" />
                <MouseMove addClassName="shape-4" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
            </ul>
        </section>-->

        <div class="google-map-area">
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe id="gmap_canvas" :src="mapa" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>

        <FooterOne />
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'    
    import emailjs from 'emailjs-com';
    export default {
        components: {
            Loader: () => import('@/components/loaders/LoaderUniv'),
            Header: () => import("@/components/header/HeaderThree"),
            BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
            FooterOne: () => import("@/components/footer/FooterOne"),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        async asyncData({ $axios }) {
            const useInstitucion = useInstitucionStore()
            if(useInstitucionStore().institucion == null){
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                const LinksUniversidad = await $axios.$get('/api/linksIntExtAll/'+ process.env.APP_ID_INSTITUCION)              
                const LinksNavUnidadesAdministrativas = LinksUniversidad.filter(link => link.ei_tipo === "NAV_UNID_ADMIN")
                useInstitucion.asignarInstitucion(institucion.Descripcion)  
                useInstitucion.asignarLinksUniversidad(LinksUniversidad)
                useInstitucion.asignarLinksUnidadesAdministrativas(LinksNavUnidadesAdministrativas)                             
            }
        }, 
        data() {
            return {
                resultText: '',
                showResult: false,
                celular1: useInstitucionStore().institucion.institucion_celular1,
                celular2: useInstitucionStore().institucion.institucion_celular2,
                telefono1: useInstitucionStore().institucion.institucion_telefono1,
                telefono2: useInstitucionStore().institucion.institucion_telefono2,
                correo1: useInstitucionStore().institucion.institucion_correo1,
                correo2: useInstitucionStore().institucion.institucion_correo2,
                direccion: useInstitucionStore().institucion.institucion_direccion,
                facebook: useInstitucionStore().institucion.institucion_facebook,
                youtube: useInstitucionStore().institucion.institucion_youtube,
                twitter: useInstitucionStore().institucion.institucion_twitter,
                mapa: useInstitucionStore().institucion.institucion_api_google_map,
                loading: true,
            }
        },
        methods: {
            sendEmail( e ) {
                emailjs.sendForm( 
                    'service_bxh6md3', 
                    'template_1g7v07n', 
                    this.$refs.form, 'user_8Lx0gfI1ktOoeEN8DTV10' 
                )
                .then( ( result ) => {
                    this.showResult = true;
                    this.resultText = 'Your message has been sent successfully. We will contact you soon.';
                    setTimeout( () => {
                        this.showResult = false;
                    }, 5000 );
                    e.target.reset();
                    console.log( 'SUCCESS!', result.text );
                }, ( error ) => {
                    this.showResult = true;
                    this.resultText = error.text;
                    setTimeout( () => {
                        this.showResult = false;
                    }, 5000 );
                    console.log( 'FAILED...', error.text );
                } );
            }
        },
        mounted() {        
            this.loading= false
        },
        head() {
            return {
                title: 'Contacto'
            }
        }
    }
</script>