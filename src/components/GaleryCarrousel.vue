<template>
    <div class="carrousel">
        <div :class="['grande']" 
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

// const botones = Array.from({ length: items }, (_, index) => index);
const buttonActive = ref(1)
const positionCarrousel = ref(0)  //  posision actual del carrusel
const sizeItems = ref(100/items.value)
const sizeCarrousel = ref(100 * items.value)

function transformCarrousel(item) {
  buttonActive.value = item
  console.log(positionCarrousel.value)
  positionCarrousel.value = -sizeItems.value * (item - 1)
  
  // ajuste de carrusel
  if(item==items.value){positionCarrousel.value++}
  if(item==1){positionCarrousel.value--}
}
</script>
<style scope>
.img-carrousel {
  max-width: 100%;
  width: 100%;
  display: block;
  object-fit: cover;
  object-position: center center;
  margin-inline: .5rem;
}

.carrousel {
  width: 100%;
  max-width: 120em;
  padding: 1em;
  /* color: var(--negro); */
  transition: all 0.4s ease;
  border-radius: 1em;
  /* background-color: var(--blanco); */
  /* box-shadow: 1em 1em 2em var(--sombra-ppal), -1em -1em 2em var(--sombra-sec), inset 0 0 0 transparent, inset 0 0 0 transparent; */

  overflow: hidden;
}

.carrousel .grande {
  /* el width se modificara en el template-script */
  width: 200%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  /* color: var(--negro); */
  transition: all 0.4s ease;
  border-radius: 1em;
  /* background-color: var(--blanco); */
  /* box-shadow: 1em 1em 2em var(--sombra-ppal), -1em -1em 2em var(--sombra-sec), inset 0 0 0 transparent, inset 0 0 0 transparent; */
  padding: 1em;
  transition: all 0.5s ease;
  transform: translateX(-25%);
}

.carrousel .img-carrousel {
/* .carrousel { */
  width: calc( 100% / 2 - 2em);
  min-height: 10vh;
  /* color: var(--negro); */
  transition: all 0.4s ease;
  border-radius: 1em;
  /* background-color: var(--blanco); */
  /* box-shadow: 1em 1em 2em var(--sombra-ppal), -1em -1em 2em var(--sombra-sec), inset 0 0 0 transparent, inset 0 0 0 transparent; */
}

.carrousel .puntos {
  width: 100%;
  margin: 1em 0 0;
  padding: 0.4em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.carrousel .punto {
  width: 2em;
  height: 2em;
  margin: 1em 1em 0;
  list-style: none;
  color: var(--negro);
  transition: all 0.4s ease;
  border-radius: 1em;
  background-color: var(--blanco);
  /* box-shadow: 0.6em 0.6em 1.2em var(--sombra-ppal), -0.6em -0.6em 1.2em var(--sombra-sec), inset 0 0 0 transparent, inset 0 0 0 transparent; */
}

.carrousel .punto.activo {
  background-color: lightblue;
}
</style>