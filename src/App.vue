<template>
  <div id="app">
    <TheNavBar></TheNavBar>
    <TheJumbo></TheJumbo>
    <TheTopMain></TheTopMain>
    <TheMain></TheMain>
    <TheFooter></TheFooter>
    <TheBottomFooter></TheBottomFooter>
  </div>
</template>

<script>
  import TheMain from './components/TheMain.vue'
  import TheJumbo from './components/TheJumbo.vue'
  import TheTopMain from './components/TheTopMain.vue'
  import TheFooter from './components/TheFooter.vue'
  import TheNavBar from './components/TheNavBar.vue'
  import TheBottomFooter from './components/TheBottomFooter.vue'

export default {
  name: 'App',
  components: {
    TheMain,    
    TheTopMain,
    TheFooter,
    TheNavBar,
    TheBottomFooter,
    TheJumbo,
  }
}
</script>

<style lang="scss">

</style>
