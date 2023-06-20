<template>
    <div class="container-central">
        <div :class="['carrousel']" 
        :style="{ transform: `translateX(${positionCarrousel}%)`, width: `${sizeCarrousel}%` }">
            <img src="@/assets/IMG/01.jpg" alt="Imagen 1" class="img-carrousel">
            <img src="@/assets/IMG/02.jpg" alt="Imagen 2" class="img-carrousel">

            <img src="@/assets/IMG/01.jpg" alt="Imagen 1" class="img-carrousel">
            <img src="@/assets/IMG/02.jpg" alt="Imagen 2" class="img-carrousel">
            <img src="@/assets/IMG/01.jpg" alt="Imagen 1" class="img-carrousel">
        </div>

        <ul class="puntos">
            <li v-for="item in items" 
            :key="item" 
            @click="transformCarrousel(item)" 
            :style="{ transform: `translateX(${positionCarrousel}%)`}"
            :class="['punto', { activo: item === buttonActive }]"></li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue'

const items = ref(5)

const buttonActive = ref(1)
const positionCarrousel = ref(0)  //  posision actual del carrusel
const sizeItems = ref(100/items.value)
const sizeCarrousel = ref(100 * items.value)

function transformCarrousel(item) {
  buttonActive.value = item
  console.log(positionCarrousel.value)
  positionCarrousel.value = -sizeItems.value * (item - 1)
}
</script>
<style>
.img-carrousel {
  max-width: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;
  margin-inline: .5rem;
}

.container-central {
  width: 100%;
  height: 100%;
  max-width: 70em;
  margin-block: 1.5em;
  transition: all 0.4s ease;
  border-radius: 1em;
  overflow: hidden;
  margin: 1.5em auto;
}

.container-central .carrousel {
  /* el width se modificara en el template-script */
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  transition: all 0.4s ease;
  border-radius: 2em;
  transition: all 0.5s ease;
  transform: translateX(-25%);
}

.carrousel .img-carrousel {
  width: calc( 100% / 2 - 2em);
  min-height: 10vh;
  transition: all 0.4s ease;
  border-radius: 1em;
}

.container-central .puntos {
  width: 100%;
  margin: 1em 0 0;
  padding: 0.5em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.container-central .punto {
  width: 1.5em;
  height: 1.5em;
  margin: 1em 1em 0;
  list-style: none;
  color: var(--negro);
  transition: all 0.4s ease;
  border-radius: 1em;
  background-color: var(--blanco);
  /* box-shadow: 0.6em 0.6em 1.2em var(--sombra-ppal), -0.6em -0.6em 1.2em var(--sombra-sec), inset 0 0 0 transparent, inset 0 0 0 transparent; */
}

.container-central .punto.activo {
  background-color: lightblue;
}
</style>