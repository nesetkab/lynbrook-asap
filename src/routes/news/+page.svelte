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
		<figure style="--t: {i % 2 ? 1.5 : -1.8}deg">
			<img src={issue.src} alt={issue.title} loading="lazy" />
			<figcaption>{issue.title}</figcaption>
		</figure>
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

	figure {
		margin: 0;
		transform: rotate(var(--t));
		transition: transform 0.25s;
	}

	figure:hover {
		transform: rotate(0deg) translateY(-6px);
	}

	figure img {
		width: 100%;
		border: 1px solid var(--rule);
		box-shadow: 0 16px 40px -26px rgba(50, 25, 70, 0.7);
	}

	figcaption {
		margin-top: 0.8rem;
		font-family: var(--display);
		font-size: 1.2rem;
		font-variation-settings: 'SOFT' 90, 'WONK' 1;
		color: var(--plum);
	}
</style>
