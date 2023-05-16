<script>
	import { register } from 'swiper/element/bundle';
	register();
</script>

<swiper-container
	class=""
	effect="cards"
	css-mode="true"
	initial-slide="1"
	grab-cursor="true"
	loop="true"
	centered-slides="true"
>
	<slot />
</swiper-container>
