<template>
    <div class="edu-instagram-area instagram-area-1">
        <div class="container-fluid">
            <SectionTitle :preTitle="preTitle" :preTitleClass="content" :title="title" alignment="section-center" />
            <p class="container">{{ content }}</p>
            <div class="row g-3">
                <div class="medios_universitarios col-xl-4 col-md-4 col-sm-6" v-for="( link ) in links" :key="link.ei_id">
                    <Medio class="medio_enlace" :link="link" />
                </div>                
            </div>
        </div>

        <div style="height: 100px;"></div>
    </div>    
</template>

<script>
    /* STORE: variables globales */
    import { useInstitucionStore } from '@/stores/store' 
    import InstagramData from '~/data/instagram';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            Medio: () => import('@/components/media/MediosUpea'),
        },
        data () {
            return {
                InstagramData,
                preTitle: useInstitucionStore().preTitleMedios,
                title: useInstitucionStore().titleMedios,
                content: useInstitucionStore().contentMedios,
                links: useInstitucionStore().linksMedios
            }
        },
        created(){
        }
    }
</script>
<style>
.medios_universitarios{
    padding: 5%;
}
.medio_enlace{
    border-radius: 50%;
    overflow: hidden;
}
</style>