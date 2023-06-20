<script setup>
import Header from './Header.vue'
import Searcher from './Searcher.vue'
import Carrousel from './GaleryCarrousel.vue'
import Footer from './Footer.vue'

const props = defineProps({
  msg: String
})
</script>

<template>
    <Header />
    <div class="container-body">
        <Searcher>
            <template #title>{{ msg }}</template>
        </Searcher>
        <Carrousel>
        </Carrousel>
    </div>
    <Footer />
</template>
<style>
.container-body {
    padding-inline: 2em;
}
</style>
