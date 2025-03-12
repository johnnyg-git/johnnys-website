<script lang="ts">
	import { onMount } from 'svelte';

	import IconMdiGithub from 'virtual:icons/mdi/github';
	import IconMdiEmail from 'virtual:icons/mdi/email';
	import IconMdiDiscord from 'virtual:icons/mdi/discord';

	interface SendMessageResponse {
		success: boolean;
		received?: { username: string; content: string };
		error?: string;
	}

	let messages: { username: string; content: string }[] = $state([]);
	let username = $state('');
	let messageContent = $state('');
	let errorResponse = $state('');

	async function sendMessage(username: string, content: string): Promise<SendMessageResponse> {
		try {
			const response = await fetch('/api/addmessage', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, content })
			});

			const data = await response.json();

			if (!response.ok) {
				return { success: false, error: data.error || 'Error sending message.' };
			}

			await updateMessages();

			return data;
		} catch (err: any) {
			console.error('Error sending message:', err);
			return { success: false, error: err.message || 'Error sending message.' };
		}
	}

	async function getMessages(): Promise<{ username: string; content: string }[] | null> {
		try {
			const response = await fetch('/api/getmessages');

			if (!response.ok) {
				console.error('Failed to fetch messages:', response.statusText);
				return null;
			}

			const data = await response.json();
			return data.messages as { username: string; content: string }[];
		} catch (error) {
			console.error('Error fetching messages:', error);
			return null;
		}
	}

	async function updateMessages() {
		const fetchedMessages = await getMessages();
		if (fetchedMessages) {
			messages = fetchedMessages;
		}
	}

	onMount(async () => {
		await updateMessages();
	});
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

	<div id="messageSection" class="section">
		<div class="sectionContent">
			<h2>Message Board</h2>
			{#if messages.length === 0}
				<p>No messages to display.</p>
			{:else}
				<ul>
					{#each messages as message}
						<li><strong>{message.username}:</strong> {message.content}</li>
					{/each}
				</ul>
			{/if}

			<h3>Send a Message</h3>
			<input type="text" placeholder="Username" bind:value={username} maxlength="20" />
			<input type="text" placeholder="Your Message" bind:value={messageContent} maxlength="40" />
			<button
				onclick={(event) => {
					event.preventDefault();
					sendMessage(username, messageContent).then((response) => {
						if (response.success) {
							username = '';
							messageContent = '';
							errorResponse = '';
						} else {
							errorResponse = response.error || 'Error sending message.';
						}
					});
				}}>Send</button
			>
			{#if errorResponse}
				<p style="color: red;">{errorResponse}</p>
			{/if}
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
