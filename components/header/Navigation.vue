<template>
    <ul class="mainmenu">
        <li class="has-droupdown"><n-link to="/">Inicio</n-link>
            <ul class="submenu">
                <li><n-link to="/about-us-two">Sobre Nosotros</n-link></li>
                <li><n-link to="/contact-me">Contacto</n-link></li>                
            </ul>
        </li>
        <!--<li class="has-droupdown"><n-link to="">Areas y Carreras</n-link>            
            <ul class="mega-menu">                               
                <li v-for="(area, id_area) in menuAreasyCarreras" :key="id_area">
                    <h6 style="font-size: 0.7em;" class="menu-title">{{ area.area }}</h6>
                    <ul class="submenu">
                        <li v-for="(carrera, id_carrera) in area.carreras" :key="id_carrera">
                            <a style="font-size: 0.7em;" :href="getLinkCarrera(carrera.nombre_simple)" target="_blank">{{ carrera.carrera }}</a>
                        </li>                        
                    </ul>
                </li>
            </ul>          
        </li>-->                
        <li><n-link to="/course/course-one">Areas y Carreras</n-link></li>

        <li class="has-droupdown"><n-link to="">Avisos</n-link>
            <ul class="submenu">
                <li><n-link to="/convocatorias/All">Publicaciones</n-link></li>
                <li><n-link to="/convocatorias/servicios">Servicios</n-link></li>                
                <li><n-link to="/convocatorias/noticias">Noticias</n-link></li>                
                <li><n-link to="/convocatorias/gacetas">Gacetas</n-link></li>
                <li><n-link to="/convocatorias/auditorias">Auditorias</n-link></li>
                <li><n-link to="/convocatorias/eventos">Eventos</n-link></li>
                <li><n-link to="/convocatorias/videos">Videos</n-link></li>                                
            </ul>
        </li>

        <li class="has-droupdown"><n-link to="">Mas</n-link>
            <ul class="mega-menu">
                <li>
                    <h6 class="menu-title">Medios de Comunicación</h6>
                    <ul class="submenu">
                        <li><a href="https://fm100.upea.bo/" target="_blank"><img :src="imgRadioUpeaNav" alt=""></a></li>
                        <li><a href="https://tv.upea.bo/" target="_blank"><img :src="imgUpeaTvNav" alt=""></a></li>
                        <li><a href="http://www.upeaaldia.com/" target="_blank"><img :src="imgPeriodicoUpeaNav" alt=""></a></li>                                                
                    </ul>
                </li>
                <li>
                    <h6 class="menu-title">Ofertas Academicas</h6>
                    <ul class="submenu">
                        <li><a href="https://solid.upea.bo/" target="_blank">Becas</a></li>
                        <li><a href="https://posgrado.upea.bo/" target="_blank">Convocatorias Posgrado</a></li>                        
                    </ul>
                </li>
                <li>
                    <h6 class="menu-title">Interaccion Social</h6>
                    <ul class="submenu">
                        <li><a href="https://solid.upea.bo/" target="_blank"><img :src="imgDisbed" alt="Disbec"></a></li>
                        <p style="padding-left: 15px;">Dirección de Interacción Social, Bienestar Estudiantil y Deportes</p>
                        <li><a href="https://solid.upea.bo/" target="_blank">Disbec</a></li>
                    </ul>
                </li>
                <li>
                    <h6 class="menu-title">Servicios Virtuales</h6>
                    <ul class="submenu">
                        <li><a href="http://mibiblioteca.upea.bo/" target="_blank">Biblioteca Virtual</a></li>
                        <li><a href="https://biblioteca.upea.bo/" target="_blank">Biblioteca Upea</a></li>
                        <li><a href="http://repositorio.upea.bo/" target="_blank">Repositorio Upea</a></li>
                        <!-- <li><a href="https://www.sie.upea.bo/l" target="_blank">Sistema de informacion Estudiantil</a></li>                         -->
                    </ul>
                </li>
            </ul>
        </li>

        <li class="has-droupdown"><n-link to="">Unidades Administrativas</n-link>
            <ul class="submenu">
                <li v-for="(link, id_link) in linksNavUnidadesAdministrativas" :key="id_link">
                    <a target="_blank" :href="link.ei_link">{{ capitalizeFirstLetter(link.ei_nombre) }}</a>
                </li>                
            </ul>                    
        </li>        
        
        <!--<li class="has-droupdown"><n-link to="">Mas</n-link>
            <ul class="submenu">
                <li><a href="http://repositorio.upea.bo/" target="_blank">Repositorio Institucional</a></li>
                <li><a href="https://disbedc.upea.bo/" target="_blank">Disbec</a></li>
                <li><a href="http://mibiblioteca.upea.bo/" target="_blank">Mi Biblioteca Upea</a></li>
                <li><a href="https://fm100.upea.bo/" target="_blank">Radio Upea</a></li>
                <li><a href="https://tv.upea.bo/" target="_blank">Tv Upea</a></li>
            </ul>
        </li>-->
    </ul>
</template>
<script>
    import { useInstitucionStore } from '@/stores/store'
    export default{
        data() {
            return {
                menuAreasyCarreras: useInstitucionStore().menuAreasyCarreras,
                linksCarreras: useInstitucionStore().linksCarreras,
                imgUpeaTvNav: useInstitucionStore().imgUpeaTvNav,
                imgRadioUpeaNav: useInstitucionStore().imgRadioUpeaNav,
                imgPeriodicoUpeaNav: useInstitucionStore().imgPeriodicoUpeaNav,
                imgDisbed: useInstitucionStore().imgDisbed,
                linksNavUnidadesAdministrativas: useInstitucionStore().linksNavUnidadesAdministrativas
            }
        },
        methods: {
            getLinkCarrera(links){
                let link = ""
                this.linksCarreras.forEach(element =>{        
                    if(element.carrera == links){
                        link = element.link
                    }
                })
                return link
            },
            capitalizeFirstLetter(text) {
              return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
            }
        },
        created() {
        },
    }
</script>