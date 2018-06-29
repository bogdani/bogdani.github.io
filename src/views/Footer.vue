<template>
	<div>
		<footer class="footer  is-hidden-mobile">
		  <div class="container">
		    <div class="content has-text-centered">
		      <p>
						{{ title }}
						<a href="http://bulma.io"><strong>Bulma</strong></a> *
						<a href="https://vuejs.org/"><strong>VueJs</strong></a> *
						<a href="http://sass-lang.com/"><strong>Sass</strong></a>
		      </p>
		    </div>
		  </div>
		</footer>
	</div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      title: 'Made with love and help from my friends:'
    }
  }
}
</script>

<style scoped lang="scss">
$base2:     #eee8d5;
$violet:    #6c71c4;
@mixin alpha-background-color($color, $background) {
  $percent: alpha($color) * 100%;
  $opaque: opacify($color, 1);
  $solid-color: mix($opaque, $background, $percent);
  background-color: $solid-color;
  background-color: $color;
}
a {
  color: $violet;
  text-transform: uppercase;
  font-weight: 700;
  &:hover {
    @include alpha-background-color(rgba($violet, 0.3), white);
    color: $violet;
  }
}

	.footer {
		background-color: $base2;
	   position: fixed;
	   bottom: 0px;
	   width: 100%;
	}

</style>
