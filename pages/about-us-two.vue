<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <div v-if="loading">
            <Loader />
        </div>

        <Header showHeaderTop="true" />

        <BreadCrumbOne pageTitle='Acerca de nosotros' title='Universidad Publica de El Alto' />

        <Features />

        <VideoSection />

        <FooterOne />
    </div>
</template>

<script>    
    import { useInstitucionStore } from '@/stores/store'
    export default {
        components: {
            Loader: () => import('@/components/loaders/LoaderUniv'),
            Header: () => import("@/components/header/HeaderThree"),
            BreadCrumbOne: () => import('@/components/common/BreadCrumbOne'),
            Features: () => import('@/components/about-us-two/Features'),
            VideoSection: () => import('@/components/about-us-two/Video'),            
            FooterOne: () => import("@/components/footer/FooterOne")
        },   
        async asyncData({ $axios }) {
            const useInstitucion = useInstitucionStore()
            if(useInstitucionStore().institucion == null){
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                const LinksUniversidad = await $axios.$get('/api/linksIntExtAll/'+ process.env.APP_ID_INSTITUCION)              
                const LinksNavUnidadesAdministrativas = LinksUniversidad.filter(link => link.ei_tipo === "NAV_UNID_ADMIN")
                useInstitucion.asignarInstitucion(institucion.Descripcion)  
                useInstitucion.asignarLinksUniversidad(LinksUniversidad)
                useInstitucion.asignarLinksUnidadesAdministrativas(LinksNavUnidadesAdministrativas)                             
            }
        },
        data() {
            return {
                loading: true
            }
        },    
        mounted() {        
            this.loading= false
        },
        head() {
            return {
                title: 'Sobre Nosotros',                
            }
        }
    }
</script>