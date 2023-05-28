<template>
    <Base :msg="title"></Base>
</template>

<script setup>
import Base from '../components/Base.vue'
import { ref } from 'vue'

const title = ref('Obras')
</script>