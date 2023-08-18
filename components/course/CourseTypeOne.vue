<template>
    <div class="edu-course course-style-1 hover-button-bg-white" :class="extraClass">
        <div class="inner">
            <div class="thumbnail">
                <div v-for="(logo, logo_id) in coleccion.logos" :key="logo_id">
                    <img width="100%" height="100%" :src="url_api + '/Carrera/Logos/' + logo.logos_carrera" :alt="logo.logos_carrera">-
                </div>
                <div class="time-top">
                    <span class="duration">{{ coleccion.nombre_simple }}</span>
                </div>
            </div>
            <div class="content">
                <span class="course-level">Area: {{ coleccion.area }}</span>
                <h6 class="title">
                    <p>{{ coleccion.carrera }}</p>
                </h6>
                <!--<div class="course-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                    <span class="rating-count">({{ course.ratingAvarage }} /{{ course.ratingTotal }} {{ course.ratingTotal > 1 ? 'Ratings' : 'Rating' }})</span>
                </div>
                <div class="course-price">course.currentPrice</div>
                <ul class="course-meta">
                    <li><i class="icon-24"></i>{{ course.lessons }} {{ course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                    <li><i class="icon-25"></i>{{ course.students }} {{ course.students ? 'Students' : 'Student' }}</li>
                </ul>-->
                <p>Links de la Carrera</p>
                <div class="read-more-btn" v-for="(link,link_id) in coleccion.links" :key="link_id">
                        <a :href="link.ei_link" class="edu-btn btn-border btn-medium" target="_blank">
                            {{ link.ei_nombre }} <i class="icon-4"></i>
                        </a>
                </div>
            </div>
        </div>
        <!--<div class="course-hover-content-wrapper">
            <button class="wishlist-btn"><i class="icon-22"></i></button>
        </div>
        <div class="course-hover-content">
            <div class="content">
                <button class="wishlist-btn"><i class="icon-22"></i></button>
                <span class="course-level">{{ course.level }}</span>
                <h6 class="title">
                    <n-link to="/course/course-details">{{ course.title }}</n-link>
                </h6>
                <div class="course-rating">
                    <div class="rating">
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                        <i class="icon-23"></i>
                    </div>
                    <span class="rating-count">({{ course.ratingAvarage }} /{{ course.ratingTotal + course.ratingTotal > 1 ? 'Ratings' : 'Rating' }})</span>
                </div>
                <div class="course-price">${{ course.currentPrice }}</div>
                <p>{{ course.excerpt }}</p>
                <ul class="course-meta">
                    <li><i class="icon-24"></i>{{ course.lessons + course.lessons > 1 ? 'Lessons' : 'Lesson' }}</li>
                    <li><i class="icon-25"></i>{{ course.students + course.students ? 'Students' : 'Student' }}</li>
                </ul>
                <n-link to="/course/course-details" class="edu-btn btn-secondary btn-small">Enrolled <i class="icon-4"></i></n-link>
            </div>
        </div>-->
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    export default {
        props: ['extraClass', 'coleccion',],        
        data() {
            return {
                url_api: process.env.APP_ROOT_API,             
            };
        },        
        created(){            
        }
    }
</script>