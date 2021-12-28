<template>
  <div>
    <a @click="onClick" :href='href'>
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props:{
    href:{
        type:String,
        required:true
    }
  },
  methods: {
    onClick(e){
        e.preventDefault()
        let path = ""
        this.$root.currentRoute=path
        window.history.pushState(null,null,path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
