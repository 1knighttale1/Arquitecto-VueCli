<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useViewsStore } from "../stores/views"

const store = useViewsStore()
const menuHeader = ref(false)

let id = 0
const menus = ref([
  { id: id++, text: 'PROYECTOS', url: '/', active:  'projects'},
  { id: id++, text: 'OBRAS', url:'/works', active: 'works' },
  { id: id++, text: 'NOSOTROS', url:'/aboutus', active: 'aboutus' },
  { id: id++, text: 'CONTACTOS', url:'/contacts', active: 'contacts' },
])
function showMenu(){ menuHeader.value = !menuHeader.value }

</script>

<template>
    <header id="header" class="primary-header flex">
        <!-- start::title -->
        <!-- <RouterLink to="">
        </RouterLink> -->
        <router-link to="/">
            <img class="logo" 
            src="@/assets/SVG/POIESIS_logo-white.svg" 
            width="250" height="100" />
        </router-link>
        <!-- end::title -->

        <!-- start::menu -->
        <button @click="showMenu" class="mobile-nav-toggle" aria-controls="primary-navigation" :aria-expanded="menuHeader">
        <!-- <span class="sr-only">{{ menuHeader }}</span> -->
        </button>
        <!-- end::menu -->

        <!-- start::nav -->
        <nav>
        <ul id="primary-navigation" :data-visible="menuHeader" class="primary-navigation flex">
            <li v-for="menu in menus" :key="menu.id" class="flex menu">
                <RouterLink :to="menu.url" class="menu flex" :data-active="store.view.name==menu.active">{{ menu.text }}</RouterLink>
            </li>
        </ul>
        </nav>
        <!-- end::nav -->
    </header>
</template>

<style scoped>
/* filter: invert(1); para el modo nocturno :v */
/* configuracion menu */
li.menu {
    justify-content: center;
}
a.menu {
    padding: .4em;
    justify-content: center;
    min-width: 7em;
}
/* resaltador vista activa */
a.menu[data-active="true"]:before , a.menu[data-active="true"]:after {
    position: absolute;
    opacity: 1;
    width: 100%;
    height: 2px;
    content: '';
    background: #FFF;
}
a.menu[data-active="true"]:before {
    left: 0px;
    top: 0px;
}
a.menu[data-active="true"]:after {
    right: 0px;
    bottom: 0px;
}
/* configuracion header */
#header {
    padding-inline: 2em;
    padding-block: 0em;
}
.logo {
    width: 60%;
    min-width: 22rem;
    /* filter: invert(1); */
}
.primary-header {
    align-items: center;
    justify-content: space-between;
}
/* configuracion nav menu */
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
    right: -8vw;
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
.primary-navigation {
    --gap: 4em;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    z-index: 9998;
    inset: 0 0 0 70%;

    transform: translateX(100%);
    transition: transform 350ms ease-out;
}
.primary-navigation[data-visible="true"]{
    transform: translateX(0%);
}
/* pantalla telefono */
@media (max-width: 65em){
    .logo {
        width: 50%;
        min-width: 16rem;
    }
    .primary-navigation {
        inset: 0 0 0 0%;
    }
    .mobile-nav-toggle[aria-expanded="true"]{
    right: 2rem;
}
}
</style>