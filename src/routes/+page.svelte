<script lang="ts">
	const index = [
		{ href: '/volunteer', label: 'volunteer', note: 'places nearby that take students' },
		{ href: '/hours', label: 'hours', note: 'the form and the point sheet' },
		{ href: '/photos', label: 'photos', note: 'shifts, mostly animals' },
		{ href: '/news', label: 'newsletters', note: 'three back issues' },
		{ href: '/about', label: 'about', note: 'officers and meeting info' }
	];
</script>

<svelte:head>
	<title>lynbrook asap</title>
	<meta
		name="description"
		content="animal services and protection club at lynbrook high school. find places to volunteer and log your hours."
	/>
</svelte:head>

<section class="masthead wrap">
	<img
		class="critters"
		src="/photos/critters.png"
		alt="illustration of a vulture, a dog, a rabbit and a bird"
	/>
	<h1>asap</h1>
	<hr class="rule" />
	<div class="under">
		<p class="expand">animal services and protection, lynbrook high school</p>
		<p class="say">
			we keep a running list of shelters and rescues nearby that take student volunteers. meetings
			are in room 72 on mondays at brunch.
		</p>
	</div>
</section>

<nav class="wrap index">
	{#each index as item}
		<a href={item.href}>
			<span class="label">{item.label}</span>
			<span class="note">{item.note}</span>
		</a>
	{/each}
</nav>

<figure class="closing">
	<img src="/photos/p16.jpg" alt="two members holding shelter dogs" />
	<figcaption class="wrap">a saturday at the shelter</figcaption>
</figure>

<style>
	.masthead {
		padding-block: clamp(1rem, 3vw, 2rem) clamp(2.5rem, 6vw, 4.5rem);
	}

	.critters {
		width: clamp(8rem, 21vw, 15rem);
		margin: 0 0 0 auto;
	}

	h1 {
		font-size: min(45.5vw, 31.5rem);
		font-variation-settings: 'SOFT' 40, 'WONK' 0, 'opsz' 144;
		font-weight: 400;
		line-height: 0.74;
		letter-spacing: -0.055em;
		margin: -0.22em 0 0 -0.05em;
	}

	.masthead .rule {
		margin-top: 0.9rem;
	}

	.under {
		padding-top: 1.4rem;
	}

	.expand {
		font-family: var(--display);
		font-style: italic;
		font-size: clamp(1.05rem, 2.1vw, 1.4rem);
		font-variation-settings: 'SOFT' 90, 'WONK' 1;
		color: var(--plum);
		margin: 0;
	}

	.say {
		max-width: 42ch;
		margin: 1.1rem 0 0;
		color: var(--ink-soft);
	}

	.index {
		display: flex;
		flex-direction: column;
		border-top: 1px solid var(--rule);
	}

	.index a {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1.5rem;
		padding-block: 1.15rem;
		border-bottom: 1px solid var(--rule);
		text-decoration: none;
		transition: padding-left 0.22s ease, color 0.22s ease;
	}

	.index a:hover {
		padding-left: 0.75rem;
		color: var(--plum);
	}

	.label {
		font-family: var(--display);
		font-size: clamp(1.6rem, 3.6vw, 2.6rem);
		font-variation-settings: 'SOFT' 70, 'WONK' 1;
		letter-spacing: -0.02em;
	}

	.note {
		font-size: 0.9rem;
		color: var(--ink-soft);
		text-align: right;
	}

	.closing {
		margin: clamp(3.5rem, 8vw, 6rem) 0 0;
	}

	.closing img {
		width: 100%;
		height: clamp(16rem, 44vw, 30rem);
		object-fit: cover;
		object-position: 50% 28%;
	}

	figcaption {
		font-family: var(--display);
		font-style: italic;
		font-size: 1.05rem;
		color: var(--ink-soft);
		padding-top: 0.7rem;
	}

	@media (max-width: 760px) {
		.critters {
			width: 48%;
			margin-bottom: -0.4rem;
		}

		.under {
			padding-top: 2.1rem;
		}

		.index a {
			flex-direction: column;
			gap: 0.15rem;
		}

		.note {
			text-align: left;
		}
	}
</style>
