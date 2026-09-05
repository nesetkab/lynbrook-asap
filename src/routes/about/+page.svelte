<script lang="ts">
	import { officers } from '$lib/data';
</script>

<svelte:head>
	<title>about · lynbrook asap</title>
</svelte:head>

<section class="wrap head">
	<div>
		<h1>about</h1>
		<p class="lede">
			ASAP is a service club at Lynbrook High School for protecting animals through volunteering and
			hands-on commitments. we host social events and collaborate with clubs to contribute to the
			cause of animal welfare; check us out :)
		</p>
		<p class="lede">we meet every monday during brunch in room 72.</p>
	</div>
	<img src="/photos/critters.png" alt="illustration of a vulture, a dog, a rabbit and a bird" />
</section>

<section class="wrap team">
	<h2>officers</h2>
	<ol>
		{#each officers as person}
			<li>
				<span class="name">{person.name}</span>
				<span class="dots"></span>
				<span class="role">{person.role}</span>
			</li>
		{/each}
	</ol>
</section>

<style>
	.head {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 3rem;
		align-items: center;
		padding-block: clamp(2.5rem, 7vw, 5rem) clamp(3rem, 7vw, 5rem);
	}

	h1 {
		font-size: clamp(3rem, 8vw, 5.5rem);
		margin: 0.3rem 0 1.4rem;
	}

	.head img {
		transform: rotate(4deg);
	}

	.team {
		padding-bottom: clamp(2rem, 6vw, 4rem);
	}

	.team h2 {
		font-size: clamp(2rem, 4.5vw, 3.2rem);
		margin-bottom: 1.5rem;
	}

	ol {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		padding-block: 1rem;
		border-top: 1px solid var(--rule);
	}

	li:last-child {
		border-bottom: 1px solid var(--rule);
	}

	.name {
		font-family: var(--display);
		font-size: clamp(1.3rem, 2.6vw, 1.9rem);
		font-variation-settings: 'SOFT' 80, 'WONK' 1;
	}

	.dots {
		flex: 1;
		border-bottom: 1.5px dotted var(--rule);
		transform: translateY(-0.3rem);
	}

	.role {
		font-size: 0.8rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--plum);
		white-space: nowrap;
	}

	@media (max-width: 800px) {
		.head {
			grid-template-columns: 1fr;
		}

		.head img {
			max-width: 20rem;
		}
	}

	@media (max-width: 520px) {
		li {
			flex-direction: column;
			gap: 0.1rem;
		}

		.dots {
			display: none;
		}
	}
</style>
