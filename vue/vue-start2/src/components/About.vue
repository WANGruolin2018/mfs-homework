<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
    <p>about page</p>
  </div>
</template>

<script>
import VLink from './VLink'
export default {
    components:{
        VLink
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
