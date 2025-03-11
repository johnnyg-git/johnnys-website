<script lang="ts">
	import FooterSocials from './footersocials.svelte';
	import FooterCredit from './footercredit.svelte';
</script>

<footer>
	<FooterCredit />
	<FooterSocials />
</footer>

<style>
	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 1em;
		background-color: transparent;
		padding: 5em 1em 1em;
	}
</style>
