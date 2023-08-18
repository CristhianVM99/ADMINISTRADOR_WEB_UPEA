<template>
    <div class="edu-course-area course-area-6 edu-section-gap bg-lighten01">
        <div class="container">
            <SectionTitle :preTitle='preTitleVideos' preTitleClass='pre-textsecondary' :title='titleVideos' alignment='section-center' />
            
            <swiper class="course-activation swiper" :options="swiperOptions">
                <div 
                    class="swiper-slide"
                    v-for="video in videosUniversidad.slice(0, 4)" 
                    :key="encryptID(video.video_id)"
                >
                    <CourseTypeEight tipo="videos" :coleccion="video" />
                </div>
            </swiper>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import CryptoJS from 'crypto-js'    
    /* STORE: variables globales */
    import { useInstitucionStore } from '@/stores/store' 
    import courseData from '~/data/course';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            CourseTypeEight: () => import('@/components/course/CourseTypeEight')
        },
        data () {
            return {
                courseData,
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    grabCursor: true,
                    speed: 1000,
                    autoplay: {
                        delay: 3000
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        }
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    }
                },
                titleVideos: useInstitucionStore().titleVideos,
                preTitleVideos: useInstitucionStore().preTitleVideos,
                videosUniversidad: useInstitucionStore().videosUniversidad,
                clave_encryptacion: useInstitucionStore().clave_encryptacion,
            }
        },
        methods: {
            encryptID(id) {
                const encryptionKey = this.clave_encryptacion // Cambia esto por tu clave de encriptaci贸n
                const ciphertext = CryptoJS.AES.encrypt(id.toString(), encryptionKey).toString()
                return ciphertext
            }, 
        },
    }
</script>

<style lang="scss">
    .course-area-6 {
        .swiper-pagination {
            position: absolute;
            width: 100%;
            text-align: center;
            left: 0;
            bottom: 120px;
        }
    }
</style>