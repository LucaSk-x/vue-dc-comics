<template>
  <div id="app">
    <img alt="Vue logo" src="../public/img/dc-logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheMain from './components/TheMain.vue'
import TheFooter from './components/TheFooter.vue'
import TheNavBar from './components/TheNavBar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TheMain,
    TheFooter,
    TheNavBar,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
