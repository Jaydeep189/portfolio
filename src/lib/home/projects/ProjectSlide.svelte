<script>
	export let img = '/projects/tradesecamc/2.png';
	export let alt = 'project image';
</script>

<swiper-slide class=" flex justify-center items-center">
	<img draggable="false" data-src={img} class=" lazyload max-h-96 drop-shadow-xl" {alt} />
</swiper-slide>
