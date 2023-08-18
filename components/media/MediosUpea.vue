<template>
    <div class="instagram-grid">
        <a :href="link.ei_link" target="_blank">
            <img :src="url_api + '/InstitucionUpea/LinksExternos/' + link.ei_imagen" :alt="link.ei_id">
            <span class="user-info">
                <span class="icon"><i class="icon-link"></i></span>
                <span class="user-name">{{ link.ei_nombre }}</span>
            </span>            
        </a>
    </div>
</template>

<script>
    export default {
        props: ['link'],
        data(){
            return{
                url_api: process.env.APP_ROOT_API, 
            }    
        }
    }
</script>