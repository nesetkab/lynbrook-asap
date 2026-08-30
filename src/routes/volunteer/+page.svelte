<script lang="ts">
	import { orgs, email } from '$lib/data';
</script>

<svelte:head>
	<title>volunteer · lynbrook asap</title>
</svelte:head>

<section class="wrap head">
	<p class="eyebrow">places to go</p>
	<h1>volunteer</h1>
	<p class="lede">
		everything here takes students. some want an application first, some just want you to email.
	</p>
</section>

<section class="wrap list">
	{#each orgs as org, i}
		<article>
			<span class="num">{String(i + 1).padStart(2, '0')}</span>
			<div class="body">
				<h2>{org.name}</h2>
				<p class="meta">{org.where} <i>·</i> {org.kind}</p>
				<ul>
					{#each org.notes as note}
						<li>{note}</li>
					{/each}
				</ul>
				{#if org.links.length}
					<div class="links">
						{#each org.links as link}
							<a href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
						{/each}
					</div>
				{/if}
			</div>
		</article>
	{/each}
</section>

<section class="wrap ask">
	<h2>know a place we missed?</h2>
	<p>
		email <a href="mailto:{email}">{email}</a> and we will put it on this page.
	</p>
</section>

<style>
	.head {
		padding-block: clamp(2.5rem, 7vw, 5rem) 2.5rem;
	}

	h1 {
		font-size: clamp(3rem, 8vw, 5.5rem);
		margin: 0.3rem 0 1.2rem;
	}

	.list {
		display: grid;
		gap: 0;
	}

	article {
		display: grid;
		grid-template-columns: 4rem 1fr;
		gap: 1.5rem;
		padding-block: 2.2rem;
		border-top: 1px solid var(--rule);
	}

	article:last-child {
		border-bottom: 1px solid var(--rule);
	}

	.num {
		font-family: var(--display);
		font-size: 1.1rem;
		color: var(--lav);
		padding-top: 0.4rem;
	}

	h2 {
		font-size: clamp(1.6rem, 3.2vw, 2.4rem);
		margin-bottom: 0.5rem;
	}

	.meta {
		font-size: 0.8rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--plum);
		margin-bottom: 0.9rem;
	}

	.meta i {
		color: var(--lav);
		font-style: normal;
	}

	ul {
		margin: 0 0 1rem;
		padding-left: 1.1rem;
		color: var(--ink-soft);
		max-width: 56ch;
	}

	li {
		margin-bottom: 0.25rem;
	}

	li::marker {
		color: var(--lav);
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.links a {
		font-size: 0.85rem;
		text-decoration: none;
		padding: 0.35rem 0.9rem;
		border: 1px solid var(--rule);
		border-radius: 999px;
		transition: background 0.18s, border-color 0.18s;
	}

	.links a:hover {
		background: var(--lav-pale);
		border-color: var(--lav);
	}

	.ask {
		padding-block: clamp(3rem, 7vw, 5rem);
	}

	.ask h2 {
		font-size: clamp(1.8rem, 4vw, 2.8rem);
		margin-bottom: 0.6rem;
	}

	.ask a {
		text-decoration-color: var(--lav);
		text-underline-offset: 4px;
	}

	@media (max-width: 640px) {
		article {
			grid-template-columns: 1fr;
			gap: 0.4rem;
		}

		.num {
			padding-top: 0;
		}
	}
</style>
