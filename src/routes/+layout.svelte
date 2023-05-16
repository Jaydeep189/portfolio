<script>
	import Footer from '$lib/layout/Footer.svelte';
	import Navbar from '$lib/layout/Navbar.svelte';
	import '../app.css';
	import 'lazysizes';

	import { register } from 'swiper/element/bundle';
	register();
</script>

<svelte:head>
	<title>Jaydeep Sharma</title>
	<meta
		name="description"
		content="Discover my web portfolio as a full stack developer. I create software for fun, work, and
					community. Explore my diverse projects and witness my passion for crafting innovative
					solutions that make a difference"
	/>
</svelte:head>

<main class="main scroll-smooth bg-1 selection:bg-purple-800 selection:text-white">
	<Navbar />
	<slot />
	<Footer />
</main>
