<template>
  <div id="app">
    <NavBar></NavBar>
    
    <router-view/>

    <div class="clearfix"></div>
    
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComp
  }
  
}
</script>

<style>
  @import url('./assets/css/style.css');
  @import '~bootstrap/dist/css/bootstrap.css';
</style>
