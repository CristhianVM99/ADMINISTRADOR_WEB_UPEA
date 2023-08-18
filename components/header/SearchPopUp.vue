<template>
    <div id="edu-search-popup" class="edu-search-popup">
        <div class="content-wrap">
            <div class="site-logo">
                <n-link to="/">
                    <img class="logo-light" src="/images/logo/logodark.png" style="width:220px;" alt="Dark Logo">
                    <img class="logo-dark" src="/images/logo/logoblanco.png" style="width:220px;" alt="Light Logo">
                </n-link>
            </div>
            <div class="close-button">
                <button class="close-trigger" @click="searchPopUpClose( 'removeClass', 'open' )"><i class="icon-73"></i></button>
            </div>
            <div class="inner">
                <form class="search-form" action="#">
                    <input type="text" class="edublink-search-popup-field" placeholder="Busca aqui...">
                    <button class="submit-button"><i class="icon-2"></i></button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            // SearchPopUp Close
            searchPopUpClose( triggerRemoveClass, className ) {
                const el = document.querySelector( '#edu-search-popup' );
                if ( triggerRemoveClass === 'addClass' ) {
                    el.classList.add( className );
                } else {
                    el.classList.remove( className );
                }
            }
        }
    }
</script>