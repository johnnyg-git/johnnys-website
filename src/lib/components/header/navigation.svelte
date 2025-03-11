<script module lang="ts">
	export interface NavItem {
		text: string;
		sectionId: string;
	}

	function scrollToSection(sectionId: string) {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	}

	function handleNavClick(event: MouseEvent, sectionId: string) {
		event.preventDefault();
		if (window.location.pathname !== '/') {
			window.location.href = '/';
		} else {
			scrollToSection(sectionId);
		}
	}
</script>

<script lang="ts">
	let { navItems }: { navItems: NavItem[] } = $props();
</script>

<nav class="navrow">
	{#each navItems as item}
		<a
			href="/"
			onclick={(event) => {
				event.preventDefault();
				handleNavClick(event, item.sectionId);
			}}
		>
			{item.text}
		</a>
	{/each}
</nav>

<style>
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

	.navrow a:hover {
		transform: scale(1.1);
		background-color: var(--primary-color);
		box-shadow: 0 0 10px var(--primary-color);
	}

	a {
		text-decoration: none;
		color: inherit;
		outline: none;
	}
</style>
