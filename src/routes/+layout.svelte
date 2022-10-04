<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<header class="w-full bg-stone-900 isolate">
	<Header />
</header>
<main class="container mx-auto max-w-screen-lg flex-grow bg-stone-50 sm:p-4 lg:px-12">
	<slot />
</main>
<footer class="bg-stone-800 text-stone-100">
	<Footer />
</footer>
