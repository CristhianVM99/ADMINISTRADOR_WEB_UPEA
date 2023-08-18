<template>
    <div class="edu-team-grid team-style-2">
        <div class="inner">
            <div class="thumbnail-wrap">
                <div class="thumbnail">
                    <n-link :to="{ path: '/Autoridad/'+cargo, query: { id: encryptID(autoridad.id_autoridad) }}">
                        <img :src="url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad" alt="" />
                    </n-link>
                </div>
                <ul class="team-share-info">                    
                    <li><a :href="autoridad.facebook_autoridad" target="_blank" class="color-fb"><i class="icon-facebook"></i></a></li>                         
                    <li><a :href="autoridad.twiter_autoridad" target="_blank" class="color-twitter"><i class="icon-twitter"></i></a></li>
                    <li><a :href="autoridad.celular_autoridad" target="_blank" class="color-yt"><i class="icon-youtube"></i></a></li>
                </ul>
            </div>
            <div class="content">
                <h5 class="title">
                    {{ autoridad.nombre_autoridad }}
                </h5>
                <span class="designation">{{ autoridad.cargo_autoridad }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    /* STORE: variables globales */
    import { useInstitucionStore } from '@/stores/store' 
    import CryptoJS from 'crypto-js'
    export default {
        props: ['autoridad'],
        data() {
            return {
                url_api: process.env.APP_ROOT_API,
                clave_encryptacion: useInstitucionStore().clave_encryptacion,
                cargo: 'Universidad', //para mejorar el sistema con un cargo 
            }
        },
        methods: {
            encryptID(id) {
                const encryptionKey = this.clave_encryptacion // Cambia esto por tu clave de encriptación
                const ciphertext = CryptoJS.AES.encrypt(id.toString(), encryptionKey).toString()
                return ciphertext
            },
        },
    }
</script>