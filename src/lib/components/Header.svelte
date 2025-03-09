<script lang="ts">
	import { onMount } from 'svelte';

	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	let width = 0;

	// Set initial width on mount
	onMount(() => {
		width = window.innerWidth;
	});
</script>

<svelte:window bind:innerWidth={width} />

<header>
	<a href="/">
		<div class="topinfo">
			<img src="/logo.png" height="50px" width="50px" alt="Logo" />
			<h1>Joseph Goold</h1>
			{#if width > 350}
				<h2>- Johnny Johnny</h2>
			{/if}
		</div>
	</a>
	<nav class="navrow">
		<a
			href="/"
			on:click|preventDefault={() => {
				if (window.location.pathname !== '/') window.location.href = '/';
				else scrollToSection('aboutSection');
			}}>About</a
		>
		<a
			href="/"
			on:click|preventDefault={() => {
				if (window.location.pathname !== '/') window.location.href = '/';
				else scrollToSection('contactSection');
			}}>Contact</a
		>
		<a
			href="/"
			on:click|preventDefault={() => {
				if (window.location.pathname !== '/') window.location.href = '/';
				else scrollToSection('catSection');
			}}>Cat</a
		>
	</nav>
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

	.topinfo,
	.navrow {
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

	.navrow a {
		padding: 5px;
		border-radius: 5px;
		transition:
			transform 0.3s ease,
			background-color 0.3s ease,
			box-shadow 0.3s ease;
		user-select: none; /* Prevent text selection */
	}

	.topinfo:hover,
	.navrow a:hover {
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
