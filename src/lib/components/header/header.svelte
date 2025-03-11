<script lang="ts">
	import { onMount } from 'svelte';
	import Logo from './logo.svelte';
	import Navigation from './navigation.svelte';
</script>

<header>
	<Logo />
	<Navigation />
</header>
<br />

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
</style>
