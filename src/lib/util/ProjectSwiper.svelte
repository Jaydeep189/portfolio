<swiper-container
	class="md:block hidden"
	effect="cards"
	grab-cursor="true"
	centered-slides="true"
	autoplay="true"
	loop="true"
	initial-slide="1"
	coverflow-effect-slide-shadows="true"
>
	<slot />
</swiper-container>

<swiper-container
	class="block md:hidden"
	effect="coverflow"
	grab-cursor="true"
	centered-slides="true"
	autoplay="true"
	no-swiping="true"
	allow-touch-move="false"
	slides-per-view="auto"
	loop="true"
	coverflow-effect-rotate="50"
	coverflow-effect-stretch="0"
	coverflow-effect-depth="100"
	coverflow-effect-modifier="1"
	initial-slide="1"
	coverflow-effect-slide-shadows="true"
>
	<slot />
</swiper-container>
