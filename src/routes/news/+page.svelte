<script lang="ts">
	import { newsletters } from '$lib/data';

	let openIssue = $state<number | null>(null);
	let pageIndex = $state(0);

	let issue = $derived(openIssue === null ? null : newsletters[openIssue]);

	function open(i: number, event: MouseEvent) {
		// let modified clicks fall through to the browser (new tab, save, etc)
		if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
		event.preventDefault();
		openIssue = i;
		pageIndex = 0;
	}

	function close() {
		openIssue = null;
	}

	function step(by: number) {
		if (!issue) return;
		pageIndex = (pageIndex + by + issue.pages.length) % issue.pages.length;
	}

	function onkeydown(event: KeyboardEvent) {
		if (openIssue === null) return;
		if (event.key === 'Escape') close();
		if (event.key === 'ArrowRight') step(1);
		if (event.key === 'ArrowLeft') step(-1);
	}
</script>

<svelte:head>
	<title>newsletters · lynbrook asap</title>
</svelte:head>

<svelte:window {onkeydown} />

<section class="wrap head">
	<h1>newsletters</h1>
</section>

<section class="wrap shelf">
	{#each newsletters as sheet, i}
		<a
			class="issue"
			href={sheet.pages[0]}
			target="_blank"
			rel="noreferrer"
			style="--t: {i % 2 ? 1.5 : -1.8}deg"
			onclick={(event) => open(i, event)}
		>
			<img src={sheet.pages[0]} alt="{sheet.title} newsletter" loading="lazy" />
			<span class="cap">
				{sheet.title}
				<i>{sheet.pages.length > 1 ? `${sheet.pages.length} pages` : 'open'} &#8599;</i>
			</span>
		</a>
	{/each}
</section>

{#if issue}
	<div class="viewer" role="dialog" aria-modal="true" aria-label="{issue.title} newsletter">
		<button class="scrim" onclick={close} aria-label="close newsletter" tabindex="-1"></button>

		<div class="sheet">
			<img src={issue.pages[pageIndex]} alt="{issue.title}, page {pageIndex + 1}" />
		</div>

		<div class="controls">
			{#if issue.pages.length > 1}
				<button onclick={() => step(-1)} aria-label="previous page">&#8592;</button>
				<span class="count">{pageIndex + 1} / {issue.pages.length}</span>
				<button onclick={() => step(1)} aria-label="next page">&#8594;</button>
			{:else}
				<span class="count">{issue.title}</span>
			{/if}
			<button class="shut" onclick={close}>close</button>
		</div>
	</div>
{/if}

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

	.viewer {
		position: fixed;
		inset: 0;
		z-index: 60;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		padding: clamp(1rem, 4vw, 2.5rem);
		background: color-mix(in oklab, var(--ink) 72%, transparent);
		backdrop-filter: blur(6px);
	}

	.scrim {
		position: absolute;
		inset: 0;
		background: none;
		border: 0;
		padding: 0;
		cursor: default;
	}

	.sheet {
		position: relative;
		min-height: 0;
		display: flex;
	}

	.sheet img {
		max-width: min(100%, 60rem);
		max-height: 100%;
		object-fit: contain;
		background: var(--paper);
		box-shadow: 0 30px 80px -40px rgba(0, 0, 0, 0.9);
	}

	.controls {
		position: relative;
		display: flex;
		align-items: center;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.controls button {
		font: inherit;
		font-size: 0.9rem;
		color: var(--paper);
		background: none;
		border: 1px solid color-mix(in oklab, var(--paper) 45%, transparent);
		border-radius: 999px;
		padding: 0.35rem 0.9rem;
		cursor: pointer;
		transition: background 0.2s;
	}

	.controls button:hover {
		background: color-mix(in oklab, var(--paper) 18%, transparent);
	}

	.count {
		font-size: 0.85rem;
		letter-spacing: 0.08em;
		color: color-mix(in oklab, var(--paper) 80%, transparent);
	}
</style>
