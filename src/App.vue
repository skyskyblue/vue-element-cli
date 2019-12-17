<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created() {
      console.log(window, 'axios')
    }
  }
</script>

<style lang="scss">

</style>
