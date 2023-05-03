<script>
	import ProjectSwiper from '$lib/util/ProjectSwiper.svelte';
	import { ArrowUpRight } from 'lucide-svelte';
	import ProjectSlide from './ProjectSlide.svelte';
	import Seperator from '$lib/util/Seperator.svelte';
</script>

<section id="work" class=" font-mono py-10 relative">
	<div class="max-w-6xl mx-auto max-lg:mx-5">
		<h3 class=" text-purple-800 text-2xl font-semibold">Work</h3>
		<h2 class=" font-bold text-3xl">Projects Completed</h2>
	</div>
	<div class="max-w-2xl mx-auto py-14 space-y-4 max-sm:mx-5">
		<h1 class=" text-xl md:text-3xl font-bold text-purple-800">Tradesec AMC Website</h1>
		<div class=" max-sm:text-xs space-y-3 font-medium">
			<p>Tradesec AMC India is a security systems company.</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor cum similique nemo
				quae enim et ducimus eaque illum officia! Rerum, aut? Fugit eaque dolores optio ab maiores
				nesciunt quos.
			</p>
		</div>
	</div>
	<ProjectSwiper>
		<ProjectSlide img="/projects/tradesecamc/2.png" alt="project image" />
		<ProjectSlide img="/projects/tradesecamc/1.png" alt="project image" />
		<ProjectSlide img="/projects/tradesecamc/3.png" alt="project image" />
	</ProjectSwiper>
	<div class="max-w-2xl mx-auto py-14 space-y-4 max-sm:mx-5">
		<h1 class=" text-xl md:text-3xl font-bold text-purple-800">Stacknyu (Co-Founder)</h1>
		<div class=" max-sm:text-xs space-y-3 font-medium">
			<p>Tradesec AMC India is a security systems company.</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolor cum similique nemo
				quae enim et ducimus eaque illum officia! Rerum, aut? Fugit eaque dolores optio ab maiores
				nesciunt quos.
			</p>
		</div>
	</div>
	<ProjectSwiper>
		<ProjectSlide img="/projects/stacknyu/2.png" alt="project image" />
		<ProjectSlide img="/projects/stacknyu/1.png" alt="project image" />
		<ProjectSlide img="/projects/stacknyu/3.png" alt="project image" />
	</ProjectSwiper>

	<div class=" flex justify-center py-6">
		<a
			href="/#work"
			class=" px-4 py-2 flex gap-1 bg-teal-700 hover:rotate-6 transition-all duration-300 text-white text-base lg:text-lg rounded-md"
			>View All Projects <ArrowUpRight /></a
		>
	</div>
</section>

<Seperator color=" border-purple-800" />
