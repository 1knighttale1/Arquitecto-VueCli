<!-- nota: imagenes muy altas pueden desconfigurar la vista del carrusel, ajustar para futuro
o dar preferencia a imagenes cuadradas -->
<template>
    <div class="container-central">

      <!-- buttons::start -->
      <div class="button-right" @click="moveCarrousel(1)"></div>
      <div class="button-left" @click="moveCarrousel(-1)"></div>
      <!-- buttons::end -->

      <!-- carrousel::start -->
      <div :class="['carrousel']" :style="{ transform: `translateX(${positionCarrousel}%)`, width: `${sizeCarrousel}%` }">
        <div class="img-carrousel" v-for="image in images" :key="image.title">
          <span class="title">
            {{ image.title.toUpperCase() }}
          </span>
          <div class="description">
            {{ image.short_description }}
          </div>
          <img :src="`src/assets/${image.address}`" :alt="image.title">
        </div>
      </div>
      <!-- carrousel::end -->

      <!-- points::start -->
      <ul class="puntos">
        <li v-for="item in items" 
        :key="item" 
        @click="transformCarrousel(item)" 
        :style="{ transform: `translateX(${positionCarrousel}%)`}"
        :class="['punto', { activo: item === buttonActive }]"></li>
      </ul>
      <!-- points::end -->
    </div>
</template>
<script setup>
import { ref } from 'vue'


let id = 0
const images = ref([
  { title: "Titulo " + ++id, address: "https://content.r9cdn.net/himg/62/c0/84/ice-85676218-68620422_3XL-430714.jpg", short_description: "breve descripcion de la imagen."},
  { title: "Titulo " + ++id, address: "https://cdn.forbes.com.mx/2020/07/hoteles-Grand-Velas-Resorts-e1596047698604.jpg", short_description: "breve descripcion de la imagen."},
  { title: "Titulo " + ++id, address: "https://www.viajandoporelmundomundial.com/wp-content/uploads/2022/01/portada-hoteles-cancun-1024x682.jpg.webp", short_description: "breve descripcion de la imagen."},
  { title: "Titulo " + ++id, address: "https://content.r9cdn.net/himg/62/c0/84/ice-85676218-68620422_3XL-430714.jpg", short_description: "breve descripcion de la imagen."},
  { title: "Titulo " + ++id, address: "https://cdn.forbes.com.mx/2020/07/hoteles-Grand-Velas-Resorts-e1596047698604.jpg", short_description: "breve descripcion de la imagen."},
  { title: "Titulo " + ++id, address: "https://www.viajandoporelmundomundial.com/wp-content/uploads/2022/01/portada-hoteles-cancun-1024x682.jpg.webp", short_description: "breve descripcion de la imagen."}
])
const items = ref(images.value.length)

const buttonActive = ref(1)
const positionCarrousel = ref(0)  //  posision actual del carrusel
const sizeItems = ref(100/items.value)
const sizeCarrousel = ref(100 * items.value)

function transformCarrousel(item) {
  buttonActive.value = item
  // console.log(positionCarrousel.value)
  positionCarrousel.value = -sizeItems.value * (item - 1)
}
function moveCarrousel(button) {
  // button==1 ? console.log("move right"):console.log("move left")
  buttonActive.value += button
  if(buttonActive.value <= 0) {buttonActive.value = items.value}
  if(buttonActive.value > items.value) {buttonActive.value = 1}
  transformCarrousel(buttonActive.value)
  // console.log(buttonActive.value)
}

</script>
<style>
.container-central .button-right, .container-central .button-left {
  position: absolute;
  width: 3em;
  height: 7em;
  border-radius: .5em;
  top: 7rem;
  background: hsla(0, 0%, 35%, 0.5);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 80%;
  z-index: 1000;
}
@media (min-width: 35em){
  .container-central .button-right, .container-central .button-left {
        top: 30%;
    }
}
.container-central .button-left {
  left: 0;
  background-image: url('../assets/SVG/arrow_icon.svg');
  transform: scaleX(-1);
}
.container-central .button-right {
  right: 0;
  background-image: url('../assets/SVG/arrow_icon.svg');
}
.img-carrousel {
  min-height: 40vh;
  height: 100%;
  max-height: 80vh;
  overflow: hidden;
  display: block;
  object-fit: cover;
  object-position: center center;
  margin-inline: .5rem;
}
.img-carrousel img {
  width: 100%;
  height: 100%;
}
.img-carrousel .title {
  position: absolute;
  display: block;
  overflow: hidden;
  padding: .4rem;
  color: white;
  background: hsla(0 0% 0% / 0.6);
  top: 1rem;
  left: 0;
  z-index: 1000;
}
.img-carrousel .description {
  position: absolute;
  display: block;
  overflow: hidden;
  padding: .4rem;
  color: white;
  background: hsla(0 0% 0% / 0.6);
  bottom: 0;
  width: 100%;
  height: 10vh;
  z-index: 1000;
}
.container-central {
  width: 100%;
  height: 100%;
  max-width: 40em;
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
  transition: all 0.3s ease;
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