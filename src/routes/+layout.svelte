<script>
	import Footer from '$lib/layout/Footer.svelte';
	import Navbar from '$lib/layout/Navbar.svelte';
	import '../app.css';
	import 'lazysizes';
</script>

<main class="main scroll-smooth bg-1 selection:bg-purple-800 selection:text-white">
	<Navbar />
	<slot />
	<Footer />
</main>
