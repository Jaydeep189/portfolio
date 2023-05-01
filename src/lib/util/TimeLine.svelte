<script>
	import { Circle } from 'lucide-svelte';
	export let year = '2022';
	export let title = 'SSIP Hackathon (Finalist)';
	export let color = 'text-purple-800';
	export let description =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi voluptas excepturi error eius, ipsa rem id aut vitae natus veritatis. Harum, cupiditate a. Sed voluptatum beatae nemo perspiciatis rerum.';
</script>

<div class="p-5 text-right col-span-3 lg:col-span-4">
	<h4 class={` ${color} text-lg sm:text-3xl font-black`}>{year}</h4>
</div>
<div class=" flex border-l-4 col-span-9 lg:col-span-8 border-gray-600 relative p-6">
	<Circle class={`shrink-0 text-[#228B22] -left-3 absolute`} fill="#228B22" size={20} />
	<div class=" space-y-2">
		<h1 class=" text-xl sm:text-3xl font-black">{title}</h1>
		<p class=" max-sm:text-xs">
			{description}
		</p>
	</div>
</div>
