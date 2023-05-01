<script>
	import { register } from 'swiper/element/bundle';
	register();
</script>

<swiper-container
	slides-per-view="2"
	class="hidden lg:block"
	space-between="20"
	autoplay="true"
	initial-slide="1"
	loop="true"
	centered-slides="true"
>
	<slot />
</swiper-container>

<swiper-container
	slides-per-view="1.1"
	space-between="20"
	class="lg:hidden block"
	autoplay="true"
	loop="true"
	centered-slides="true"
>
	<slot />
</swiper-container>
