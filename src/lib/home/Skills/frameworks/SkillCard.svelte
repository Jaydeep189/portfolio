<script>
	import { ArrowUpRight } from 'lucide-svelte';

	export let name = 'Sveltekit';
	export let link = '/';
	export let img = '/frameworks/Svelte.svg';
	export let height = 'max-h-16 md:max-h-24';
</script>

<svelte:head>
	<link rel="preload" as="image" href={img} />
</svelte:head>

<a
	target="_blank"
	href={link}
	class=" drop-shadow-2xl grid grid-rows-6 max-h-56 p-6 bg-white rounded-xl gap-4 hover:scale-105 transition-all duration-300"
>
	<div class=" row-span-4 flex justify-center items-center">
		<img src={img} class={height} alt="" />
	</div>
	<div class=" row-span-2 flex justify-center items-end">
		<a target="_blank" href={link} class=" flex gap-2 text-xs md:text-lg lg:text-2xl font-semibold"
			>{name} <ArrowUpRight size={13} /></a
		>
	</div>
</a>
