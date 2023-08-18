<template>
    <div>
        <div class="video-area-2 bg-image--14 bg-image">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-8">
                        <div class="video-banner-content">
                            <div class="video-btn">
                                <span v-for="( _, imageIndex ) in items" :key="imageIndex">
                                    <a @click="index = imageIndex" class="video-play-btn video-popup-activation">
                                        <i class="icon-18"></i>
                                    </a>
                                </span>
                            </div>
                            <h2 class="title">{{ video_title }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <CoolLightBox
            :items="items"
            :index="index"
            @close="index = null"
        >
        </CoolLightBox>
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    export default {
        data () {
            return {
                items: [
                    {
                        src: useInstitucionStore().institucion.institucion_link_video_vision,                        
                    }
                ],
                video_title: useInstitucionStore().videoTitleVideo,
                index: null
            }            
        }
    }
</script>