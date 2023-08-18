<template>
    <div class="hero-banner hero-style-3 bg-image bg-image--17" :style="backgroundStyle">
        <div class="container edublink-animated-shape">
            <div class="row">
                <div class="col-xl-6 col-lg-7">
                    <div class="banner-content">
                        <span class="subtitle">UPEA</span>
                        <h1 class="title">{{ this.institucion_nombre }}</h1>
                        <p>{{ this.frase }}</p>
                        <div class="banner-btn">
                            <n-link to="/course/course-one" class="edu-btn btn-secondary">Areas y Carreras <i class="icon-4"></i></n-link>
                        </div>
                    </div>
                </div>
            </div>

            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="200" data-aos="fade" data-aos-duration="200" imgSrc="/images/others/shape-10.png" />
                <MouseMove addClassName="shape-2" dataDepth="-3" data-aos-delay="200" data-aos="fade" data-aos-duration="200" imgSrc="/images/others/shape-11.png" />
                <li class="shape-3">
                    <img src="/images/others/shape-25.png" alt="Shape">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    export default {
        data() {
            return {
                institucion_nombre: useInstitucionStore().institucion.institucion_nombre,
                frase: useInstitucionStore().frase,
                celular: useInstitucionStore().institucion.institucion_celular1,
                imgBannerPrincipal: useInstitucionStore().imgBannerPrincipal,
            };
        },
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        computed: {
            backgroundStyle() {
                return {
                    'background-image': `url(${this.imgBannerPrincipal}) !important`,
                };
            }
        },        
    }
</script>