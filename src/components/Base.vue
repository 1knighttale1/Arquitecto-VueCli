<template>
    <Header />
    <body>
        <div class="page-options">
            <h3>{{ msg }}</h3>
        </div>
    </body>
    <Footer />
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'

const props = defineProps({
  msg: String
})
</script>