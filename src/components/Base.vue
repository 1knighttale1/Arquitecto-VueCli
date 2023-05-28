<template>
    <Header>
        <template #title>{{ msg || 'sin titulo...' }}</template>
    </Header>
</template>

<script setup>
import Header from './Header.vue'
const props = defineProps({
  msg: String
})
</script>