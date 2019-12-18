<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link>
    </div>
    <div style="height:200px">
      <router-view/>
    </div>
    
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
