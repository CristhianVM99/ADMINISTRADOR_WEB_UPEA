<template>
    <div class="hero-banner hero-style-4 bg-image bg-image--18">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="banner-content">
                        <h1 class="title">{{ this.institucion_nombre }}</h1>
                        <p>{{ this.frase }}</p>
                        <div class="banner-btn">
                            <n-link to="/course/course-one" class="edu-btn">Carreras <i class="icon-4"></i></n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-gallery">
            <div class="thumbnail thumbnail-1" data-aos-delay="500" data-aos="fade-up" data-aos-duration="1000">
                <img :src="imgBanner1" alt="Girl Image">
            </div>
            <div class="thumbnail thumbnail-2" data-aos-delay="500" data-aos="fade-down" data-aos-duration="1000">
                <img :src="imgBanner2" alt="Girl Image">
            </div>
            <div class="thumbnail thumbnail-3" data-aos-delay="500" data-aos="fade-right" data-aos-duration="1000">
                <img :src="imgBanner3" alt="Girl Image">
            </div>
            <div class="online-support" data-aos-delay="600" data-aos="fade-right" data-aos-duration="1000">
                <div class="inner">
                    <div class="icon">
                        <i class="icon-29"></i>
                    </div>
                    <div class="content">
                        <span class="subtitle">Contacte al </span>
                        <h4 class="title"><a href="tel:+0123456789">+591 {{ celular }}</a></h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="scroll-down-btn">
            <a class="scroll-btn" href="#about"><i class="icon-41"></i></a>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-17.png" />
            <MouseMove addClassName="shape-2" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/banner/shape-03.png" />
            <MouseMove addClassName="shape-3" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/faq/shape-09.png" />
            <MouseMove addClassName="shape-4" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-15.png" />
            <MouseMove addClassName="shape-5" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-16.png" />
            <MouseMove addClassName="shape-6" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/faq/shape-12.png" />
            <MouseMove addClassName="shape-7" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-17.png" />
            <li class="shape-8" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                <span></span>
            </li>
        </ul>
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    export default {
        async asyncData({ $axios }) {
            if(useInstitucionStore().institucion == null){
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                useInstitucion.asignarInstitucion(institucion.Descripcion)  
            }
        },
        data() {
            return {
                institucion_nombre: useInstitucionStore().institucion.institucion_nombre,
                frase: useInstitucionStore().frase,
                celular: useInstitucionStore().institucion.institucion_celular1,
                
                /* IMAGENES */
                imgBanner1: useInstitucionStore().imgBanner1,
                imgBanner2: useInstitucionStore().imgBanner2,
                imgBanner3: useInstitucionStore().imgBanner3
            };
        },
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        },        
    }
</script>