<template>
<section class="section" id="web">
    <div class="container">
      <h1 class="title">{{ title }}</h1>

      <!-- Columns Row-1 -->
      <div class="columns">
        <!-- First column content row-1 -->
        <div class="column is-4">
          <div class="box myCard">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <p class="image is-64x64">
  									<img src="../assets/web/bg1.jpg" alt="background 1"  class="roundImg">
  								</p>
                </figure>
              </div>
              <div class="media-content">
  								<div class="content">
  										<p>
  										<strong><a href="http://www.reflectionart.ro">Reflection ART</a></strong>
  										<br>
  										Wordpress implementation, HTML, CSS, Jquery.
  									</p>
  								</div>
  						</div>
            </article>
          </div>
        </div><!-- first column content -->
        <!-- Second column content row-2 -->
        <div class="column is-4">
          <div class="box myCard">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <p class="image is-64x64">
  								<img src="../assets/web/bg2.jpg" alt="background 2"  class="roundImg">
  							  </p>
                </figure>
              </div>
              <div class="media-content">
  							<div class="content">
  								<p>
  									<strong><a href="http://www.andodentexpert.ro">Andodent</a></strong>
  									<br>
  									Wordpress multisite implementation, HTML, CSS, Jquery.
  								</p>
  							</div>
  						</div>
            </article>
          </div>
      </div><!-- second column content -->
      <!-- Third column content row-1 -->
      <div class="column is-4">
        <div class="box myCard">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <p class="image is-64x64">
  									<img src="../assets/web/bg3.jpg" alt="background 3"  class="roundImg">
  							</p>
              </figure>
            </div>
            <div class="media-content">
  								<div class="content">
  									<p>
  										<strong><a href="http://zenphoto.reflectionart.ro">Zen Photo</a></strong>
  										<br>
  										A project for Avantaj Consulting.
  									</p>
  								</div>
  					</div>
          </article>
        </div>
    </div><!-- third column content -->
  </div><!-- columns -->
  <!-- Columns Row 2-->
  <div class="columns">
    <!-- First column content row-2 -->
    <div class="column is-4">
      <div class="box myCard">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <p class="image is-64x64">
  								<img src="../assets/web/bg5.jpg" alt="background 5"  class="roundImg">
  							</p>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
  									<strong><a href="#">Izoprim</a></strong>
  									<br>
  									Website template  coded using  Bootstrap,  HTML5,  CSS3.
  								</p>
            </div>
          </div>
        </article>
      </div>
    </div><!-- first column content -->
    <!-- Second column content row-2 -->
    <div class="column is-4">
      <div class="box myCard">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <p class="image is-64x64">
  									<img src="../assets/web/bg7.jpg" alt="background 7"  class="roundImg">
  								</p>
            </figure>
          </div>
          <div class="media-content">
            <div class="media-content">
  							<div class="content">
                  <p>
  										<strong><a href="http://www.avocat.reflectionart.ro">Cabinet de avocat</a></strong>
  										<br>
  										Wordpress implementation, HTML, CSS, Jquery.
  									</p>
  							</div>
  						</div>
          </div>
        </article>
      </div>
  </div><!-- second column content -->

  </div><!-- columns row-2 -->

  </div><!-- container -->

</section><!-- web -->

</template>

<script>
export default {
  name: 'web',
  data () {
    return {
      title: 'Web development'
    }
  }
}
</script>

<style lang="scss" scoped>
// Solarised --------------------
$base03:    #002b36;
$base02:    #073642;
$base01:    #586e75;
$base00:    #657b83;
$base0:     #839496;
$base1:     #93a1a1;
$base2:     #eee8d5;
$base3:     #fdf6e3;
$yellow:    #b58900;
$orange:    #cb4b16;
$red:       #dc322f;
$magenta:   #d33682;
$violet:    #6c71c4;
$blue:      #268bd2;
$cyan:      #2aa198;
$green:     #859900;
/* Solarised --------------------*/
$text: $base00;
$primary: $base03;
$title: $violet;
$body-background: $base3;
// $family-primary: $family-serif;
/*Mixins*/
/**
 * Computes a top-shadow for a card effect.
 * @param {Number} $depth - depth level
 * @return {List}
 */
@function top-shadow($depth) {
  $primary-offset: nth(1.5 3 10 14 19, $depth) * 1px;
  $blur: nth(1.5 3 10 14 19, $depth) * 4px;
  $color: rgba(black, nth(.12 .16 .19 .25 .30, $depth));
  @return 0 $primary-offset $blur $color;
}

/**
 * Computes a bottom-shadow for a card effect.
 * @param {Number} $depth - depth level
 * @return {List}
 */
@function bottom-shadow($depth) {
  $primary-offset: nth(1.5 3 6 10 15, $depth) * 1px;
  $blur: nth(1 3 3 5 6, $depth) * 4px;
  $color: rgba(black, nth(.24 .23 .23 .22 .22, $depth));
  @return 0 $primary-offset $blur $color;
}

/**
 * Gives a card depth effect.
 * @param {Number} $depth - depth level (between 1 and 5)
 * @link http://www.google.com/design/spec/layout/layout-principles.html#layout-principles-dimensionality Google Design
 * @requires {function} top-shadow
 * @requires {function} bottom-shadow
 */
@mixin card($depth) {
  @if $depth < 1 {
    box-shadow: none;
  } @else if $depth > 5 {
    @warn "Invalid $depth `#{$depth}` for mixin `card`.";
  } @else {
    box-shadow: bottom-shadow($depth), top-shadow($depth);
  }
}
@mixin alpha-background-color($color, $background) {
  $percent: alpha($color) * 100%;
  $opaque: opacify($color, 1);
  $solid-color: mix($opaque, $background, $percent);
  background-color: $solid-color;
  background-color: $color;
}
.myCard {
  @include card(2);
  padding: 10px;
  -webkit-transition:    all 0.8s;
  transition: all 0.8s;
  background-color:  rgba($base3, 0.2);
  text-align: justify;
  margin-bottom: gutter(1);

  &:hover, &:focus{
    @include card(4);
    -webkit-transform:translateY(-5px);
            transform:translateY(-5px);
  }
  &:active {
    @include card(4);
    -webkit-transform:translateY(-2px);
            transform:translateY(-2px);
  }
}
.media-content{
  strong{
    color: $violet;
  }
}
#web .title {
  color: $violet;
}
#web {
  a{
    color: $violet;
    &:hover {
      @include alpha-background-color(rgba($violet, 0.3), white);
      color: $violet;
    }
  }
}
.roundImg {
	border-radius: 15%;
}


</style>
