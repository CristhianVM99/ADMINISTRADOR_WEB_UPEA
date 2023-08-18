<template>
    <div id="main-wrapper" class="main-wrapper">

        <!-- LOADER - PAGINA -->
        <div v-if="loading">
            <Loader />
        </div>
        
        <!-- SECCION DE HEADER DE LA PAGINA -->
        <Header showHeaderTop="true" />
            
        
        <!-- SECCION DE BANNER PRINCIPAL DE LA PAGINA -->
        <Banner />

        <!-- SECCION DE DESCRIPCION BREVE DE PUNTOS RELEVANTES DE LA UNIVERSIDAD -->
        <Features />
        <div style="height: 100px;"></div>
        
        <!-- SECCION DE INFORMACION DE LA LUCHA DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <Information />

        <!-- SECCION DE MEDIOS UNIVERSITARIOS -->
        <Medios />

        <!-- SECCION DE VIDEO INSTITUCION DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <Video />        

        <!-- SECCION DE INFORMACION DE LA UNIVERSIDAD PUBLICA DE EL ALTO MISION - VISION - OBJETIVOS. -->
        <Information_mvo />        
        
        <!-- SECCON DE AUTORIDADES DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <Autoridades />        

        <!-- SECCION DE NOTICIAS DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <Noticias />        
        
        <!-- SECCION DE  PUBLICACIONES DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <PublicacionesUpea extraClass="event-area-2" />
        
        <!-- SECCION DE CONTACTO DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <Contacto />

        <!-- SECCION DE  EVENTOS DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <Eventos />                        

        <!-- SECCION DE SERVICIOS DE LA UNIVERSIDAD PUBLICA DE EL ALTO -->
        <Servicios />        
        
        <!-- SECCION DE FOOTER -->
        <FooterOne />        
    </div>
</template>

