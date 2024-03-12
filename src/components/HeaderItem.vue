<script setup>
import NavItem from './NavItem.vue'
import LogoItem from './LogoItem.vue'
function showMenu(){ menuHeader.value = !menuHeader.value }

</script>
<template>
    <header id="header" class="flex">
        <NavItem/>
        <LogoItem/>
    </header>    
</template>

<style scoped>
header{
    top: 1rem;
    width: 100%;
    height: 6rem;
    left: 2rem;
}
</style>