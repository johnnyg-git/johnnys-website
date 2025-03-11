<script lang="ts">
	import IconMdiGithub from 'virtual:icons/mdi/github';
	import IconMdiEmail from 'virtual:icons/mdi/email';
</script>

<div>
	<a
		href="https://github.com/johnnyg-git"
		target="_blank"
		rel="noopener noreferrer"
		class="footersocial"
	>
		<IconMdiGithub />
	</a>
	<a href="mailto:inquiries@johnnygjohnny.co.uk" class="footersocial">
		<IconMdiEmail />
	</a>
</div>

<style>
	.footersocial {
		display: inline-block;
		margin: 0 0.5em;
		transition: transform 0.3s ease;
	}

	.footersocial:hover {
		transform: translateY(-5px);
	}

	a {
		color: var(--primary-color);
		text-decoration: none;
		font-weight: normal;
		transition: color 0.3s ease;
		will-change: color;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
