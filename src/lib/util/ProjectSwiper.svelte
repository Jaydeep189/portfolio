<script>
	import { register } from 'swiper/element/bundle';
	register();
</script>

<swiper-container
	class=""
	effect="cards"
	initial-slide="1"
	grab-cursor="true"
	autoplay="true"
	loop="true"
	centered-slides="true"
>
	<slot />
</swiper-container>
