import { defineStore } from "pinia";

export const useInstitucionStore = defineStore("Institucion", {
  state: () => ({        
    url_api: process.env.APP_ROOT_API,
    clave_encryptacion: 'UniversidadPublicaDeElAlto',
    color_intermedio: '#511116',
    aniversario_universidad: process.env.APP_ANIVERSARIO_UPEA,
    institucion: null,    
    carreras: null,
    menuAreasyCarreras: null,
    publicacionesCarreras: null,
    publicacionesUniversidad: null,
    serviciosUniversidad: null,
    noticiasUniversidad: null,
    auditoriasUniversidad: null,
    eventosUniversidad: null,
    gacetasUniversidad: null,
    videosUniversidad: null,       
    linksCarrerasAll: null, 
    linksUniversidad: null,       
    linksMedios: null,
    linksNavUnidadesAdministrativas: null,
    linksServiciosVirtuales: null,
    linksOfertasAcademicas: null,
    linksFooterLinks: null,
    linksMediosDeComunicacion: null,
    linksInteraccionSocial: null,

    /*

     INFORMACION DE LA PAGINA PRINCIPAL (MAIN) ==========================================================

     */

    /* NAVIGATION */ 
    texto_nav: 'Dirección de Interacción Social, Bienestar Estudiantil y Deportes',
    /* BANNER:  */
    frase: 'La Universidad del pueblo y para el pueblo',
    imgBannerPrincipal: '',

    /* ABOUT */
    titleAbout: 'Desafiando barreras "La lucha imparable de la Universidad Pública de El Alto"',
    descripcionAbout: 'La Universidad Pública de El Alto, ubicada en la ciudad de El Alto en Bolivia, ha sido una institución educativa que ha desafiado numerosas barreras a lo largo de su historia. Fundada en el año 2000, esta universidad ha sido un símbolo de lucha y perseverancia para la comunidad de El Alto y ha brindado oportunidades educativas a miles de estudiantes que de otro modo no hubieran tenido acceso a la educación superior.',
    primerPuntoAbout:'Inclusión educativa para comunidades marginadas.',
    segundoPuntoAbout:'Valoración de la diversidad cultural y étnica.',
    tercerPuntoAbout:'Investigación científica y desarrollo local sostenible.',
    imgAbout1: '/images/universidad/oficial/fondoabout.jpg',
    imgAbout2: '/images/universidad/upeaabout2.jpg',

    /* VIDEO */
    videoTitleVideo: 'Universidada Publica de El Alto Desafiando límites y construyendo sueños',

    /* AUTORIDADES  */
    autoridadesSeccionTitulo: 'Nuestras Autoridades',

    /* PERFIL DE AUTORIDADES */
    pretitleAutoridades: '',
    titleAutoridades: '',

    /* PUBLICACIONES CARRERAS */
    titlePublicacionesCarreras: 'Comunicados Universitarios',

    /* PUBLICACIONES UPEA */
    preTitlePublicaciones:'lo ultimo de ...',
    titlePublicacionesUpea:'Publicaciones',

    /* CONTACTO */
    titleEmailContacto : 'ponerse en contacto al:',
    titleTelefonoContacto: 'Llamanos a travéz de:',

    /* EVENTOS */
    preTitleEventos: 'lo ultimo de ...',
    titleEventos: 'Eventos',

    /* SERVICIOS */
    preTitleServicios: 'Upea',
    titleServicios: 'Servicios',

    /* NOTICIAS */
    preTitleNoticias: 'Upea',
    titleNoticias: 'Noticias',

    /* VIDEOS */
    preTitleVideos: 'Upea',
    titleVideos: 'Videos',

    /* MEDIOS UNIVERSITARIOS */
    preTitleMedios: 'Upea',
    titleMedios: 'Medios de comunicacion',
    contentMedios: 'UPEA Digital, Radio UPEA y UPEA Televisión son iniciativas educativas y culturales de la Universidad Pública de El Alto (UPEA) en Bolivia. Ofrecen una experiencia emocionante y enriquecedora con recursos educativos en línea, programas de radio variados y contenido cultural en televisión. ¡Descubre una nueva dimensión de aprendizaje y entretenimiento con UPEA!',
    contentUpeaTv: 'Únete a nuestra comunidad universitaria. Programas educativos, entrevistas y eventos académicos. ¡Descubre la vida universitaria!',
    contentRadioUpea: 'La música, cultura y educación se encuentran aquí. Entrevistas, debates y noticias universitarias. ¡Sintoniza la UPEA!',
    contentBiblioteca: 'Tu fuente de sabiduría. Amplia colección de libros, revistas y recursos multimedia. ¡Emprende el viaje del conocimiento!',
    contentInstitutoInvestigacion:'Sumérgete en el conocimiento interdisciplinario. Brillantes mentes, proyectos innovadores, impacto en múltiples áreas.',
    contentRepositorioInstitucional: 'El tesoro del conocimiento académico. Investigaciones, tesis y artículos actualizados. ¡Aprende y avanza!',
    imgUpeaTv:'/images/Medios_Universitarios/upeatelevisionoficial.jpg',
    imgRadioUpea:'/images/Medios_Universitarios/upearadiooficial.jpg',
    imgBiblioteca:'/images/Medios_Universitarios/bibliotecaoficial.jpg',
    imgRepositorioInstitucional:'/images/Medios_Universitarios/repositorio.png',
    imgInstitutoInvestivacion:'/images/Medios_Universitarios/upeainvestigacionoficial.jpg',

    //NAVEGADOR MEDIOS UNIVERSITARIOS
    imgUpeaTvNav:'/images/Medios_Universitarios/tvupea.jpg',
    imgRadioUpeaNav:'/images/Medios_Universitarios/radioupea.jpg',
    imgPeriodicoUpeaNav:'/images/Medios_Universitarios/periodicoupea.jpg',
    imgDisbed:'/images/Medios_Universitarios/disbed.jpg',


    /* ENLACES Y SISTEMAS DE LA UNIVERSIDAD */
    preTitleSistemas: 'Upea',
    titleSistemas:'Nuestros Sistemas y Enlaces Universitarios.',
    imgSistemasEnlaces: '/images/universidad/oficial/fondosistemas.jpg',
    
    //matriculacion    
    titleMatriculacion: 'Matriculacion',
    contentMatriculacion: 'Sistema de matriculación académica Estudiantíl - UPEA',
    imgMatriculacion: '/images/Sistemas_Enlaces/Matricula.jpg',
    urlMatriculacion: 'https://matriculacion.upea.bo/',
    
    //formulario 02 
    titleFormulario02: 'Formulario 02',
    contentFormulario02: 'La Universidad Publica de El Alto invita a todos los bachilleres a postularse a las diferentes carreras que ofrece nuestra universidad.',
    imgFormulario02: '/images/Sistemas_Enlaces/Logo-Formulario.jpg',
    urlFormulario02: 'https://admisionestudiantil.upea.bo/',

    //CEUB
    titleCeub: 'CEUB',
    contentCeub: 'El Comité Ejecutivo de la Universidad Boliviana es el organismo central que representa al Sistema de la Universidad Boliviana',
    imgCeub: '/images/Sistemas_Enlaces/Ceub.jpg',
    urlCeub: 'https://www.ceub.edu.bo/portal/',



    /*

     CARRERAS (TODAS LAS CARREAS) ==========================================================

     */

     titleCarreras: 'Nuestras Carreras'

  }),
  actions:{
    /* METODOS PARA ASIGNAR DATOS A LAS VARIABLES.... */
    asignarInstitucion(colection){
      this.institucion = colection
    },
    asignarImgBannerPrincipalUpea(string){
      this.imgBannerPrincipal = string
    },
    asignarCarreras(colection){
      this.carreras = colection
    },
    asignarMenuAreasyCarreras(colection){
      this.menuAreasyCarreras = colection
    },
    asignarPublicacionesCarreras(colection){
      this.publicacionesCarreras = colection
    },
    asignarPublicacionesUniversidad(colection){
      this.publicacionesUniversidad = colection
    },
    asignarServiciosUniversidad(colection){
      this.serviciosUniversidad = colection
    },
    asignarNoticiasUniversidad(colection){
      this.noticiasUniversidad = colection
    },
    asignarAuditoriasUniversidad(colection){
      this.auditoriasUniversidad = colection
    },
    asignarEventosUniversidad(colection){
      this.eventosUniversidad = colection
    },
    asignarGacetasUniversidad(colection){
      this.gacetasUniversidad = colection
    },
    asignarVideosUniversidad(colection){
      this.videosUniversidad = colection
    },
    asignarLinksCarreras(colection){
      this.linksCarrerasAll = colection
    },
    asignarLinksUniversidad(colection){
      this.linksUniversidad = colection
    },  
    asignarLinksMedios(colection){
      this.linksMedios = colection
    },  
    asignarLinksUnidadesAdministrativas(colection){
      this.linksNavUnidadesAdministrativas = colection
    },
    asignarLinksServiciosVirtuales(colection){
      this.linksServiciosVirtuales= colection
    },
    asignarLinksOfertasAcademicas(colección){
      this.linksOfertasAcademicas= colección
    },    
    asignarLinksMediosDeComunicacion(colección){
      this.linksMediosDeComunicacion = colección
    },    
    asignarLinksInteraccionSocial(colección){
      this.linksInteraccionSocial = colección
    },    
  }
});
