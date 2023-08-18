<template>
    <div>
        <Nuxt />
        <ScrollToTop />
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    export default {
        components: {
            ScrollToTop: () => import('@/components/footer/ScrollToTop')
        },
        async asyncData({ $axios }) {
            if(useInstitucionStore().institucion == null){
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                useInstitucion.asignarInstitucion(institucion.Descripcion)  
            }
        },
        data() {
            return {
                institucion: useInstitucionStore().institucion,
            };
        },
        methods: {
            setColorsInstitucion(){
                if (this.institucion.colorinstitucion.length > 0) {
                document.documentElement.style.setProperty(
                    '--color-primary',
                    this.institucion.colorinstitucion[0].color_secundario
                    
                )
                document.documentElement.style.setProperty(
                    '--color-secondary',
                    this.institucion.colorinstitucion[0].color_primario
                )
                document.documentElement.style.setProperty(
                    '--color-tertiary',
                    this.institucion.colorinstitucion[0].color_terciario
                )
                }
            },
            createdComponentPrincipal(){
                //this.setColorsInstitucion()
            }
        },
        created() {
            this.createdComponentPrincipal()
        },
    }
</script>