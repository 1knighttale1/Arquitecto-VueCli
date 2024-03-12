<template>
  <NavItem/>
  <slot name="body">

  </slot>
  <FooterItem :isFooter="loading" />
</template>

<script setup>
import FooterItem from '../components/Footer.vue';
import NavItem from '../components/NavItem.vue'

import { useDataStore } from "../stores/data";
import { onMounted, ref } from 'vue';

const storeData = useDataStore();
const loading = ref(true);

onMounted(async () => {
  try {
    await storeData.updateContacts()
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
</style>