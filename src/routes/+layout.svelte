<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';

	let { children } = $props();

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Header />

<div class="content">
	{@render children()}
</div>

<Footer />
