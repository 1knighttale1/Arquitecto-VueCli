<template>
  <Base>
    <template #title>
        <h3 class="sub-title">{{ "nosotros".toUpperCase() }}</h3>
    </template>
    <template #body v-if="loading">
        <BasicItem>
          <template #title>
            Cargando...
          </template>
        </BasicItem>
      </template>
      <template #body v-else>
        <BasicItem v-if="datos">
          <template #title>
            Descripción
          </template>
          <template #text>
            {{ datos.descripcion }}
          </template>
        </BasicItem>
        <BasicItem v-if="datos">
          <template #title>
            Misión
          </template>
          <template #text>
            {{ datos.mision }}
          </template>
        </BasicItem>
        <BasicItem v-if="datos">
          <template #title>
            Vision
          </template>
          <template #text>
            {{ datos.vision }}
          </template>
        </BasicItem>
        <BasicItem v-else>
          <template #title>
            Falla de carga
          </template>
        </BasicItem>
    </template>
  </Base>
</template>

<script setup>
import Base from '../components/Base.vue'
import BasicItem from '../components/BasicItem.vue'
import { useViewsStore } from "../stores/views";
import { useDataStore } from "../stores/data";
import { onMounted, ref } from 'vue'

const storeViews = useViewsStore()
const storeData = useDataStore()
// control de vistas
const view = ref({
    name: 'aboutus',
})
storeViews.chanceView(view.value.name)
// control de datos nosotros
const loading = ref(true)
const datos = ref('')
onMounted(async () => {
  try {
    await storeData.updateAboutUs()
    datos.value = storeData.data[view.value.name]
  } finally {
    loading.value = false;
  }
});
</script>