<template>
    <div class="edu-campus-area gap-lg-top-equal">
        <div class="container edublink-animated-shape">
            <div class="row g-5">
                <div class="col-xl-7" data-fade-delay="50" data-fade="fade-right" data-fade-duration="800">
                    <div class="campus-image-gallery">
                        <div class="campus-thumbnail">
                            <div class="thumbnail">
                                <img :src="imgSistemasEnlaces" alt="Universidad Publica de El Alto">
                            </div>
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-1" dataDepth=".8" />
                            <MouseMove addClassName="shape-2" dataDepth="1.5" imgSrc="/images/about/shape-21.png" />
                            <MouseMove addClassName="shape-3" dataDepth="-1.5" imgSrc="/images/about/shape-13.png" />
                        </ul>
                    </div>
                </div>

                <div class="col-xl-5" data-fade-delay="50" data-fade="fade-left" data-fade-duration="800">
                    <div class="campus-content">
                        <div class="inner">
                            <div class="section-title section-left">
                                <span class="pre-title">{{ preTitleSistemas }}</span>
                                <h2 class="title">{{ titleSistemas }}</h2>
                                <span class="shape-line"><i class="icon-19"></i></span>
                            </div>
                            <div class="features-list">
                                <div class="features-box color-secondary-style">
                                    <!--<div class="icon">
                                        <i class="icon-37 watch-icon"></i>                                        
                                    </div>-->                                    
                                    <div class="content">
                                        <a :href="urlMatriculacion" target="_blank"><img style="height: 130px;margin-bottom: 15px;" :src="imgMatriculacion" alt="matriculacion mae"></a>                                        
                                        <a :href="urlMatriculacion" target="_blank"><h5 class="title">{{ titleMatriculacion }}</h5></a>
                                        <p>{{ contentMatriculacion }}</p>
                                    </div>
                                </div>
                                <div class="features-box color-primary-style">
                                    <!--<div class="icon">
                                        <i class="icon-38 art-board-icon"></i>
                                    </div>-->
                                    <div class="content">
                                        <a :href="urlFormulario02" target="_blank"><img style="height: 150px;margin-bottom: 15px" :src="imgFormulario02" alt="formulario02"></a>                                        
                                        <a :href="urlFormulario02" target="_blank"><h5 class="title">{{ titleFormulario02 }}</h5></a>
                                        <p>{{ contentFormulario02 }}</p>
                                    </div>
                                </div>
                                <div class="features-box color-extra05-style">
                                    <!--<div class="icon">
                                        <i class="icon-39 fitness-icon"></i>
                                    </div>-->
                                    <div class="content">
                                        <a :href="urlCeub" target="_blank"><img style="height: 150px;margin-bottom: 15px" :src="imgCeub" alt="formulario02"></a>                                        
                                        <a :href="urlCeub" target="_blank" style="display: block;"><h5 class="title">{{ titleCeub }}</h5></a>
                                        <p>{{ contentCeub }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul class="shape-group">
                            <MouseMove addClassName="shape-4" dataDepth=".8" />
                            <MouseMove addClassName="shape-5" dataDepth="2" />
                            <MouseMove addClassName="shape-6" dataDepth="-2" imgSrc="/images/about/shape-25.png" />
                        </ul>
                    </div>
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
                preTitleSistemas: useInstitucionStore().preTitleSistemas,
                titleSistemas: useInstitucionStore().titleSistemas,
                imgSistemasEnlaces: useInstitucionStore().imgSistemasEnlaces,
                //matriculacion
                titleMatriculacion: useInstitucionStore().titleMatriculacion,
                contentMatriculacion: useInstitucionStore().contentMatriculacion,
                imgMatriculacion: useInstitucionStore().imgMatriculacion,
                urlMatriculacion: useInstitucionStore().urlMatriculacion,
                //formulario 02
                titleFormulario02: useInstitucionStore().titleFormulario02,
                contentFormulario02: useInstitucionStore().contentFormulario02,
                imgFormulario02: useInstitucionStore().imgFormulario02,
                urlFormulario02: useInstitucionStore().urlFormulario02,
                //Ceub
                titleCeub: useInstitucionStore().titleCeub,
                contentCeub: useInstitucionStore().contentCeub,
                imgCeub: useInstitucionStore().imgCeub,
                urlCeub: useInstitucionStore().urlCeub,
            };
        },
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>