<template>
    <div class="faq-accordion" id="faq-accordion">
        <div class="accordion">            
            <div class="accordion-item">
                <h5 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true">
                        Mision
                    </button>
                </h5>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <div v-html="mision"></div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false">
                        Vision
                    </button>
                </h5>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <div v-html="vision"></div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false">
                        Objetivos
                    </button>
                </h5>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <div v-html="objetivos"></div>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h5 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false">
                        Sobre la Institucion
                    </button>
                </h5>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div class="accordion-body">
                        <div v-html="sobre_institucion"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { useInstitucionStore } from '@/stores/store'
    export default{
        data() {
            return {
                mision:'',
                vision:'',
                objetivos:'',
                sobre_institucion: '',
            }
        },
        methods: {
            createdComponent(){
                this.mision = useInstitucionStore().institucion.institucion_mision
                this.vision = useInstitucionStore().institucion.institucion_vision
                this.objetivos = useInstitucionStore().institucion.institucion_objetivos
                this.sobre_institucion = useInstitucionStore().institucion.institucion_sobre_ins
            }
        },
        created() {
            this.createdComponent()
        },
}
</script>