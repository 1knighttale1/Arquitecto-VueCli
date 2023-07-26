<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Carrousel from './CarrouselItem.vue'
import Contact from './ContactItem.vue'
import AboutUs from './AboutUsItem.vue'

import { useViewsStore } from '../stores/views'

const store = useViewsStore()
const view = store.view.name
</script>
 
<template>
    <Header />
    <!-- {{ store.view.isGalery }} -->
    <div class="container-body">
        <div id="subtitle">
            <slot name="title"></slot>
        </div>
        <slot name="body"></slot>    
        <!-- <Detail v-if="view=='details'"></Detail>         -->
        <!-- <AboutUs v-if="view=='aboutus'"></AboutUs>         -->
        <Contact v-if="view=='contacts'"></Contact>        
    </div>
    <Footer />
</template>
<style>
.container-body {
    padding-inline: 2em;
}
#subtitle {
    padding-block: .5em;
    padding-inline: .5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
h3 {
    font-weight: bold;
}
</style>
