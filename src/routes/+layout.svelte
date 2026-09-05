<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { email } from '$lib/data';
	import Mark from '$lib/Mark.svelte';

	let { children } = $props();

	const nav = [
		{ href: '/about', label: 'about' },
		{ href: '/volunteer', label: 'volunteer' },
		{ href: '/hours', label: 'hours' },
		{ href: '/photos', label: 'photos' },
		{ href: '/news', label: 'newsletters' }
	];

	let open = $state(false);
	let here = $derived(page.url.pathname.replace(/\/$/, '') || '/');

	$effect(() => {
		here;
		open = false;
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
	<meta name="theme-color" content="#f7ecee" />
</svelte:head>

<header>
	<div class="bar wrap">
		<a class="brand" href="/">
			<span class="mark"><Mark /></span>
			<span>lynbrook asap</span>
		</a>

		<button class="toggle" onclick={() => (open = !open)} aria-label="menu">
			{open ? 'close' : 'menu'}
		</button>

		<nav class:open>
			{#each nav as item}
				<a href={item.href} class:on={here === item.href}>{item.label}</a>
			{/each}
		</nav>
	</div>
	<hr class="rule" />
</header>

<main>
	{@render children()}
</main>

<footer>
	<hr class="rule" />
	<div class="wrap inner">
		<div>
			<p class="big">lynbrook asap</p>
			<p class="small">animal services &amp; protection · room 72, mondays @ brunch</p>
		</div>
		<div class="right">
			<a href="mailto:{email}">{email}</a>
			<p class="small">1280 johnson ave, san jose</p>
		</div>
	</div>
</footer>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 40;
		background: color-mix(in oklab, var(--paper) 88%, transparent);
		backdrop-filter: blur(10px);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-block: 0.85rem;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.55rem;
		text-decoration: none;
		font-family: var(--display);
		font-size: 1.35rem;
		font-variation-settings: 'SOFT' 80, 'WONK' 1;
		letter-spacing: -0.02em;
		white-space: nowrap;
	}

	.brand .mark {
		display: block;
		width: 24px;
		color: var(--plum);
		transform: rotate(-8deg);
	}

	nav {
		display: flex;
		gap: 1.5rem;
		font-size: 0.9rem;
	}

	nav a {
		text-decoration: none;
		color: var(--ink-soft);
		padding-bottom: 2px;
		border-bottom: 1.5px solid transparent;
		transition: color 0.2s, border-color 0.2s;
	}

	nav a:hover {
		color: var(--ink);
		border-color: var(--lav);
	}

	nav a.on {
		color: var(--ink);
		border-color: var(--plum);
	}

	.toggle {
		display: none;
		background: none;
		border: 0;
		font: inherit;
		font-size: 0.9rem;
		color: var(--ink-soft);
		cursor: pointer;
		padding: 0;
	}

	main {
		min-height: 62vh;
	}

	footer {
		margin-top: 4rem;
	}

	footer .inner {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: space-between;
		padding-block: 2.5rem 3.5rem;
	}

	.big {
		font-family: var(--display);
		font-size: 1.6rem;
		font-variation-settings: 'SOFT' 80, 'WONK' 1;
		margin: 0 0 0.2rem;
	}

	.small {
		font-size: 0.85rem;
		color: var(--ink-soft);
		margin: 0;
	}

	.right {
		text-align: right;
	}

	.right a {
		text-decoration-color: var(--lav);
		text-underline-offset: 4px;
	}

	@media (max-width: 720px) {
		.toggle {
			display: block;
		}

		nav {
			display: none;
			flex-basis: 100%;
			flex-wrap: wrap;
			gap: 1rem 1.25rem;
			padding-bottom: 0.6rem;
		}

		nav.open {
			display: flex;
		}

		.right {
			text-align: left;
		}
	}
</style>
