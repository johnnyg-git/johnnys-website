<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<div class="container">
	<div class="card about">
		<h1>Oops, that wasn't supposed to happen!</h1>
		{#if page.error && page.status}
			<p>{page.status} - {page.error.message}</p>
		{/if}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		margin: 30px;
	}

	.card {
		flex: 1 1 250px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		padding: 20px;
		border-radius: 5px;
		background-color: var(--bg-color-secondary);
		box-shadow: 0 0 10px var(--accent-color);
		min-width: 250px;
	}

	.about h1 {
		font-size: 24px;
	}

	.about p {
		font-size: 18px;
		color: var(--text-color-less);
	}
</style>
