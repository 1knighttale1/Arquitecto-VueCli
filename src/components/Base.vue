<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Carrousel from './GaleryCarrousel.vue'
import Contact from './ContactItem.vue'
import AboutUs from './AboutUsItem.vue'

import { ref } from 'vue'
import { useViewsStore } from '../stores/views'

const store = useViewsStore()
</script>

<template>
    <Header />
    <!-- {{ store.view.isGalery }} -->
    <div class="container-body">
        <subtitle class="" id="subtitle">
            <slot name="title"></slot>
        </subtitle>
        <Carrousel v-if="store.view.isGalery"></Carrousel>        
        <AboutUs v-if="store.view.name=='Nosotros'"></AboutUs>        
        <Contact v-if="store.view.name=='Contactos'"></Contact>        
    </div>
    <Footer />
</template>
<style>
.container-body {
    padding-inline: 2em;
}
#subtitle {
    padding-block: .5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
