<template>
    <div class="edu-team-area team-area-1 gap-tb-text">
        <div class="container">
            <SectionTitle :preTitle='iniciales' :title='title' alignment='section-center' />

            <div class="row g-5">
                <div class="col-lg-2"></div>
                <div 
                    class="col-lg-4 col-md-6" 
                    data-aos-delay="50" 
                    data-aos="fade-up" 
                    data-aos-duration="800" 
                    v-for="(autoridad, key) in autoridades" :key="key"
                >
                    <InstructorTwo :autoridad="autoridad" />
                </div>
                <div class="col-lg-2"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    import instructorData from '~/data/instructor';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            InstructorTwo: () => import('@/components/instructor/InstructorTwo')
        },
        data () {
            return {
                instructorData,
                iniciales: useInstitucionStore().institucion.institucion_iniciales,
                title: useInstitucionStore().autoridadesSeccionTitulo,  
                autoridades: useInstitucionStore().institucion.autoridad,  
                url_api: process.env.APP_ROOT_API,                          
            }
        },        
    }
</script>