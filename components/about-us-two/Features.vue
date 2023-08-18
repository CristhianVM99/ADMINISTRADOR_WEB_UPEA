<template>
    <section class="why-choose-area-3 edu-section-gap">
        <div class="container">
            <div class="row row--45">
                <div class="section-title-flex section-title" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
                    <div class="left-content">
                        <h2 class="title">"Trazando un camino hacia la excelencia: La historia de la <span class="color-secondary">Universidad Pública de El Alto</span>"</h2>
                        <span class="shape-line"><i class="icon-19"></i></span>
                    </div>
                    <div class="right-content">
                        <div :class="{'texto-limitado': !mostrarCompleto, 'texto-completo': mostrarCompleto}" v-html="historia"></div>
                        <div class="edu-btn btn-medium">
                            <span @click="cambiarTamanoTexto" class="edu-btn btn-medium exptxt" target="_blank">
                                {{ mostrarCompleto ? 'Disminuir texto' : 'Expandir texto' }}<i class="icon-4"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-5">
                <div 
                    class="col-lg-4" 
                    data-aos-delay="150" 
                    data-aos="fade-up" 
                    data-aos-duration="800"
                    v-for="(feature, index) in features" :key="index"
                >
                    <div class="why-choose-box-2 features-box" :class="feature.colorClass">
                        <div class="icon">
                            <i :class="feature.iconClass"></i>
                        </div>
                        <div class="content">
                            <h4 class="title">{{ feature.title }}</h4>
                            <div class="txt" v-html="feature.details"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth=".8" />
            <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
            <li class="shape-3">
                <img class="rellax"
                    data-rellax-speed="-1.3" 
                    data-rellax-xs-speed="-1.3" 
                    data-rellax-mobile-speed="-0.5" 
                    data-rellax-tablet-speed="-0.5"
                    src="/images/faq/shape-12.png" 
                    alt="imagen"
                />
            </li>
        </ul>
    </section>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    import parallaxAnimation from '../../common/parallaxAnimation';
    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        mounted () {
            parallaxAnimation();
        },        
        data() {
            return {
                features: [
                    {
                        title: "Misión",
                        details: useInstitucionStore().institucion.institucion_mision,
                        iconClass: "icon-45",
                        colorClass: "color-primary-style"
                    },
                    {
                        title: "Visión",
                        details: useInstitucionStore().institucion.institucion_vision,
                        iconClass: "icon-46",
                        colorClass: "color-secondary-style"
                    },
                    {
                        title: "Objetivos",
                        details: useInstitucionStore().institucion.institucion_objetivos,
                        iconClass: "icon-47",
                        colorClass: "color-extra08-style"
                    }
                ],
                historia: useInstitucionStore().institucion.institucion_historia,
                mostrarCompleto: false,
            }
        },
        methods: {
            cambiarTamanoTexto() {
                this.mostrarCompleto = !this.mostrarCompleto;                
            },  
        },
    }
</script>
<style>
.texto-limitado {
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 550px; /* Establece el ancho máximo según tus necesidades */
}

.texto-completo {
  overflow: visible;
  text-overflow: clip;
  white-space: normal;
  max-height: none;
}
.exptxt{
    cursor: pointer !important;
}
.txt{
    text-align: justify !important;
}
</style>