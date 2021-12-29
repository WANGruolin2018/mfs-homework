<template>
  <div class="box">
    <h4>文章归档</h4>
    <span class="item" v-for="archive in data" ><router-link :to="'/archive/'+archive.year+'/'+archive.month">{{archive.year}}年{{archive.month}}月（{{archive.articleNum}}）</router-link></span>
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

<style scoped>
.box {
  padding: 20px;
  /* background-color: lightsteelblue; */
  border-bottom: 2px solid lightgray;
  margin: 10px;
}
.item {
  display: block;
  margin-top: 10px;
}
</style>