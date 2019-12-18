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
    async created() {
      this.$store.dispatch('Auth/changeAge', 16)
      console.log(this.age, 'age')
    },
    computed: {
      age() {
        return this.$store.getters['Auth/name']
      }
    },
    watch: {
      age($val) {
        console.log($val, 'store1')
      }
    },
    mounted() {
   
    }
  }
</script>

<style lang="scss">

</style>
