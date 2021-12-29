<template>
  <div class="container">
    <h3>About Us</h3>
    <div class="box">
      <div class="img_box">
        <img src="../assets/logo.png" alt="" />
      </div>
      <div class="content">
        <p>
          详情介绍
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
h3 {
  font-size: 30px;
}
.box {
  text-align: left;
  text-indent: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.img_box {
  width: 10%;
}
.content {
  width: 50%;
  margin-right: 10%;
}
</style>