<script>
    /* STORE: variables globales */
    import { useInstitucionStore } from '@/stores/store' 
    /* EXPORT DEFAULT: exportacion del index */  
    export default { 
        async asyncData({ $axios }) {
            try {
                /* CONSULTA API: recuperamos los datos de la API desde aqui. */
                let publicaciones = []
                let servicios = []
                let noticias = []
                let auditorias =  []
                let gacetas = []
                //const LinksUniversidad = []

                const useInstitucion = useInstitucionStore()     
                const publicacionesCarreras = [];                       
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)

                /* obtenemos la imagen principal para el banner */
                const img_pricipal = institucion.Descripcion.portada.filter(port => port.portada_titulo === "BANNER")
                const imgBannerPrincipal = process.env.APP_ROOT_API + '/InstitucionUpea/Portada/' + img_pricipal[0].portada_imagen

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

                const menuAreasyCarreras = await $axios.$get('/api/area')
                const publicacionesUniversidad = await $axios.$get('/api/publicacionesAll/'+ process.env.APP_ID_INSTITUCION)                
                const eventosUniversidad = await $axios.$get('/api/eventoAll/' + process.env.APP_ID_INSTITUCION)
                const gacetasUniversidad = await $axios.$get('/api/gacetaunivAll/' + process.env.APP_ID_INSTITUCION)
                const videosUniversidad = await $axios.$get('/api/VideosAll/' + process.env.APP_ID_INSTITUCION)
                const LinksUniversidad = await $axios.$get('/api/linksIntExtAll/'+ process.env.APP_ID_INSTITUCION)              
                const LinksNavUnidadesAdministrativas = LinksUniversidad.filter(link => link.ei_tipo === "NAV_UNID_ADMIN")
                const LinksMedios = LinksUniversidad.filter(link => link.ei_tipo === "MEDIOS")

                /* CLASIFICACION DE GACETAS */
                gacetasUniversidad.forEach(gac => {
                    if(gac.gaceta_titulo.includes('AUDITORIA')){
                        auditorias.push(gac)
                    }else{
                        gacetas.push(gac)
                    }
                });

                /* CLASIFICACION DE PUBLICACIONES */
                publicacionesUniversidad.forEach(pub => {
                    switch (pub.publicaciones_tipo) {
                        case 'SERVICIO':
                            servicios.push(pub)
                            break;
                        case 'PUBLICACION':
                            publicaciones.push(pub)
                            break;
                        case 'NOTICIA':
                            noticias.push(pub)
                            break;
                        default:
                            publicaciones.push(pub)
                            break;
                    }
                });

                /* ASIGNAR DATOS: ingresamos datos al stores para que los demas componente puedan y tengan acceso a los mismos */
                useInstitucion.asignarInstitucion(institucion.Descripcion)   
                useInstitucion.asignarImgBannerPrincipalUpea(imgBannerPrincipal)                
                useInstitucion.asignarCarreras(carreras)  
                useInstitucion.asignarMenuAreasyCarreras(menuAreasyCarreras)                           
                useInstitucion.asignarPublicacionesCarreras(publicacionesCarreras)
                useInstitucion.asignarPublicacionesUniversidad(publicaciones)
                useInstitucion.asignarServiciosUniversidad(servicios)
                useInstitucion.asignarNoticiasUniversidad(noticias)
                useInstitucion.asignarAuditoriasUniversidad(auditorias)
                useInstitucion.asignarEventosUniversidad(eventosUniversidad)
                useInstitucion.asignarGacetasUniversidad(gacetas)
                useInstitucion.asignarAuditoriasUniversidad(auditorias)
                useInstitucion.asignarVideosUniversidad(videosUniversidad)
                useInstitucion.asignarLinksUniversidad(LinksUniversidad)
                useInstitucion.asignarLinksMedios(LinksMedios)   
                useInstitucion.asignarLinksUnidadesAdministrativas(LinksNavUnidadesAdministrativas)             
                return { institucion, imgBannerPrincipal}
            } catch (e) {
                /*publicaciones de los errores en la consola. */
                console.log(e)
            }
        },              
        components: {
            /* COMPONENTES: visualizacion de todos los componentes para la pagina principal que estamos usando acorde a sus carrera. */
            Header: () => import("@/components/header/HeaderThree"),            
            Banner: () => import("@/components/home-university/Banner"),
            Features: () => import("@/components/home-university/Features"),
            Information: () => import("@/components/home-main/About"),            
            Video: () => import("@/components/home-university/Video"),
            Information_mvo: () => import("@/components/home-online-academy/FAQ"),
            Autoridades: () => import("@/components/home-online-academy/Instructor"),            
            PublicacionesCarreras: () => import("@/components/home-online-academy/Course"),            
            PublicacionesUpea: () => import("@/components/event/EventSectionOne"),
            Contacto: () => import("@/components/home-online-academy/ContactInfo"),
            Eventos: () => import("@/components/home-distant-learning/Course"),            
            Servicios: () => import("@/components/home-main/Blog"),
            FooterOne: () => import("@/components/footer/FooterOne"),   
            TestimonialTwo: () => import("@/components/testimonial/TestimonialTwo"),       
            Campus: () => import("@/components/home-university/Campus"),      
            Noticias: () => import("@/components/home-yoga-instructor/Course"),                                
            Videos: () => import("@/components/home-online-academy/Videos"),
            Medios: () => import('@/components/home-online-academy/MediosUniversitarios'),
            Loader: () => import('@/components/loaders/LoaderUniv')
        },
        data() {
            return {
                carrera_colores : useInstitucionStore().institucion.colorinstitucion,
                color_intermedio: useInstitucionStore().color_intermedio,                   
                loading: true,             
            };
        },
        methods: {            
            setColor(){
              if (Object.keys(this.carrera_colores).length != 0) {
                if (process.client) { // Verifica si el código se está ejecutando en el lado del cliente
                  let color_primario = this.carrera_colores[0].color_primario
                  let color_secundario = this.carrera_colores[0].color_secundario
                  let color_terciario = this.carrera_colores[0].color_terciario

                  document.documentElement.style.setProperty('--color-primary',color_primario);
                  document.documentElement.style.setProperty('--color-secondary',color_secundario);
                  document.documentElement.style.setProperty('--color-tertiary',color_terciario);
                  document.documentElement.style.setProperty('--color-textSecondary',color_primario);                
                  document.documentElement.style.setProperty('--color-btn',`linear-gradient(to left,${color_primario},#511116,${color_secundario}`)
                }
              }
            },   
            createdComponent(){
                this.setColor()                
            }
        },
        created(){
            this.createdComponent()
        },
        mounted() {        
            this.loading= false
        },
        head() {
            return {
                /* TITULO DE LA PAGINA PRINCIPAL */
                title: this.institucion.Descripcion.institucion_iniciales+" | "+this.institucion.Descripcion.institucion_nombre
            }
        },                  
    }
</script>