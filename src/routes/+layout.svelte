<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/header/header.svelte';
	import Footer from '$lib/components/footer/footer.svelte';

	let { children } = $props();
</script>

<div class="fadeIn">
	<Header />

	<div class="container">
		{@render children()}
	</div>

	<Footer />
</div>

<style>
	.container {
		width: 100%;
		min-height: 100vh;
		min-height: 100vdh;
	}

	.fadeIn {
		animation: fadeIn 0.3s ease-in;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
