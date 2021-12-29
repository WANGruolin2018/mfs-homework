<template>
  <div class="main">
    <div class="col md-8 list">
      <article-intro :data="article" :showdel="true"></article-intro>
    </div>
    <div class="col md-4 xs-12">
      <latest-articles :data="lastestArticles"></latest-articles>
      <archive :data="archives"></archive>
      <target :data="targets"></target>
    </div>
  </div>
</template>
</template>

<script>
import articleIntro from "../components/articleIntro.vue"
import archive from "../components/archive.vue"
import target from "../components/target.vue"
import latestArticles from "../components/latestArticles.vue"

export default {
  components: { articleIntro,archive,target,latestArticles },
  data() {
    return {
       article:
        {
          id: 1,
          target: "前端",
          title: "动态路由匹配",
          time: "2021-09-11",
          viewTimes: 120,
          del: "我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果.一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。于是，我们可以更新 User 的模板，输出当前用户的 ID.你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中,我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果.一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。于是，我们可以更新 User 的模板，输出当前用户的 ID.你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中,我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果.一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。于是，我们可以更新 User 的模板，输出当前用户的 ID.你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中,我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果.一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。于是，我们可以更新 User 的模板，输出当前用户的 ID.你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中，我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果.一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。于是，我们可以更新 User 的模板，输出当前用户的 ID.你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中，我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果.一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。于是，我们可以更新 User 的模板，输出当前用户的 ID.你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中",
        }
      ,
      lastestArticles: [
        {
          id: 1,
          title: "热评第一",
        },
        {
          id: 2,
          title: "热评第二",
        },
        {
          id: 3,
          title: "热评第三",
        },
      ],
      archives: [
        {
          year: 2021,
          month: 10,
          articleNum: 4,
        },
        {
          year: 2021,
          month: 11,
          articleNum: 3,
        },
        {
          year: 2021,
          month: 12,
          articleNum: 2,
        }],
      targets: [
        {
          id: 1,
          name: "前端"
        },
        {
          id: 2,
          name: "css"
        },
        {
          id: 3,
          name: "vue"
        },
        {
          id: 4,
          name: "style"
        }],
    };
  },
  created(){
    console.log(this.$route.name)
    console.log(this.$route.params)
  },
  
};

</script>

<style scoped>
.list {
  padding: 0 20px;
}
.main {
  margin: 10px ;
}
</style>
