<template>
  <div id="app">
     <my-menu></my-menu>

       <transition appear
        enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut"
        :duration="{enter: 1500, leave: 500}"
        mode="out-in">
          <router-view></router-view>
        </transition>

     <my-footer></my-footer>

  </div>
</template>

<script>

import Menu from './views/Menu'
import Footer from './views/Footer'

export default {
  name: 'app',
  components: {
    'my-menu': Menu,
    'my-footer': Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Dosis:400,700');
$background: red;
body {
  font-family: 'Dosis', sans-serif;
}
#app {
  font-family: 'Dosis', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  margin-top: 0px;
}

</style>
