<template>
    <div class="hero-banner presentation-hero-style pv-hero-banner bg-image" id="intro">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="banner-content">
                        <span class="subtitle">{{ this.frase }}</span>
                        <h1 class="title">{{ this.institucion_nombre }}</h1>
                        <div class="banner-btn">
                            <a href="#" target="_blank" class="edu-btn">Comenzamos<i class="icon-4"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="banner-gallery">
            <div class="thumbnail thumbnail-1" data-aos-delay="500" data-aos="fade-down" data-aos-duration="1000">
                <img src="/images/preview/banner-thumb1.jpg" alt="demo">
            </div>
            <div class="thumbnail thumbnail-2" data-aos-delay="500" data-aos="fade-up" data-aos-duration="1000">
                <img src="/images/preview/banner-thumb2.jpg" alt="demo">
            </div>
            <div class="thumbnail thumbnail-3" data-aos-delay="500" data-aos="fade-down" data-aos-duration="1000">
                <img src="/images/preview/banner-thumb3.jpg" alt="demo">
            </div>
            <div class="thumbnail thumbnail-4" data-aos-delay="500" data-aos="fade-up" data-aos-duration="1000">
                <img src="/images/preview/banner-thumb4.jpg" alt="demo">
            </div>
            <div class="thumbnail thumbnail-5" data-aos-delay="500" data-aos="fade-up" data-aos-duration="1000">
                <img src="/images/preview/banner-thumb5.jpg" alt="demo">
            </div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-13.png" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
            <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/counterup/shape-02.png" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
            <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/about/shape-25.png" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
            <MouseMove addClassName="shape-4" dataDepth="-3" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" />
        </ul>
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    export default {
        data() {
            return {
                institucion_nombre: 'ninguna',
                frase: ''
            };
        },
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        methods: {
            createdComponent(){
                const userInstitucion = useInstitucionStore()
                console.log("nombre institucion desde store")
                console.log(userInstitucion.carreras)                
                this.institucion_nombre = userInstitucion.institucion.institucion_nombre
                this.frase = userInstitucion.frase
            },
        },
        created() {
            this.createdComponent()
        },
    }
</script>