<template>
  <!-- Logo -->
<section class="section" id="logo">
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
                  <a>
                    <img src="../assets/logo128/fabrica128.png" alt="fabrica" class="roundImg">
                  </a>
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Fabrica de ghinde</strong>
                    <br>
                    Logo design, business card design.
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
                  <a>
                    <img src="../assets/logo128/ra128.png" alt="reflection" class="roundImg">
  								</a>
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Reflection Art</strong>
                    <br>
                      Logo design, website design.
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
                <a>
									<img src="../assets/logo128/zen128.png" alt="zen" class="roundImg">
								</a>
              </figure>
            </div>
            <div class="media-content">
              <div class="content">
                <p>
                  <strong>Zen Photo</strong>
                  <br>
                    Logo design, website design.
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
              <a>
								<img src="../assets/logo128/sdd128.png" alt="sdd" class="roundImg">
								</a>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Cabinet de avocat</strong>
									<br>
									Logo design, business card design, website design and implementation.
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
              <a>
									<img src="../assets/logo128/bmmb128.png" alt="bmmb" class="roundImg">
							</a>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Build money making bussiness</strong>
										<br>
										Logo design, website design and implementation.
							</p>
            </div>
          </div>
        </article>
      </div>
  </div><!-- second column content -->
  <!-- THird column content row-2 -->
  <div class="column is-4">
    <div class="box myCard">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <a>
								<img src="../assets/logo128/ando128.png" alt="andodent" class="roundImg">
						</a>
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Andodent expert</strong>
									<br>
									Logo design, website design and implementation.
								</p>
          </div>
        </div>
      </article>
    </div>
  </div><!-- third column content -->
  </div><!-- columns row-2 -->
<!-- Columns Row-3 -->
<div class="columns">
    <!-- First column content row-3 -->
    <div class="column is-4">
      <div class="box myCard">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <a>
								<img src="../assets/logo128/izo128.png" alt="izoprim" class="roundImg">
							</a>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>Izoprim</strong>
										<br>
										Logo design, website design and implementation.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div><!-- first column content -->
  </div><!-- columns row-3 -->

    </div><!-- container -->

  </section><!-- logo -->

</template>

<script>
export default {
  name: 'logo',
  data () {
    return {
      title: 'My logo selection',
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
$title: $base03;
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

#logo .title {
  color: $violet;
}

.myCard {
  @include card(2);
  padding: 10px;
  -webkit-transition:    all 0.8s;
  transition: all 0.8s;
  background-color:  rgba($base3, 0.2);
  text-align: justify;
  // width: 64px;
  margin-bottom: gutter(1);
	// border-radius: 50%;

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

#logo .title {
  color: $violet;
  a{
    color: $violet;
  }
}
.roundImg {
	border-radius: 15%;
}
.modal-close.is-large{
  position: absolute;
}

</style>
