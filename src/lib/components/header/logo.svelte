<script lang="ts">
	// Accept width as a prop with a default value
	let width = $state(900); // Default to 0 if not provided
	let reduceSize = 800;

	// You could also add local state tracking if needed
	import { onMount } from 'svelte';

	onMount(() => {
		width = window.innerWidth;
	});
</script>

<svelte:window bind:innerWidth={width} />

<a href="/">
	<div class="topinfo">
		<img src="/logo.png" height="50px" width="50px" alt="Logo" />
		<h1>Joseph Goold</h1>
		{#if width > reduceSize}
			<h2>- Johnny Johnny</h2>
		{/if}
	</div>
</a>

<style>
	.topinfo {
		display: flex;
		align-items: center;
		width: fit-content;
		height: fit-content;
		gap: 10px;
		padding: 5px;
		transition:
			transform 0.3s ease,
			background-color 0.3s ease,
			box-shadow 0.3s ease;
		user-select: none; /* Prevent text selection */
	}

	.topinfo:hover {
		transform: scale(1.1);
		background-color: var(--primary-color);
		box-shadow: 0 0 10px var(--primary-color);
	}

	img {
		border-radius: 50%;
	}

	h1 {
		font-size: 18px;
	}

	h2 {
		font-size: 14px;
		color: var(--text-color-less);
	}

	a {
		text-decoration: none;
		color: inherit;
		outline: none;
	}
</style>
