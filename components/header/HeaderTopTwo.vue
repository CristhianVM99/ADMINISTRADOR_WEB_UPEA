<template>
    <div class="header-top-bar">
        <div class="container">
            <div class="header-top">
                <div class="header-top-left">
                    <ul class="header-info">
                        <li><a :href="`tel:+591${celular1}`"><i class="icon-phone"></i>Celular: {{ celular1 }} </a></li>
                        <li><a :href="`mailto:${correo1}`" target="_blank"><i class="icon-envelope"></i>Correo: {{ correo1 }} </a></li>
                    </ul>
                </div>
                <div class="header-top-right">
                    <ul class="header-info">                        
                        <li class="header-btn"><a :href="admin_link" target="_blank" class="edu-btn btn-secondary btn-medium">Ingresar <i class="icon-4"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useInstitucionStore } from '@/stores/store'
export default {
    async asyncData({ $axios }) {
        if(useInstitucionStore().institucion == null){
            const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
            useInstitucion.asignarInstitucion(institucion.Descripcion)  
        }
    },
    data() {
        return {            
            celular1: useInstitucionStore().institucion.institucion_celular1,                
            correo1: useInstitucionStore().institucion.institucion_correo1,
            admin_link: process.env.APP_ADMIN_API
        };
    },        
}
</script>