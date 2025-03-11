<script lang="ts">
	import IconMdiGithub from 'virtual:icons/mdi/github';
	import IconMdiEmail from 'virtual:icons/mdi/email';
	import IconMdiDiscord from 'virtual:icons/mdi/discord';
</script>

<svelte:head>
	<title>Johnny's Website - Home</title>
</svelte:head>

<div class="content">
	<div id="aboutSection" class="section">
		<div class="sectionContent">
			<h2>About</h2>
			<p>Welcome! This website is currently under construction!</p>
			<a
				href="https://github.com/johnnyg-git/johnnys-website"
				target="_blank"
				rel="noopener noreferrer">This website is on GitHub!</a
			>
		</div>
	</div>

	<div id="contactSection" class="section">
		<div class="sectionContent contactContent">
			<h2>Contact</h2>
			<a
				href="https://github.com/johnnyg-git"
				target="_blank"
				rel="noopener noreferrer"
				class="contactSocial"
			>
				<IconMdiGithub /> GitHub - johnnyg-git
			</a>
			<a href="mailto:inquiries@johnnygjohnny.co.uk" class="contactSocial">
				<IconMdiEmail /> Email - inquiries@johnnygjohnny.co.uk
			</a>
			<p class="contactSocial">
				<IconMdiDiscord /> Discord - johnnyjohnny_
			</p>
		</div>
	</div>

	<div id="catSection" class="section">
		<div class="sectionContent">
			<h2>Thanks for visiting! Here's some cats!</h2>
			<div class="catContainer">
				<img class="catPicture" src="https://cataas.com/cat?random=1" alt="Cat 1" />
				<img class="catPicture" src="https://cataas.com/cat?random=2" alt="Cat 2" />
			</div>
		</div>
	</div>
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		gap: 3rem;
		padding: 2rem 0;
	}

	.section {
		width: 100%;
		max-width: 800px;
		padding: 2rem;
		border-radius: 12px;
		background-color: var(--bg-color-secondary);
		box-shadow: 0 4px 20px var(--accent-color);
		will-change: transform, box-shadow;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	.section:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 25px var(--accent-color);
	}

	.sectionContent {
		padding: 1rem;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
		position: relative;
	}

	h2::after {
		content: '';
		position: absolute;
		bottom: -8px;
		left: 0;
		width: 60px;
		height: 3px;
		background-color: var(--accent-color);
	}

	p {
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	.contactContent {
		display: flex;
		flex-direction: column;
	}

	a {
		color: var(--accent-color);
		text-decoration: none;
		font-weight: normal;
		transition: color 0.3s ease;
		will-change: color;

		&:hover {
			color: var(--accent-color-brighter);
		}
	}

	.contactSocial {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 1rem;
		margin-top: 0;
	}

	.catContainer {
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.catPicture {
		width: 100%;
		max-width: 400px;
		border-radius: 12px;
		object-fit: cover;
		object-position: center;
	}

	@media (max-width: 900px) {
		.section {
			max-width: 80%;
		}

		#catSection {
			width: 100%;
		}

		.catContainer {
			flex-direction: column;
			align-items: center;
		}

		.catPicture {
			max-width: 100%; /* Ensure images don't exceed container width */
		}
	}
</style>
