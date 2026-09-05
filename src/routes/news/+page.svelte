<script lang="ts">
	import { newsletters } from '$lib/data';
</script>

<svelte:head>
	<title>newsletters · lynbrook asap</title>
</svelte:head>

<section class="wrap head">
	<h1>newsletters</h1>
</section>

<section class="wrap shelf">
	{#each newsletters as issue, i}
		<a
			class="issue"
			href={issue.src}
			target="_blank"
			rel="noreferrer"
			style="--t: {i % 2 ? 1.5 : -1.8}deg"
		>
			<img src={issue.src} alt="{issue.title} newsletter" loading="lazy" />
			<span class="cap">{issue.title} <i>open &#8599;</i></span>
		</a>
	{/each}
</section>

<style>
	.head {
		padding-block: clamp(2.5rem, 7vw, 5rem) 2.5rem;
	}

	h1 {
		font-size: clamp(2.6rem, 7.5vw, 5.5rem);
		margin-top: 0.3rem;
	}

	.shelf {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 2.5rem;
		padding-bottom: 2rem;
	}

	.issue {
		display: block;
		text-decoration: none;
		transform: rotate(var(--t));
		transition: transform 0.25s;
	}

	.issue:hover,
	.issue:focus-visible {
		transform: rotate(0deg) translateY(-6px);
	}

	.issue img {
		width: 100%;
		border: 1px solid var(--rule);
		box-shadow: 0 16px 40px -26px rgba(50, 25, 70, 0.7);
	}

	.cap {
		display: block;
		margin-top: 0.8rem;
		font-family: var(--display);
		font-size: 1.2rem;
		font-variation-settings: 'SOFT' 90, 'WONK' 1;
		color: var(--plum);
	}

	.cap i {
		font-family: var(--body);
		font-style: normal;
		font-size: 0.72rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--ink-soft);
		opacity: 0;
		transition: opacity 0.2s;
	}

	.issue:hover .cap i,
	.issue:focus-visible .cap i {
		opacity: 1;
	}
</style>
