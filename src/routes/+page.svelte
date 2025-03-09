<script lang="ts">
	import { inview } from 'svelte-inview';
	import { fade } from 'svelte/transition';

	import IconMdiGithub from 'virtual:icons/mdi/github';
	import IconMdiEmail from 'virtual:icons/mdi/email';
	import IconMdiDiscord from 'virtual:icons/mdi/discord';

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
		isInView = event.detail.inView;
	}}
>
	<div class="card about main">
		<h1>About</h1>
		<p>
			This website is going to be the personal website of Johnny Johnny.<br /><br />
			It is currently under construction, but maybe one day it will be finished! (I doubt it)
		</p>
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
	<div class="card contact">
		<h1>Contact</h1>
		<p>
			<span
				><a href="https://github.com/johnnyg-git" target="_blank" rel="noopener noreferrer"
					><IconMdiGithub /> johnnyg-git</a
				></span
			>
			<span>
				<a href="mailto:inquiries@johnnygjohnny.co.uk" target="_blank" rel="noopener noreferrer">
					<IconMdiEmail /> inquiries@johnnygjohnny.co.uk
				</a>
			</span>
			<span><IconMdiDiscord /> johnnyjohnny_</span>
		</p>
	</div>
</div>

<div
	id="catSection"
	class="container {isInView3 ? 'slideIn' : ''}"
	use:inview={{}}
	on:inview_change={(event) => {
		isInView3 = event.detail.inView;
	}}
>
	<div class="card cat">
		<h1>Here's a cat</h1>
		<img src="https://cataas.com/cat" alt="Cat" />
	</div>
</div>

<style>
	.container {
		display: flex;
		gap: 30px;
		margin: 30px;
		opacity: 0;
		transform: translateY(20px);
		transition:
			transform 1s ease,
			opacity 1s ease;
		will-change: transform, opacity;
	}

	.slideIn {
		opacity: 1;
		transform: translateY(0);
	}

	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		padding: 20px;
		border-radius: 5px;
		background-color: var(--bg-color);
		box-shadow: 0 0 10px var(--accent-color);
		flex: 1 1 400px;
		min-width: 100px;
	}

	.about h1,
	.contact h1,
	.cat h1 {
		font-size: 24px;
	}

	.contact p {
		font-size: 18px;
		color: var(--text-color-less);
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
	}

	.contact p span {
		display: flex;
		align-items: center;
	}

	.contact p span a {
		display: flex;
		align-items: center;
	}

	.about p {
		font-size: 18px;
		color: var(--text-color-less);
	}

	.cat img {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: 5px;
	}

	p {
		text-align: center;
	}
</style>
