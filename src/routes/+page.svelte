<script lang="ts">
</script>

<svelte:head>
	<title>Johnny's Website - Home</title>
</svelte:head>

<div class="content">
	<div id="aboutSection" class="testSection">
		<h2>About Section</h2>
	</div>

	<div id="contactSection" class="testSection">
		<h2>Contact Section</h2>
	</div>

	<div id="catSection" class="testSection">
		<h2>Cat Section</h2>
	</div>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
	}

	.testSection {
		height: 400px;
		width: 500px;
		margin: 20px 0;
		padding: 20px;
		border-radius: 8px;
		background-color: var(--bg-color-secondary);
	}
</style>
