<script lang="ts">
	function scrollToSection(sectionId: string) {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<nav class="navrow">
	<a
		href="/"
		onclick={(event) => {
			event.preventDefault();
			if (window.location.pathname !== '/') window.location.href = '/';
			else scrollToSection('aboutSection');
		}}>About</a
	>
	<a
		href="/"
		onclick={(event) => {
			event.preventDefault();
			if (window.location.pathname !== '/') window.location.href = '/';
			else scrollToSection('contactSection');
		}}>Contact</a
	>
	<a
		href="/"
		onclick={(event) => {
			event.preventDefault();
			if (window.location.pathname !== '/') window.location.href = '/';
			else scrollToSection('catSection');
		}}>Cat</a
	>
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
