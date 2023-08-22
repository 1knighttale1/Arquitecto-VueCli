<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <footer id="footer">
        <div class="social-icons-container">
            <router-link to="/" class="social-icon"></router-link>
            <router-link to="/" class="social-icon"></router-link>
            <router-link to="/" class="social-icon"></router-link>
            <router-link to="/" class="social-icon"></router-link>
            <!-- <a href="" class="social-icon"></a>
            <a href="" class="social-icon"></a>
            <a href="" class="social-icon"></a>
            <a href="" class="social-icon"></a> -->
        </div>
        <span class="copyright">
            &copy;2023, POIESIS. Todos los derechos reservados.
        </span>
    </footer>
</template>

<style scoped>
#footer{
    width: 100%;
    bottom: 0;
    padding: 1.5rem 5%;
    /* background-color: #0e0e0e; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.social-icons-container, .footer-menu-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: .5rem;
}
.social-icon{
    height: 50px;
    width: 50px;
    border-radius: 50px;
    border: 1px solid #f2f2f2;
    background-image: url('@/assets/SVG/facebook_icon.svg');
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
    margin: 1rem;
}
.social-icon:hover{
    background-color: #121212;
    filter: invert(1);
}
.social-icon:nth-of-type(2){
    background-image: url('@/assets/SVG/instagram_icon.svg');
}
.social-icon:nth-of-type(3){
    background-image: url('@/assets/SVG/whatsapp_icon.svg');
}
.social-icon:nth-of-type(4){
    background-image: url('@/assets/SVG/youtube_icon.svg');
}
.footer-menu-container{
    list-style-type: none;
    color: #f2f2f2;
    font-size: 18px;
}
.menu-item{
    margin: 1rem 1.5rem;
    cursor: pointer;
    opacity: 0.6;
}
.menu-item:hover{
    opacity: 1;
}
.copyright{
    color: #f2f2f2;
    opacity: 0.9;
    text-align: center;
}
</style>