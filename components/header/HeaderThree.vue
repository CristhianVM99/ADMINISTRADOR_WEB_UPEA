<template>
    <header class="edu-header header-style-3">
        <HeaderTopTwo v-if="showHeaderTop" />
        <div class="header-mainmenu" :class="{'edu-sticky': isSticky}">
            <div class="container">
                <div class="header-navbar">
                    <div class="header-brand">
                        <div class="logo">
                            <n-link to="/">
                                <img class="logo-light" src="/images/logo/logodark.png" style="width:220px;" alt="Dark Logo" v-if="$colorMode.value === 'light'">
                                <img class="logo-dark" src="/images/logo/logoblanco.png" style="width:220px;" alt="Light Logo" v-if="$colorMode.value === 'dark'">
                            </n-link>
                        </div>
                    </div>
                    <div class="header-mainnav">
                        <nav class="mainmenu-nav">
                            <Navigation />
                        </nav>
                    </div>
                    <div class="header-right">
                        <ul class="header-action">
                            <!--<li class="icon search-icon">
                                <button class="search-trigger" @click="searchPopUpOpen( 'addClass', 'open' )">
                                    <i class="icon-2"></i>
                                </button>
                            </li>-->
                            <li class="icon light-dark-icon">
                                <ColorMode />
                            </li>
                            <li class="mobile-menu-bar d-block d-xl-none">
                                <button class="hamberger-button" @click="mobileMenuOpen( 'addClass', 'active' )">
                                    <i class="icon-54"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!--<SearchPopUp />-->

        <OffCanvasMobileMenuOne />
    </header>
</template>

<script>
    export default {
        async asyncData({ $axios }) {
        if(useInstitucionStore().institucion == null){
            const institucion = await $axios.$get('/api/InstitucionUPEA/'+process.env.APP_ID_INSTITUCION)
            useInstitucion.asignarInstitucion(institucion.Descripcion)  
        }
        },
        components: {
            HeaderTopTwo: () => import("@/components/header/HeaderTopTwo"),
            Category: () => import("@/components/header/Category"),
            Navigation: () => import("@/components/header/Navigation"),
            SearchPopUp: () => import("@/components/header/SearchPopUp"),
            ColorMode: () => import("@/components/common/ColorMode"),
            OffCanvasMobileMenuOne: () => import("@/components/header/OffCanvasMobileMenuOne")
        },
        data(){
            return {
                isSticky: false
            }
        },
        props: ['showHeaderTop'],
        mounted(){
            window.addEventListener( 'scroll', () => {
                let scrollPos = window.scrollY
                if( scrollPos >= 200 ) {
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            } )
        },
        methods: {
            // Off-canvas Mobile Menu Open
            mobileMenuOpen( addRemoveClass, className ) {
                const el = document.querySelector( '#offcanvas-menu' );
                if ( addRemoveClass === 'addClass' ) {
                    el.classList.add( className );
                } else {
                    el.classList.remove( className );
                }
            },

            // search popup
            searchPopUpOpen(addRemoveClass, className) {
                const el = document.querySelector( '#edu-search-popup' );
                if ( addRemoveClass === 'addClass' ) {
                    el.classList.add( className );
                } else {
                    el.classList.remove( className );
                }
            }
        }
    }
</script>