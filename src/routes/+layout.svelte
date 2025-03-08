<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

	// Create a state for whether the header is expanded or not
	let expanded = $state(false);
	let resized = $state(false);
	let y = 0;

	import { onMount } from 'svelte';
	onMount(() => {
		const headernavbar = document.querySelector('.headernavbar');
		if (!headernavbar) return;
		y = 8;
		window.addEventListener('scroll', () => {
			expanded = window.scrollY > y || resized;
		});

		window.addEventListener('resize', () => {
			resized = window.innerWidth < 1000;
			expanded = window.scrollY > y || resized;
		});
	});

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

<div class="headernavbar {expanded ? 'expanded' : ''} {resized ? 'resized' : ''}">
	<a href="/">
		<img src="/logo.png" class="navlogo hovershadow" alt="logo" width="50" height="50" />
	</a>
	<nav>
		<a href="/" class="navbutton hovershadow">Home</a>
		<a href="/about" class="navbutton hovershadow">About</a>
		<a href="/thisdoesntexist" class="navbutton hovershadow">Super Secret</a>
	</nav>
</div>

{@render children()}

<style>
	.headernavbar {
		box-sizing: border-box;
		background-color: #282828;
		color: #fff;
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: center; /* Center children horizontally */
		padding: 0.5em 1em;
		position: sticky;
		top: 0;
		margin: 0 auto;
		margin-top: 8px;
		max-width: 400px;
		border-bottom: 3px solid #7b3866;
		will-change: max-width, border-bottom, margin-top;
		transition:
			max-width 0.3s ease,
			border-bottom 0.3s ease,
			margin-top 0.3s ease;
		z-index: 1000;
	}

	.headernavbar.expanded {
		max-width: 100%; /* Full width when expanded */
		border-radius: 0;
	}

	.headernavbar.resized {
		margin-top: 0;
	}

	.navlogo {
		margin-right: 1em;
		border-radius: 50%;
	}

	.navbutton {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		background-color: transparent;
		border: none;
		color: inherit;
		text-decoration: none;
		font-size: 1em;
		border-radius: 5px;
		cursor: pointer;
		padding: 1em 1em;

		will-change: background-color;
		transition: background-color 0.3s ease;
	}

	.navbutton:hover {
		background-color: #7b3866;
	}

	.hovershadow {
		will-change: filter;
		transition: filter 0.3s ease;
	}

	.hovershadow:hover {
		filter: drop-shadow(0 0 0.5rem #7b3866);
	}
</style>
