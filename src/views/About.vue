<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
  export default {
    name: 'about',
    created() {
      console.log(moment(), '11')
      console.log(_, '22')
    }
  }
</script>
