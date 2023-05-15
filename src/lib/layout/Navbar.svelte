<script>
	import { Menu } from 'lucide-svelte';
</script>

<nav class=" p-8 max-w-6xl mx-auto flex justify-between items-center transition-all duration-300">
	<a href="/">
		<h1 class=" font-carveat text-3xl lg:text-5xl hover:text-teal-700 transition-all duration-300">
			Jaydeep Sharma
		</h1>
	</a>
	<div class=" block md:hidden">
		<Menu />
	</div>
	<ul
		class=" hidden md:flex justify-end font-semibold text-base lg:text-xl font-mono space-x-4 lg:space-x-10"
	>
		<li class=" hover:text-purple-800 transition-all duration-300">
			<a href="/#work">Work</a>
		</li>
		<li class=" transition-all duration-300">
			<a href="/#skills" class="hover:text-purple-800">Skills</a>
		</li>
		<li class=" hover:text-purple-800 transition-all duration-300">
			<a href="/#about">About</a>
		</li>
		<!-- <li class=" hover:text-purple-800 transition-all duration-300">
			<a href="/#about">Blog</a>
		</li> -->
		<li class=" hover:text-purple-800 transition-all duration-300">
			<a href="/#contact">Contact</a>
		</li>
	</ul>
</nav>
