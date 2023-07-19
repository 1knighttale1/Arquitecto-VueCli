<template>
  <Base>
      <template #title>
          <h3 class="sub-title">{{ store.view.name.toUpperCase() }}</h3>
      </template>
  </Base>
</template>

<script setup>
import Base from '../components/Base.vue'
import { useViewsStore } from "../stores/views";
import { ref } from 'vue'

const view = ref({
  name: 'Nosotros',
  galery: false
})
const store = useViewsStore()
store.chanceView(view.value.name, view.value.galery)
</script>