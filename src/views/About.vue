<template>
  <div class="about">
    <HelloWorld :msg="msg"/>
    {{`年龄是${age}岁`}}
  </div>
</template>

<script>
  import HelloWorld from '@/components/HelloWorld'
  export default {
    name: 'about',
    components: {
      HelloWorld,
    },
    data() {
      return {
        msg: 'name',
        age: 1
      }
    },
    created() {
      console.log(moment().format('YYYY-MM-DD HH:mm:ss'), '11')
      console.log(_, '22')
      console.log(currentEnv, 'currentEnv')
    }
  }
</script>
