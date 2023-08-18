<template>
    <div class="edu-blog-area blog-area-1 edu-section-gap">
        <div class="container">
            <SectionTitle :preTitle='preTitle' :title='title' alignment='section-center' />

            <swiper class="course-activation swiper" :options="swiperOptions">
                <div class="row g-5">
                    <div 
                        class="col-lg-4 col-md-6 col-12" 
                        data-aos-delay="100" 
                        data-aos="fade-up" 
                        data-aos-duration="800"
                        v-for="servicio in servicios.slice(-3).reverse()" :key="encryptID(servicio.publicaciones_id)"
                    >
                        <BlogPostOne :servicio="servicio" />
                    </div>
                </div>
            </swiper>
            <div class="swiper-pagination"></div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="-1.4" imgSrc="/images/about/shape-02.png" />
            <MouseMove addClassName="shape-2" dataDepth="2.5" />
            <MouseMove addClassName="shape-3" dataDepth="-2.3" imgSrc="/images/counterup/shape-05.png" />
        </ul>
    </div>
</template>

<script>    
    import CryptoJS from 'crypto-js'
    import { useInstitucionStore } from '@/stores/store'
    import blogData from '~/data/blog';
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle'),
            BlogPostOne: () => import('@/components/blog/BlogPostOne'),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        data () {
            return {
                blogData,
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: false,
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
                preTitle: useInstitucionStore().preTitleServicios,
                title: useInstitucionStore().titleServicios,
                servicios: useInstitucionStore().serviciosUniversidad,
                clave_encryptacion: useInstitucionStore().clave_encryptacion,
            }
        },
        methods: {   
            encryptID(id) {
                const encryptionKey = this.clave_encryptacion // Cambia esto por tu clave de encriptaci贸n
                const ciphertext = CryptoJS.AES.encrypt(id.toString(), encryptionKey).toString()
                return ciphertext
            },  
            
            splitYear(fecha) {
            const [year] = fecha.split('-');
            return parseInt(year);
            },
            
            splitMonth(fecha) {
            const [, month] = fecha.split('-');
            return this.getMonthName(parseInt(month));
            },
            
            splitDay(fecha) {
            const [, , day] = fecha.split('-');
            return parseInt(day);
            },
            
            getMonthName(month) {
            const monthNames = [
                'ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN',
                'jUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'
            ];
            return monthNames[month - 1];
            },                        
        }
    }
</script>