<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
	require('./assets/css/swiper.min.css');
	require('./assets/css/animate.min.css');
export default {
  name: 'app'
}
</script>

<style lang="stylus">
 @import './assets/css/function';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
