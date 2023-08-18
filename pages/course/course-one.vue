<template>
    <div id="main-wrapper" class="main-wrapper">

        <!-- LOADER - PAGINA -->
        <div v-if="loading">
            <Loader />
        </div>

        <Header showHeaderTop="true" />

        <BreadCrumbTwo :title='title' />
        
        <div class="edu-course-area course-area-1 gap-tb-text">
            <div class="container">
                <div class="edu-sorting-area">
                    <div class="sorting-left">
                        <h6 class="showing-text">La Universidad Publica de El Alto cuenta con <span>{{ count_carreras }}</span> carreras</h6>
                    </div>                    
                </div>

                <div class="row g-5">
                    <div 
                        class="col-md-6 col-lg-4 col-xl-3"
                        v-for="carrera in carreras.slice(0, carreras.length - 2)" 
                        :key="carrera.carrera_id"
                    >
                        <CourseTypeOne :coleccion="carrera" extraClass="course-box-shadow" />
                    </div>
                </div>
            </div>
        </div>

        <FooterOne />
    </div>
</template>

<script>
    import { useInstitucionStore } from '@/stores/store'
    import courseData from '~/data/course';
    export default {
        components: {
            Header: () => import("@/components/header/HeaderThree"),
            BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
            CourseTypeOne: () => import('@/components/course/CourseTypeOne'),
            FooterOne: () => import("@/components/footer/FooterOne"),
            Loader: () => import('@/components/loaders/LoaderUniv'),
        },
        async asyncData({ $axios }) {                        
            if(useInstitucionStore().carreras == null){
                const useInstitucion = useInstitucionStore()                        
                let carreras  = await $axios.$get('api/upeacarrera')                                        
                let instituciones = await $axios.$get('/api/InstitucionUPEA')                
                carreras.forEach(car => {
                    instituciones.forEach(async inst => {
                        if(inst.id_carrera == car.carrera_id){
                            const lista = await $axios.$get('/api/linksIntExtAll/' + inst.institucion_id);
                            car.links = lista
                        }
                    });
                });                
                useInstitucion.asignarCarreras(carreras)  
            }
            if(useInstitucionStore().institucion == null){
                const useInstitucion = useInstitucionStore()                        
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                useInstitucion.asignarInstitucion(institucion.Descripcion)                   
            }
        },
        data() {
            return {
                courseData,
                defaultNumberOfCourses: 8,
                title: useInstitucionStore().titleCarreras,
                carreras: useInstitucionStore().carreras,
                count_carreras: Object.keys(useInstitucionStore().carreras).length,
                loading: true,   
            }
        },
        computed: {
            courses() {
                return this.courseData.courses.slice( 0, this.defaultNumberOfCourses );
            }
        },
        mounted() {
            this.loading= false
        },
        methods: {
            loadMore() {
                this.defaultNumberOfCourses += 4;
            },           
        },
        head() {
            return {
                title: 'UPEA | Carreras'
            }            
        }
    }
</script>