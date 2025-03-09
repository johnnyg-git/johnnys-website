<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';

	let isInView: boolean = false;
	let isInView2: boolean = false;
	let isInView3: boolean = false;
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div
	id="aboutSection"
	class="container {isInView ? 'slideIn' : ''}"
	use:inview={{}}
	on:inview_change={(event) => {
		isInView = true;
	}}
>
	<div class="card about">
		<h1>About</h1>
		<p>This is the about page.</p>
	</div>
	<div class="card about">
		<h1>About</h1>
		<p>This is the about page.</p>
	</div>
	<div class="card about">
		<h1>About</h1>
		<p>This is the about page.</p>
	</div>
</div>

<div
	id="contactSection"
	class="container {isInView2 ? 'slideIn' : ''}"
	use:inview={{}}
	on:inview_change={(event) => {
		isInView2 = event.detail.inView;
	}}
>
	<div class="card about">
		<h1>About</h1>
		<p>This is the about page.</p>
	</div>
	<div class="card about">
		<h1>About</h1>
		<p>This is the about page.</p>
	</div>
	<div class="card about">
		<h1>About</h1>
		<p>This is the about page.</p>
	</div>
</div>

<div
	class="container {isInView3 ? 'slideIn' : ''}"
	use:inview={{}}
	on:inview_change={(event) => {
		isInView3 = event.detail.inView;
	}}
>
	<div class="card about">
		<h1>About</h1>
		<p>This is the about page.</p>
	</div>
	<div class="card about">
		<h1>About</h1>
		<p>This is the about page.</p>
	</div>
	<div class="card about">
		<h1>About</h1>
		<p>This is the about page.</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		margin: 30px;
		opacity: 0;
		transform: translateY(20px);
		transition:
			transform 1s ease,
			opacity 1s ease;
	}

	.slideIn {
		opacity: 1;
		transform: translateY(0);
	}

	.card {
		flex: 1 1 250px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		padding: 20px;
		border-radius: 5px;
		background-color: var(--bg-color);
		box-shadow: 0 0 10px var(--accent-color);
		min-width: 250px;
	}

	.about {
		min-height: 50vh;
	}

	.about h1 {
		font-size: 24px;
	}

	.about p {
		font-size: 18px;
		color: var(--text-color-less);
	}
</style>
