<script lang="ts">
	import { hoursForm, pointsSheet, email } from '$lib/data';
</script>

<svelte:head>
	<title>hours · lynbrook asap</title>
</svelte:head>

<section class="wrap head">
	<h1>hours</h1>
</section>

<section class="wrap cards">
	<a class="card" href={hoursForm} target="_blank" rel="noreferrer">
		<span class="step">one</span>
		<h2>submit the form</h2>
		<p>fill this out each time you finish a shift.</p>
		<span class="go">open the form &rarr;</span>
	</a>
	<a class="card" href={pointsSheet} target="_blank" rel="noreferrer">
		<span class="step">two</span>
		<h2>check the sheet</h2>
		<p>your points show up here once we go through submissions.</p>
		<span class="go">open the sheet &rarr;</span>
	</a>
</section>

<section class="wrap note">
	<hr class="rule" />
	<p>
		something wrong with your count? email <a href="mailto:{email}">{email}</a>, message an officer,
		or catch us at the end of a meeting.
	</p>
</section>

<style>
	.head {
		padding-block: clamp(2.5rem, 7vw, 5rem) 2.5rem;
	}

	h1 {
		font-size: clamp(3rem, 8vw, 5.5rem);
		margin-top: 0.3rem;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		gap: 1.25rem;
	}

	.card {
		display: block;
		text-decoration: none;
		background: var(--paper-warm);
		border: 1.5px solid var(--rule);
		border-radius: 1.4rem;
		padding: 2rem 1.8rem 1.6rem;
		transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
	}

	.card:hover {
		transform: translateY(-4px) rotate(-0.6deg);
		border-color: var(--lav);
		box-shadow: 0 18px 40px -24px rgba(50, 25, 70, 0.5);
	}

	.step {
		font-family: var(--display);
		font-style: italic;
		color: var(--lav);
		font-size: 1.1rem;
	}

	.card h2 {
		font-size: clamp(1.9rem, 3.4vw, 2.6rem);
		margin: 0.3rem 0 0.7rem;
	}

	.card p {
		color: var(--ink-soft);
		max-width: 30ch;
	}

	.go {
		font-size: 0.85rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--plum);
	}

	.note {
		padding-block: clamp(3rem, 7vw, 5rem);
	}

	.note p {
		margin-top: 1.5rem;
		max-width: 52ch;
		color: var(--ink-soft);
	}

	.note a {
		color: var(--ink);
		text-decoration-color: var(--lav);
		text-underline-offset: 4px;
	}
</style>
