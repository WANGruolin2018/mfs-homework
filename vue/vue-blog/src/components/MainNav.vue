<template>
  <header>
    <h1>个人博客</h1>
    <div class="nav">
      <span><router-link to="/">主页</router-link></span>
      <span><router-link to="/about">关于</router-link></span>
    </div>
  </header>
</template>

<script>
export default {
  name: "main-nav",
};
</script>

<style scoped >
header {
  height: 100px;
  line-height: 100px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid lightgray;
}
h1 {
  margin-left: 30px;
}
.nav {
  margin-right: 30px;
}
.nav span {
  display: inline-block;
  width: 80px;
  height: 100%;
  text-align: center;
}
</style>