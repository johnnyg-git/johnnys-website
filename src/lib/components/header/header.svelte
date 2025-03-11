<script lang="ts">
	import Logo from './logo.svelte';
	import Navigation from './navigation.svelte';
	import type { NavItem } from './navigation.svelte';

	const navItems: NavItem[] = [
		{ text: 'About', sectionId: 'aboutSection' },
		{ text: 'Contact', sectionId: 'contactSection' },
		{ text: 'Cat', sectionId: 'catSection' }
	];
</script>

<header>
	<Logo />
	<Navigation {navItems} />
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
