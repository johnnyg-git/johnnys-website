<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	let { children } = $props();
</script>

<Header />

<div class="container">
	{@render children()}
</div>

<Footer />

<style>
	.container {
		width: 100%;
		min-height: 100vh;
		min-height: 100vdh;
	}
</style>
