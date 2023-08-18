<template>
    <div class="testimonial-area-5 ">        
        <div class="container">
            <div class="row g-lg-5">
                <div class="col-lg-5">
                    <div class="testimonial-heading-area">
                        <div class="section-title section-left" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                            <span class="pre-title">{{ preTitle }}</span>
                            <h2 class="title">{{ title }}</h2>
                            <span class="shape-line"><i class="icon-19"></i></span>
                            <p>{{ content }}</p>                            
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <swiper :options="swiperOptions" class="swiper-testimonial-slider-wrapper swiper testimonial-coverflow">
                        <div class="swiper-slide">
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img :src="imgUpeaTv" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <h3>Upea Tv</h3>
                                    <p>                                        
                                        {{ contentUpeaTv }}
                                    </p>
                                    <!--<div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Ray Sanchez</h5>
                                    <span class="subtitle">Student</span>-->
                                    <a href="https://tv.upea.bo/" target="_blank" class="edu-btn btn-large">Ver<i class="icon-4"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img :src="imgRadioUpea" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>
                                </div>
                                <div class="content">
                                    <h3>Radio Upea</h3>
                                    <p>{{ contentRadioUpea }}</p>
                                    <!--<div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Amber Page</h5>
                                    <span class="subtitle">Designer</span>-->
                                    <a href="https://fm100.upea.bo/" target="_blank" class="edu-btn btn-large">Ver<i class="icon-4"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img :src="imgBiblioteca" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <h3>Biblioteca Universitaria</h3>
                                    <p>{{ contentBiblioteca }}</p>
                                    <!--<div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Amber Page</h5>
                                    <span class="subtitle">Designer</span>-->
                                    <a href="http://mibiblioteca.upea.bo/" target="_blank" class="edu-btn btn-large">Ver<i class="icon-4"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img :src="imgRepositorioInstitucional" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <h3>Repositorio Institucional</h3>
                                    <p>{{ contentRepositorioInstitucional }}</p>
                                    <!--<div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Amber Page</h5>
                                    <span class="subtitle">Designer</span>-->
                                    <a href="http://repositorio.upea.bo/" target="_blank" class="edu-btn btn-large">Ver<i class="icon-4"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="testimonial-grid">
                                <div class="thumbnail">
                                    <img :src="imgInstitutoInvestivacion" alt="Testimonial">
                                    <span class="qoute-icon"><i class="icon-26"></i></span>

                                </div>
                                <div class="content">
                                    <h3>Instituto de Investigacion</h3>
                                    <p>{{ contentInstitutoInvestigacion }}</p>
                                    <!--<div class="rating-icon">
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                        <i class="icon-23"></i>
                                    </div>
                                    <h5 class="title">Amber Page</h5>
                                    <span class="subtitle">Designer</span>-->
                                    <a href="https://dicyt.upea.bo/" target="_blank" class="edu-btn btn-large">Ver<i class="icon-4"></i></a>
                                </div>
                            </div>
                        </div>
                    </swiper>
                    <div class="swiper-pagination text-center"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    /* STORE: variables globales */
    import { useInstitucionStore } from '@/stores/store' 
    export default {
        data() {
            return {
                swiperOptions: {
                    loop: true,
                    speed: 500,
                    // autoplay: false,
                    slidesPerView: 1,
                    centeredSlides: true,
                    effect: 'coverflow',
                    autoplay: {
                        delay: 4000
                    },
                    breakpoints: {
                        575: {
                            slidesPerView: 2
                        }
                    },
                    coverflowEffect: {
                        rotate: 0,
                        slideShadows: false,
                        depth: 180,
                        stretch: 80
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    }
                },
                title: useInstitucionStore().titleMedios,
                preTitle:useInstitucionStore().preTitleMedios,
                content:useInstitucionStore().contentMedios,
                contentUpeaTv:useInstitucionStore().contentUpeaTv,
                contentRadioUpea:useInstitucionStore().contentRadioUpea,
                contentBiblioteca:useInstitucionStore().contentBiblioteca,
                contentRepositorioInstitucional:useInstitucionStore().contentRepositorioInstitucional,
                contentInstitutoInvestigacion: useInstitucionStore().contentInstitutoInvestigacion,
                imgUpeaTv:useInstitucionStore().imgUpeaTv,
                imgRadioUpea:useInstitucionStore().imgRadioUpea,
                imgBiblioteca:useInstitucionStore().imgBiblioteca,
                imgRepositorioInstitucional:useInstitucionStore().imgRepositorioInstitucional,
                imgInstitutoInvestivacion: useInstitucionStore().imgInstitutoInvestivacion,
            }
        }
    }
</script>

<style lang="scss">
    .swiper-testimonial-slider-wrapper {
        .swiper-slide {
            opacity: 0;
            &.swiper-slide-prev,
            &.swiper-slide-next,
            &.swiper-slide-active {
                opacity: 1;
            }
            @media #{$large-mobile} {
                &.swiper-slide-prev,
                &.swiper-slide-next {
                    opacity: 0;
                }
            }
            &.swiper-slide-prev {
                .testimonial-grid {
                    margin-left: 36px;
                    box-shadow: 70px 0px 50px 0px rgba(26, 46, 85, .1);
                    padding: 40px 30px 50px;
                    @media #{$smlg-device} {
                        margin-left: 0px;
                    }
                    @media #{$md-layout} {
                        margin-left: 40px;
                    }
                }
            }
            &.swiper-slide-next {
                .testimonial-grid {
                    margin-left: 40px;
                    margin-right: 36px;
                    box-shadow: -40px 0px 50px 0px rgba(26, 46, 85, .1);
                    padding: 40px 30px 50px;
                    @media #{$smlg-device} {
                        margin-left: 0px;
                        margin-right: 0px;
                    }
                    @media #{$md-layout} {
                        margin-left: 40px;
                    }
                }
            }
        }
        &.testimonial-coverflow {
            .swiper-slide {
                &.swiper-slide-active {
                    .testimonial-grid {
                        &:before {
                            opacity: 0;
                        }
                    }
                }
            }
        }
    }
</style>