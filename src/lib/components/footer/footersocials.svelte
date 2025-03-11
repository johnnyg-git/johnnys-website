<script lang="ts">
	import IconMdiGithub from 'virtual:icons/mdi/github';
	import IconMdiEmail from 'virtual:icons/mdi/email';
</script>

<div>
	<a href="https://github.com/johnnyg-git" target="_blank" rel="noopener noreferrer">
		<IconMdiGithub />
	</a>
	<a href="mailto:inquiries@johnnygjohnny.co.uk">
		<IconMdiEmail />
	</a>
</div>

<style>
	a {
		display: inline-block;
		padding: 10px;
		color: var(--primary-color);
		text-decoration: none;
		font-weight: normal;
		transition:
			color 0.3s ease,
			transform 0.3s ease;
		will-change: color, transform;
	}

	a:hover {
		color: var(--accent-color);
		transform: translateY(-5px);
	}
</style>
