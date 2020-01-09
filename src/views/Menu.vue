<template>

  <!-- Navbar -->
  <nav class="navbar ">
  <div class="navbar-brand">
    <a class="navbar-item" @click="goHome">
      <img src="../assets/raLogo.png" alt="Logoul meu" width="30" height="30">
    </a>

    <a class="navbar-item is-hidden-desktop button bd-tw-button "  href="../assets/BogdanIvanciuCV.pdf" download>
      Download CV
    </a>
<hr class="navbar-divider">
    <a class="navbar-item is-hidden-desktop button bd-tw-button " href="http://linkedin.com/in/bogdan-ivanciu-4708255" target="_blank">
      LinkedIn Profile
    </a>

    <div class="navbar-burger burger" data-target="navMenuBog" :class="{'is-active': isActive}" @click="isActive = !isActive">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenuBog" class="navbar-menu is-hidden-tablet-only" :class="{'is-active': isActive}">
    <div class="navbar-start">
      <router-link to="logo" class="navbar-item">Logo design</router-link>
      <router-link to="web" class="navbar-item">Web development</router-link>
      <!-- <router-link to="test" class="navbar-item">Test</router-link> -->
    </div>

    <div class="navbar-end">
      <a class="navbar-item is-hidden-mobile" href="http://linkedin.com/in/bogdan-ivanciu-4708255" target="_blank">
        LinkedIn Profile
      </a>
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button bd-tw-button is-hidden-mobile" href="../assets/BogdanIvanciuCV.pdf" download>
              <span class="icon">
                <i class="fa fa-download"></i>
              </span>
              <span>Download CV</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
<!-- navbar -->

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    goHome() {
      this.$router.push({path: '/'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$base3:     #fdf6e3;
$base00:    #657b83;
$base1:     #93a1a1;
$base2:     #eee8d5;
$violet:    #6c71c4;
$orange:    #cb4b16;
@mixin alpha-background-color($color, $background) {
  $percent: alpha($color) * 100%;
  $opaque: opacify($color, 1);
  $solid-color: mix($opaque, $background, $percent);
  background-color: $solid-color;
  background-color: $color;
}
.navbar {
  background-color: $base2;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: $violet;
  text-transform: uppercase;
  font-weight: 700;
  &:hover {
    @include alpha-background-color(rgba($orange, 0.3), white);
    color: $violet;
  }
}

a.button{
  @include alpha-background-color(rgba($base3, 0.3), white);
  background-color: $orange;
  color: $base3;
  &:hover {
    @include alpha-background-color(rgba($orange, 0.3), white);
    color: $violet;
  }
}
a.navbar-item:hover{
  @include alpha-background-color(rgba($orange, 0.3), white);
  color: $violet;
}
</style>
