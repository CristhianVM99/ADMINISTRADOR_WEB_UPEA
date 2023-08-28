<template>
    <footer class="edu-footer footer-dark bg-image footer-style-2">
        <div class="footer-top footer-top-2">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <div class="edu-footer-widget">
                            <div class="logo">
                                <n-link to="/">
                                    <img class="logo-dark" src="/images/logo/logoblanco.png" alt="Light Logo">
                                </n-link>
                            </div>
                            <p class="description">La Universidad Pública de El Alto, forjando el futuro con pasión y compromiso.</p>                            
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="edu-footer-widget explore-widget">
                            <h4 class="widget-title">Avisos</h4>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li><n-link to="/convocatorias/All">Publicaciones</n-link></li>
                                    <li><n-link to="/convocatorias/servicios">Servicios</n-link></li>                
                                    <li><n-link to="/convocatorias/noticias">Noticias</n-link></li>  
                                    <li><n-link to="/convocatorias/gacetas">Gacetas</n-link></li>
                                    <li><n-link to="/convocatorias/auditorias">Auditorias</n-link></li>
                                    <li><n-link to="/convocatorias/eventos">Eventos</n-link></li>
                                    <li><n-link to="/convocatorias/videos">Videos</n-link></li> 
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 col-sm-6">
                        <div class="edu-footer-widget quick-link-widget">
                            <h4 class="widget-title">Mas</h4>
                            <div class="inner">
                                <ul class="footer-link link-hover">                                    
                                    <li v-for="(link, id_link) in linksServiciosVirtuales" :key="id_link">
                                        <a target="_blank" :href="link.ei_link">{{ capitalizeFirstLetter(link.ei_nombre) }}</a>
                                    </li> 
                                    <li v-for="(link, id_link) in linksInteraccionSocial" :key="id_link">
                                        <a target="_blank" :href="link.ei_link">{{ capitalizeFirstLetter(link.ei_nombre) }}</a>
                                    </li>
                                    <li v-for="(link, id_link) in linksMediosDeComunicacion" :key="id_link">
                                        <a target="_blank" :href="link.ei_link">{{ capitalizeFirstLetter(link.ei_nombre) }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="edu-footer-widget">
                            <h4 class="widget-title">Comunícate con nosotros mediante</h4>
                            <div class="inner">                                
                                <ul class="social-share icon-transparent">
                                    <li><a :href="facebook" target="_blank" class="color-fb"><i class="icon-facebook"></i></a></li>                                    
                                    <li><a :href="twitter" target="_blank" class="color-twitter"><i class="icon-twitter"></i></a></li>
                                    <li><a :href="youtube" target="_blank" class="color-yt"><i class="icon-youtube"></i></a></li>
                                </ul>                       
                                <br>         
                                <ul class="information-list">
                                    <li><span>Direccion:</span>{{direccion}}</li>
                                    <li><span>Telefono:</span><a href="tel:+011235641231">{{ telefono }}</a></li>
                                    <li><span>Celular:</span><a href="tel:+011235641231">+591 {{ celular }}</a></li>
                                    <li><span>Correo:</span><a href="mailto:info@edublink.com" target="_blank">{{ email }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="inner text-center">
                            <p>Copyright {{ new Date().getFullYear() }} <a href="#">Universidad Pública de El Alto</a> Designed By <a href="https://www.linkedin.com/in/cristhian-villca-mamani-06933b251/" target="_blank">Cvm</a>. Todos los Derechos Reservados</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
    import { useInstitucionStore } from '@/stores/store'
    export default{
        async asyncData({ $axios }) {
            const useInstitucion = useInstitucionStore()
            if(useInstitucionStore().institucion == null){
                const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
                useInstitucion.asignarInstitucion(institucion.Descripcion)  
            }
        }, 
        data() {
            return {
                property: 'value',
                celular: useInstitucionStore().institucion.institucion_celular1,
                telefono: useInstitucionStore().institucion.institucion_telefono1,
                email: useInstitucionStore().institucion.institucion_correo1,
                direccion: useInstitucionStore().institucion.institucion_direccion,
                facebook: useInstitucionStore().institucion.institucion_facebook,
                youtube: useInstitucionStore().institucion.institucion_youtube,
                twitter: useInstitucionStore().institucion.institucion_twitter,
                linksNavUnidadesAdministrativas: useInstitucionStore().linksNavUnidadesAdministrativas,
                linksServiciosVirtuales: useInstitucionStore().linksServiciosVirtuales,
                linksOfertasAcademicas: useInstitucionStore().linksOfertasAcademicas,
                linksMediosDeComunicacion: useInstitucionStore().linksMediosDeComunicacion,
                linksInteraccionSocial: useInstitucionStore().linksInteraccionSocial,               
            };
        },
        methods: {
            capitalizeFirstLetter(text) {
              return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
            }
        },
    }
</script>