<template>
  <div class="box">
    <h4>标签</h4>
    <span class="item" v-for="target in data"><router-link :to="'/target/'+target.id">{{target.name}}</router-link></span>
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
  margin: 10px;
}
.item {
  display: inline-block;
  /* width: 50px; */
  height: 30px;
  line-height: 30px;
  border: 2px solid rgb(172, 172, 162);
  border-radius: 3px;
  background-color: rgba(216, 235, 202, 0.5);
  margin-top: 10px;
  margin-right: 5px;
  padding: 0 5px;
}
</style>