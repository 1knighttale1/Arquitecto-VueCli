<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const name = "Poiesis"
const menuHeader = ref(false)

let id = 0
const menus = ref([
  { id: id++, text: 'PROYECTOS', url: '/proyectos' },
  { id: id++, text: 'OBRAS', url:'/obras' },
  { id: id++, text: 'NOSOTROS', url:'/nosotros' },
  { id: id++, text: 'CONTACTOS', url:'/contactos' },
])

function showMenu(){ menuHeader.value = !menuHeader.value }
</script>

<template>
    <header id="header" class="primary-header flex">
        <!-- start::title -->
        <div>
            <img alt="Vue logo" class="logo" src="@/assets/SVG/POIESIS_logo.svg" width="250" height="100" />
        </div>
        <!-- end::title -->

        <!-- start::menu -->
        <button @click="showMenu" class="mobile-nav-toggle" aria-controls="primary-navigation" :aria-expanded="menuHeader">
        <!-- <span class="sr-only">{{ menuHeader }}</span> -->
        </button>
        <!-- end::menu -->

        <!-- start::nav -->
        <nav>
        <ul id="primary-navigation" :data-visible="menuHeader" class="primary-navigation flex">
            <li v-for="menu in menus" :key="menu.id">
                <RouterLink :to="menu.url">{{ menu.text }}</RouterLink>
            </li>
        </ul>
        </nav>
        <!-- end::nav -->
    </header>
</template>

<style scoped>
/* filter: invert(1); para el modo nocturno :v */
#header {
    padding-inline: 2em;
    padding-block: 0em;
}
.logo {
    width: 60%;
    min-width: 22rem;
    filter: invert(1);
}
.primary-header {
    align-items: center;
    justify-content: space-between;
}
.mobile-nav-toggle {
    display: none;
}
.primary-navigation {
    list-style: none;
    padding: 0;
    margin: 0;
    
    background: hsla(0 0% 0% / 0.8);
    backdrop-filter: blur(1rem);
}
@supports (backdrop-filter: blur(1rem)) {
    .primary-navigation {
        background: hsla(0 0% 0% / 0.8);
        backdrop-filter: blur(1rem);
    }
}
@media (min-width: 35em){
    .primary-navigation{
        padding-block: 1rem;
        padding-inline: 3rem;
        /* padding-inline: clamp(1rem, 5vw, 5em); */
    }
}
@media (max-width: 65em){
    .logo {
        width: 50%;
        min-width: 16rem;
    }
    .primary-navigation {
        --gap: 4em;

        position: fixed;
        z-index: 9998;
        /* inset: 0 0 0 45%; */
        inset: 0 0 0 0%;

        flex-direction: column;
        /* padding: min(30vh, 10rem) min(50vw, 25rem); */
        padding: min(30vh, 40vh) min(40vw);

        transform: translateX(100%);
        transition: transform 350ms ease-out;
    }
    .primary-navigation[data-visible="true"]{
        transform: translateX(0%);        
    }
    .mobile-nav-toggle {
        display: block;
        position: absolute;
        z-index: 9999;
        background-color: transparent;
        background-image: url("@/assets/SVG/menu_icon.svg");
        background-repeat: no-repeat;
        width: 2rem;
        border: 0;
        aspect-ratio: 1;
        top: 4em;
        right: 2rem;

        filter:invert(1);
    }
    .mobile-nav-toggle[aria-expanded="true"]{
      /* cuando se despliega el menu */
        background-image: url("@/assets/SVG/close_icon.svg");
    }
}
</style>