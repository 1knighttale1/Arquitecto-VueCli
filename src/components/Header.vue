<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const name = "Poiesis"
const menuHeader = ref(false)
</script>

<template>
    <header id="HEADER" class="primary-header flex">
    
        <!-- start::title -->
        <div>
            <img alt="Vue logo" class="logo" src="@/assets/logo_POIESIS_white.svg" width="200" height="100" />
            <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="100" height="100" /> -->
        </div>
        <!-- end::title -->

        <!-- start::menu -->
        <button @click="menuHeader=!menuHeader" class="mobile-nav-toggle" aria-controls="primary-navigation" :aria-expanded="menuHeader">
        <!-- <span class="sr-only">{{ menuHeader }}</span> -->
        </button>
        <!-- end::menu -->

        <!-- start::nav -->
        <nav>
        <ul id="primary-navigation" :data-visible="menuHeader" class="primary-navigation flex">
            <li class="active">
                <RouterLink to="/proyectos">Proyectos</RouterLink>
            </li>
            <li class="active">
                <RouterLink to="/obras">Obras</RouterLink>
            </li>
            <li class="active">
                <RouterLink to="/nosotros">Nosotros</RouterLink>
            </li>
            <li class="active">
                <RouterLink to="/contactos">Contactos</RouterLink>
            </li>
        </ul>
        </nav>
        <!-- end::nav -->

    </header>
    <h2>
        <slot name="title"></slot>
    </h2>
</template>

<style>
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
    
    background: hsla(0 0% 0% / 0.5);
    backdrop-filter: blur(1rem);
}
@supports (backdrop-filter: blur(1rem)) {
    .primary-navigation {
        background: hsla(0 0% 100% / 0.1);
        backdrop-filter: blur(1rem);
    }
}
@media (max-width: 50em){
    .primary-navigation {
        --gap: 3em;

        position: fixed;
        z-index: 1000;
        inset: 0 0 0 45%;

        flex-direction: column;
        padding: min(30vh, 10rem) min(20vw, 7rem);

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
        background-image: url("@/assets/logo.svg");
        /* background-image: url("assets/logo.svg"); */
        /* background-color: red; */
        background-repeat: no-repeat;
        width: 2rem;
        border: 0;
        aspect-ratio: 1;
        top: 2rem;
        right: 0rem;
    }
    .mobile-nav-toggle[aria-expanded="true"]{
      /* cuando se despliega el menu */
        background-image: url("@/assets/logo.svg");
    }
}
</style>