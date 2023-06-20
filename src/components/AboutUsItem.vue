<template>
    <div class="container-central">
        <div v-for="parrafo in parrafos" :key="parrafo.titulo" class="parrafo">
            <h2>{{ parrafo.titulo }}</h2>
            <span class="text-about">{{ parrafo.texto }}</span>
        </div>
    </div>
</template>
<script setup>
import { useViewsStore } from '../stores/views';
import { ref } from 'vue'

const store = useViewsStore()
let id = 0
const parrafos = ref({
    parrafo1: {
        titulo: "Maecenas accumsan bibendum",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar leo sapien, nec elementum nisl pellentesque vel. Nunc laoreet facilisis varius. Quisque lobortis vulputate ligula, vitae hendrerit sem vulputate sed. Pellentesque sodales viverra eros, sit amet iaculis velit fringilla et. Sed ac lorem sit amet neque tempor auctor. Sed orci justo, interdum porta placerat ut, aliquam ut nunc. Praesent dapibus rhoncus arcu sed elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque dapibus id tortor in faucibus. Cras sollicitudin feugiat justo, quis semper massa eleifend ac. Integer molestie fermentum dui, ut cursus quam tempor consectetur. ",
    },
    parrafo2: {
        titulo: "Maecenas accumsan bibendum",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pulvinar leo sapien, nec elementum nisl pellentesque vel. Nunc laoreet facilisis varius. Quisque lobortis vulputate ligula, vitae hendrerit sem vulputate sed. Pellentesque sodales viverra eros, sit amet iaculis velit fringilla et. Sed ac lorem sit amet neque tempor auctor. Sed orci justo, interdum porta placerat ut, aliquam ut nunc. Praesent dapibus rhoncus arcu sed elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque dapibus id tortor in faucibus. Cras sollicitudin feugiat justo, quis semper massa eleifend ac. Integer molestie fermentum dui, ut cursus quam tempor consectetur. ",
    }
    });
</script>
<style>
.container-central {
    display: flex;
    flex-direction: column;
}
.container-central .parrafo {
    margin-block: 2rem;

}
</style>