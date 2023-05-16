<script>
	import { Menu, X } from 'lucide-svelte';

	let menuOpen = true;

	const handleMenu = () => {
		menuOpen = !menuOpen;
	};
</script>

<nav class=" p-8 max-w-6xl mx-auto flex justify-between items-center transition-all duration-300">
	<a href="/">
		<h1 class=" font-carveat text-3xl lg:text-5xl hover:text-teal-700 transition-all duration-300">
			Jaydeep Sharma
		</h1>
	</a>
	<div class=" block md:hidden" on:click={() => (menuOpen = true)} on:keypress={() => {}}>
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
		<li class=" hover:text-purple-800 transition-all duration-300">
			<a href="/#contact">Contact</a>
		</li>
	</ul>
</nav>

<div
	class={` z-50 shadow-2xl ${
		menuOpen ? 'translate-x-0' : ' translate-x-full'
	} w-6/12 max-sm:w-7/12 transition-all duration-300 bg-white lg:hidden h-screen fixed top-0 right-0`}
>
	<div class="flex flex-col justify-between h-full">
		<div>
			<div class="flex justify-end items-center py-5 px-5">
				<div on:click={() => handleMenu()} on:keydown={() => {}}>
					<X size={20} strokeWidth={3} />
				</div>
			</div>
			<div
				class="text-left flex flex-col w-9/12 gap-6 mx-auto text-2xl py-10 text-secondary font-mono"
			>
				<a
					on:click={() => handleMenu()}
					class="hover:text-primary transition-colors duration-300"
					href="/#work">Work</a
				>
				<a
					on:click={() => handleMenu()}
					class="hover:text-primary transition-colors duration-300"
					href="/#skills">Skills</a
				>
				<a
					on:click={() => handleMenu()}
					class="hover:text-primary transition-colors duration-300"
					href="/#about">About</a
				>
				<a
					on:click={() => handleMenu()}
					class="hover:text-primary transition-colors duration-300"
					href="/#experience">Experience</a
				>
				<a
					on:click={() => handleMenu()}
					class="hover:text-primary transition-colors duration-300"
					href="/#education">Education</a
				>
				<a
					on:click={() => handleMenu()}
					class="hover:text-primary transition-colors duration-300"
					href="/#contact">Contact Us</a
				>
			</div>
		</div>
		<div class="flex justify-center pb-16">
			<button
				class="hover:bg-darkShade hover:shadow-xl drop-shadow-xl transition-colors duration-300 bg-primary text-white font-PassionOne text-4xl py-2 px-4 md:px-5 rounded-xl"
			>
				Get Quote
			</button>
		</div>
	</div>
</div>
