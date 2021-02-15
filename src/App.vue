<template>
  <div id="app">
    <Header />
    <Presentation />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Presentation from "./components/Presentation.vue";
export default {
  components: {Header, Footer, Presentation}
}
</script>

<style>
@import "assets/css/animate.css";
@import "assets/css/author.css";
@import "assets/css/footer.css";
@import "assets/css/header.css";
@import "assets/css/main.css";
@import "assets/css/signup.css";
@import "assets/css/user-lk.css";
@import "assets/css/video.css";


/* #app{
  position: relative;
} */
</style>
