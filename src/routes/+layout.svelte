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
		animation: fadeIn 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
		will-change: opacity, transform;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
			transform: translateX(-100px);
		}
		20% {
			opacity: 0.4;
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
