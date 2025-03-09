<header>
	<a href="/">
		<div class="topinfo">
			<img src="/logo.png" height="50px" width="50px" alt="Logo" />
			<h1>Joseph Goold</h1>
			<h2>- Johnny Johnny</h2>
		</div>
	</a>
	<nav>
		<a href="/about">About</a>
		<a href="/projects">Projects</a>
		<a href="/contact">Contact</a>
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	.topinfo {
		display: flex;
		align-items: center;
		width: fit-content;
		height: fit-content;
		gap: 10px;
		transition:
			transform 0.3s ease,
			background-color 0.3s ease,
			box-shadow 0.3s ease,
			padding 0.3s ease;
		user-select: none; /* Prevent text selection */
	}

	.topinfo:hover {
		transform: scale(1.1);
		background-color: var(--primary-color);
		box-shadow: 0 0 10px var(--primary-color);
		padding: 5px;
	}

	img {
		border-radius: 50%;
	}

	h1 {
		font-size: 18px;
	}

	h2 {
		font-size: 14px;
		color: var(--text-color-less);
	}

	a {
		text-decoration: none;
		color: inherit;
		outline: none; /* Remove focus outline */
	}

	a:focus {
		outline: none; /* Remove focus outline */
	}
</style>
