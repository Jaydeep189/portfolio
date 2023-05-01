<script>
	import Navbar from '$lib/layout/Navbar.svelte';
	import '../app.css';
</script>

<main class=" bg-1 selection:bg-purple-800 selection:text-white">
	<Navbar />
	<slot />
</main>
