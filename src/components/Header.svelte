<script lang="ts">
	import { onMount } from 'svelte';
	import { onNavigate } from '$app/navigation';

	let scrollY = $state(0);
	let windowWidth = $state(1100);
	let y = 8;

	let expanded = $derived(scrollY > y || windowWidth < 1100);

	onMount(() => {
		windowWidth = window.innerWidth;
		scrollY = window.scrollY;

		const handleScroll = () => {
			scrollY = window.scrollY;
		};

		const handleResize = () => {
			windowWidth = window.innerWidth;
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
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

<div class="headernavbar {expanded ? 'expanded' : ''}">
	<a href="/">
		<img src="/logo.png" class="navlogo hovershadow" alt="logo" width="50" height="50" />
	</a>
	<nav>
		<a href="/" class="navbutton hovershadow">Home</a>
		<a href="/about" class="navbutton hovershadow">About</a>
		<a href="/thisdoesntexist" class="navbutton hovershadow">Super Secret</a>
	</nav>
</div>

<style>
	.headernavbar {
		box-sizing: border-box;
		background-color: #282828;
		color: #fff;
		border-radius: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5em 1em;
		position: sticky;
		top: 8px;
		margin: 0 auto;
		max-width: 1000px;
		border-bottom: 3px solid #7b3866;
		will-change: max-width, border-bottom, top;
		transition:
			max-width 0.3s ease,
			border-bottom 0.3s ease,
			top 0.1s ease;
		z-index: 1000;
		user-select: none;
	}

	.headernavbar.expanded {
		max-width: 100%;
		border-radius: 0;
		top: 0;
	}

	.headernavbar a {
		touch-action: manipulation;
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
		padding: 1em;
		user-select: none;
		transition: background-color 0.3s ease;
	}

	.navbutton:hover {
		background-color: #7b3866;
	}

	.hovershadow {
		transition: filter 0.3s ease;
	}

	.hovershadow:hover {
		filter: drop-shadow(0 0 0.5rem #7b3866);
	}
</style>
