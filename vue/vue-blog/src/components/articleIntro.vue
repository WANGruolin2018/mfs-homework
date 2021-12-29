<template>
  <div class="box">
    <h3>{{ data.title }}</h3>
    <p class="info">
      <span>{{data.target}}</span>
      <span class="circle"></span>
      <span>{{data.time }}</span>
      <span class="circle"></span>
      <span>浏览 {{ data.viewTimes }}</span>
    </p>
    <p class="content" v-if="showdel">{{ data.del }}</p>
    <p class="content" v-if="!showdel">{{ data.del | clip }}</p>
    <footer v-if="!showdel">
      <router-link :to="'/article/'+data.id">查看文章</router-link
      >
    </footer>
  </div>
</template>

<script>
export default {
  props: {
      showdel:{
          type: Boolean,
          default: false
      },
      data:{
          required: true,
          type:[Object,Array]
      }
  },
  data(){
      return{
      }
  },
  filters:{
    clip(string,num=150){
      if(string.length>num)
      {
        return string.substr(0,num)
      }
      else{
        return string
      }
    }
  }
};
</script>

<style  scoped>
.box {
  padding: 10px;
  margin-bottom: 50px;
  text-align: center;
}
.content {
  text-align: left;
  text-indent: 2rem;
}
a::before {
  content: "|";
  font-weight: bold;
  margin-right: 5px;
  font-size: 18px;
}
a::after {
  content: "|";
  font-weight: bold;
  margin-left: 5px;
  font-size: 18px;
}
span {
  display: inline-block;
  margin-left: 5px;
}
.circle {
  display: inline-block;
  width: 2px;
  height: 2px;
  background-color: lightslategray;
  border: 2px solid lightslategray;
  border-radius: 50%;
  margin-bottom: 2px;
}
.info {
  height: 30px;
  line-height: 30px;
}
</style>