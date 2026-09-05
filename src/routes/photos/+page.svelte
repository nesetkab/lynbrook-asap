<script lang="ts">
	import { photos } from '$lib/data';

	const tilt = [-2.5, 1.8, -1.2, 2.4, -3, 0.9, 1.5, -1.9, 2.1];
</script>

<svelte:head>
	<title>photos · lynbrook asap</title>
</svelte:head>

<section class="wrap head">
	<h1>photos</h1>
</section>

<section class="wrap grid">
	{#each photos as src, i}
		<figure style="--t: {tilt[i % tilt.length]}deg">
			<img {src} alt="" loading="lazy" />
		</figure>
	{/each}
</section>

<style>
	.head {
		padding-block: clamp(2.5rem, 7vw, 5rem) 2.5rem;
	}

	h1 {
		font-size: clamp(3rem, 8vw, 5.5rem);
		margin-top: 0.3rem;
	}

	.grid {
		columns: 3;
		column-gap: 1rem;
		padding-bottom: 2rem;
	}

	figure {
		margin: 0 0 1rem;
		break-inside: avoid;
		padding: 0.55rem 0.55rem 1.5rem;
		background: var(--paper-warm);
		box-shadow: 0 10px 26px -18px rgba(50, 25, 70, 0.6);
		transform: rotate(var(--t));
		transition: transform 0.25s;
	}

	figure:hover {
		transform: rotate(0deg) scale(1.02);
		position: relative;
		z-index: 2;
	}

	figure img {
		width: 100%;
	}

	@media (max-width: 900px) {
		.grid {
			columns: 2;
		}
	}

	@media (max-width: 560px) {
		.grid {
			columns: 1;
		}
	}
</style>
