<template>
    <section>
    <!-- Hero large -->
          <section class="hero is-large">
            <div class="hero-body">
              <div class="container">
                <!-- Hero card -->
                  <div class="columns">
                    <div class="column is-4 is-offset-8">
                      <!-- Card -->
                      <transition-group appear appear-active-class="animated slideInLeft" :duration= "3000">
                      <div class="card"  key="card" v-show="show">
                        <div class="card-content">
                          <div class="media">
                            <div class="media-left">
                              <figure class="image is-96x96" key="image">
                                <img src="../assets/bogdan_ivanciu2.png" alt="BogdanI">

                              </figure>
                            </div>
                            <div class="media-content">
                              <div class="content has-text-right"  key="text">
                                 <br>
                                Welcome!!! this is my portfolio.<br>
                                You can find my profile on <a href="http://linkedin.com/in/bogdan-ivanciu-4708255">#LinkedIn</a>
                                 also myCodePen has some <a href="http://codepen.io/bogdani/pen/PpVoBb">#workinprogress</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition-group>
                      <!-- card -->
                    </div>
                  </div>

                <!-- herocard -->
              </div>
            </div>
          </section>
    <!-- hero large -->
    </section>
</template>

<script>

export default {
  name: 'hero',
  data () {
    return {
      title: 'BogdanIvanciu',
      show: true
    }
  }
}

</script>

<style scoped lang="scss">
$base3:     #fdf6e3;
$base00:    #657b83;
$base1:     #93a1a1;
$base2:     #eee8d5;
$violet:    #6c71c4;
$orange:    #cb4b16;
.bounce-enter-active {
  animation: bounce-in 2s;
}
.hero {
  background-image: url(../assets/code1.jpg);
  background-size: cover;
}
.media-content{
  color: $violet;
  text-align: justify;
  a {
    color: $orange;
  }
}
.box {
	background-color: rgba(0, 209, 178, 0);
  h1{
    color: white;
  }
}

.card {
  background-color: rgba(255, 255, 255, 0.5);
}

</style>
