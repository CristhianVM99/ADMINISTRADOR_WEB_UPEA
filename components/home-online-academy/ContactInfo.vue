<template>
    <div class="cta-area-1">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                    <div class="home-four-cta edu-cta-box cta-style-3 bg-image bg-image--16">
                        <div class="inner">
                            <div class="content text-end">
                                <span class="subtitle">{{ titleEmail }}</span>
                                <h3 class="title"><a href="mailto:info@edublink">{{ correo_ins }}</a></h3>
                            </div>
                            <div class="sparator">
                                <span>o</span>
                            </div>
                            <div class="content">
                                <span class="subtitle">{{ titleTelefono }}</span>
                                <h3 class="title"><a href="tel:+011235641231">+591 {{ telefono_ins }}</a></h3>
                            </div>
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-01" dataDepth="2" imgSrc="/images/cta/shape-06.png" />
                            <MouseMove addClassName="shape-02" dataDepth="-2" imgSrc="/images/cta/shape-12.png" />
                            <MouseMove addClassName="shape-03" dataDepth="-3" imgSrc="/images/cta/shape-04.png" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data() {
            return {
                titleEmail : useInstitucionStore().titleEmailContacto,
                titleTelefono: useInstitucionStore().titleTelefonoContacto,
                correo_ins : useInstitucionStore().institucion.institucion_correo1,
                telefono_ins : useInstitucionStore().institucion.institucion_telefono1
            }
        },
    }
</script>