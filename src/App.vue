<template>
  <div id="app">
    <TheNavBar></TheNavBar>
    <TheMain></TheMain>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheMain from './components/TheMain.vue'
import TheFooter from './components/TheFooter.vue'
import TheNavBar from './components/TheNavBar.vue'

export default {
  name: 'App',
  components: {
    TheMain,
    TheFooter,
    TheNavBar,
  }
}
</script>

<style lang="scss">

</style>
