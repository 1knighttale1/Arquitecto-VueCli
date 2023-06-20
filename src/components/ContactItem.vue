<template>
    <div class="container-central">
        <div v-for="dato in datos" :key="dato.titulo" class="dato">
            <h3>{{ dato.titulo }}</h3>
            <span class="text-dato">{{ dato.texto }}</span>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'

let id = 0
const datos = ref({
    contacto: {
        titulo: "Telefono",
        texto: "XX-XXXX-XXXX",
    },
    contacto2: {
        titulo: "Direccion",
        texto: "Lorem ipsum.",
    },
    contacto3: {
        titulo: "Correo",
        texto: "Lorem@ipsum.com",
    },
    });
</script>
<style>
/* Estilos generales en AboutUsItem... */
.container-central .dato {
    display: flex;
    margin-block: 2rem;
}
.container-central .text-dato {
    margin-inline: 4em;
}
</style>