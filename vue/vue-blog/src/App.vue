<template>
  <div id="app">
    <main-nav></main-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNav from "./components/MainNav.vue"
export default {
  name: "App",
  components: { MainNav},
}
</script>

<style>
@import './assets/base.css';
ol,ul,body{
  margin:0;
  padding:0;
}
ol,ul{
  list-style:none
}
</style>