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
				I have build the website for the company. The website is built using Nextjs, Tailwindcss,
				and Strapi CMS. It was a great learning experience as the website had many neuanaces, that
				challenged me to optimize my workflow
			</p>
		</div>
	</div>
	<ProjectSwiper>
		<ProjectSlide img="/projects/tradesecamc/2.webp" alt="project image" />
		<ProjectSlide img="/projects/tradesecamc/1.webp" alt="project image" />
		<ProjectSlide img="/projects/tradesecamc/3.webp" alt="project image" />
	</ProjectSwiper>
	<div class="max-w-2xl mx-auto py-14 space-y-4 max-sm:mx-5">
		<h1 class=" text-xl md:text-3xl font-bold text-purple-800">Stacknyu (Co-Founder)</h1>
		<div class=" max-sm:text-xs space-y-3 font-medium">
			<p>Stacknyu is a leading software company in new tech.</p>
			<p>
				I had started this company with few of my friends back in 2021 (NULLPRENEURS LLP), I have
				learned many things from being a co-founder in the company. Learning how to do bussiness as
				well as how to manage a team. This webiste was built on Sveltekit, Tailwindcss, and Ghost
				CMS. It was a great learning.
			</p>
		</div>
	</div>
	<ProjectSwiper>
		<ProjectSlide img="/projects/stacknyu/2.webp" alt="project image" />
		<ProjectSlide img="/projects/stacknyu/1.webp" alt="project image" />
		<ProjectSlide img="/projects/stacknyu/3.webp" alt="project image" />
	</ProjectSwiper>

	<div class=" flex justify-center py-6">
		<a
			href="https://stacknyu.com/projects"
			class=" px-4 py-2 flex gap-1 bg-teal-700 hover:rotate-6 transition-all duration-300 text-white text-base lg:text-lg rounded-md"
			>View All Projects <ArrowUpRight /></a
		>
	</div>
</section>

<Seperator color=" border-purple-800" />
