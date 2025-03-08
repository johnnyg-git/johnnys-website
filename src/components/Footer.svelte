<script lang="ts">
	import IconMdiGithub from 'virtual:icons/mdi/github';
	import IconMdiEmail from 'virtual:icons/mdi/email';
</script>

<footer>
	<p class="footertext">
		Made by
		<a href="https://github.com/johnnyg-git" target="_blank" rel="noopener noreferrer">
			Joseph Goold (Johnny Johnny)
		</a>
	</p>
	<div>
		<a href="https://github.com/johnnyg-git" target="_blank" rel="noopener noreferrer">
			<IconMdiGithub />
		</a>
		<a href="mailto:inquiries@johnnygjohnny.co.uk">
			<IconMdiEmail />
		</a>
	</div>
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

	.footertext {
		color: #7b3866;
		font-size: 0.8em;
		margin: 0;
	}
</style>
