<template>
  <div class="main">
    <div class="col md-8 list">
      <div v-for="article in articles" class='item'>
        <article-intro :data="article"></article-intro>
      </div>
    </div>
    <div class="col md-4 xs-12">
      <latest-articles :data="lastestArticles"></latest-articles>
      <archive :data="archives"></archive>
      <target :data="targets"></target>
    </div>
  </div>
</template>

<script>
import articleIntro from "../components/articleIntro.vue"
import archive from "../components/archive.vue"
import target from "../components/target.vue"
import latestArticles from "../components/latestArticles.vue"

export default {
  name: "Home",
  components: { articleIntro,archive,target,latestArticles },
  data() {
    return {
      articles: [
        {
          id: 1,
          target: "前端",
          title: "动态路由匹配",
          time: "2021-09-11",
          viewTimes: 120,
          del: "我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果.一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。于是，我们可以更新 User 的模板，输出当前用户的 ID.你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 $route.params 中",
        },
        {
          id: 2,
          title: "嵌套路由",
          target: "前端",
          time: "2021-09-20",
          viewTimes: 420,
          del: "实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件,借助 vue-router，使用嵌套路由配置，就可以很简单地表达这种关系.这里的 <router-view> 是最顶层的出口，渲染最高级路由匹配到的组件。同样地，一个被渲染组件同样可以包含自己的嵌套 <router-view>。例如，在 User 组件的模板添加一个 <router-view>.要在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 children 配置.要注意，以 / 开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径",
        },
        {
          id: 3,
          title: "编程式的导航",
          target: "前端",
          time: "2021-09-21",
          viewTimes: 300,
          del: '除了使用 <router-link> 创建 a 标签来定义导航链接，我们还可以借助 router 的实例方法，通过编写代码来实现。router.push(location, onComplete?, onAbort?).注意:在 Vue 实例内部，你可以通过 $router 访问路由实例。因此你可以调用 this.$router.push.想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。当你点击 <router-link> 时，这个方法会在内部调用，所以说，点击 <router-link :to="..."> 等同于调用 router.push(...)',
        },
        {
          id: 4,
          title: "命名路由",
          target: "前端",
          time: "2021-09-30",
          viewTimes: 500,
          del: "有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。你可以在创建 Router 实例的时候，在 routes 配置中给某个路由设置名称。要链接到一个命名路由，可以给 router-link 的 to 属性传一个对象,这跟代码调用 router.push() 是一回事,这两种方式都会把路由导航到 /user/123 路径",
        },
        {
          id: 5,
          title: "命名视图",
          target: "前端",
          time: "2021-10-09",
          viewTimes: 200,
          del: "有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 sidebar (侧导航) 和 main (主内容) 两个视图，这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果 router-view 没有设置名字，那么默认为 default.一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 components 配置 (带上 s)",
        },
        {
          id: 6,
          title: "重定向和别名",
          target: "前端",
          time: "2021-10-16",
          viewTimes: 300,
          del: "重定向也是通过 routes 配置来完成，下面例子是从 /a 重定向到 /b,重定向的目标也可以是一个命名的路由.甚至是一个方法，动态返回重定向目标.注意导航守卫并没有应用在跳转路由上，而仅仅应用在其目标上。在下面这个例子中，为 /a 路由添加一个 beforeEnter 守卫并不会有任何效果。",
        }
      ],
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
  watch:{
    '$route':function(newVal){
      console.log(newVal.name)
    console.log(newVal.params)
    }
  }
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
