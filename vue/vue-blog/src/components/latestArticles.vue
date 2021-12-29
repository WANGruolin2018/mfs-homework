<template>
  <div class="box">
    <h4>近期文章</h4>
    <span class="item" v-for="article in data">
      <router-link :to="'/latestAticle/'+article.id">
      {{ article.title }}</router-link>
    </span>
  </div>
</template>

<script>
export default {
  props: {
      data:{
          type: Array,
          required: true
      }
  },
  data(){
      return{
      }
  }
};
</script>

<style  scoped>
.box {
  padding: 20px;
  /* background-color: lightsteelblue; */
  margin: 10px;
  border-bottom: 2px solid lightgray;
}
.item {
  display: block;
  margin-top: 10px;
}
</style>