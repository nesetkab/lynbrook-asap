<script lang="ts">
	import { hoursForm } from '$lib/data';
</script>

<svelte:head>
	<title>lynbrook asap</title>
	<meta
		name="description"
		content="animal services and protection club at lynbrook high school. find places to volunteer and log your hours."
	/>
</svelte:head>

<section class="hero wrap">
	<div class="type">
		<p class="eyebrow">lynbrook high school</p>
		<h1>
			animal
			<em>services</em>
			<span class="amp">&amp;</span>
			protection
		</h1>
		<p class="lede">
			we find shelters that need hands, and we show up. rabbits, dogs, cats, birds, whatever needs
			it.
		</p>
		<div class="cta">
			<a class="fill" href="/volunteer">find somewhere to go</a>
			<a class="line" href={hoursForm} target="_blank" rel="noreferrer">log your hours</a>
		</div>
	</div>

	<div class="art">
		<img class="graphic" src="/photos/critters.png" alt="illustration of a vulture, a dog, a rabbit and a bird" />
		<figure class="snap a">
			<img src="/photos/p16.jpg" alt="" />
		</figure>
		<figure class="snap b">
			<img src="/photos/p10.jpg" alt="" />
		</figure>
	</div>
</section>

<div class="strip">
	<div class="track">
		{#each { length: 3 } as _}
			<span>rabbits</span><i>·</i><span>shelter dogs</span><i>·</i><span>cats</span><i>·</i><span
				>foster</span
			><i>·</i><span>adoption drives</span><i>·</i><span>bird sanctuaries</span><i>·</i>
		{/each}
	</div>
</div>

<section class="wrap two">
	<div>
		<h2>room 72, mondays at brunch</h2>
		<p class="lede">
			come by. no sign up, no dues, nothing to bring. we go over what is open that week and who is
			driving.
		</p>
	</div>
	<div class="links">
		<a href="/about">who runs this</a>
		<a href="/photos">what it looks like</a>
		<a href="/news">newsletters</a>
	</div>
</section>

<style>
	.hero {
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: 3rem;
		align-items: center;
		padding-block: clamp(3rem, 9vw, 7rem) clamp(3rem, 7vw, 5.5rem);
	}

	h1 {
		font-size: clamp(3.4rem, 9.5vw, 7.2rem);
		margin: 0.4rem 0 1.5rem;
	}

	h1 em {
		font-style: italic;
		font-variation-settings: 'SOFT' 100, 'WONK' 1;
		color: var(--plum);
	}

	.amp {
		font-family: var(--display);
		font-style: italic;
		font-weight: 300;
		color: var(--lav);
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.85rem;
		margin-top: 1.8rem;
	}

	.cta a {
		text-decoration: none;
		font-size: 0.95rem;
		padding: 0.7rem 1.5rem;
		border-radius: 999px;
		border: 1.5px solid var(--plum);
		transition: transform 0.18s, background 0.18s, color 0.18s;
	}

	.cta a:hover {
		transform: translateY(-2px) rotate(-1deg);
	}

	.cta .fill {
		background: var(--plum);
		color: var(--paper-warm);
	}

	.cta .line:hover {
		background: var(--lav-pale);
	}

	.art {
		position: relative;
		aspect-ratio: 1;
	}

	.graphic {
		width: 90%;
		margin-inline: auto;
		transform: rotate(-3deg);
	}

	.snap {
		position: absolute;
		margin: 0;
		width: 42%;
		padding: 0.5rem 0.5rem 1.6rem;
		background: var(--paper-warm);
		box-shadow: 0 12px 30px -14px rgba(40, 20, 55, 0.45);
	}

	.snap img {
		width: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}

	.snap.a {
		left: -6%;
		bottom: 4%;
		transform: rotate(-7deg);
	}

	.snap.b {
		right: -6%;
		top: 8%;
		width: 32%;
		transform: rotate(6deg);
	}

	.snap.b img {
		aspect-ratio: 3 / 4;
	}

	.strip {
		border-block: 1px solid var(--rule);
		overflow: hidden;
		padding-block: 0.9rem;
		background: var(--paper-warm);
	}

	.track {
		display: flex;
		gap: 1.4rem;
		width: max-content;
		white-space: nowrap;
		font-family: var(--display);
		font-size: 1.15rem;
		font-variation-settings: 'SOFT' 90, 'WONK' 1;
		animation: slide 42s linear infinite;
	}

	.track i {
		color: var(--lav);
		font-style: normal;
	}

	@keyframes slide {
		to {
			transform: translateX(-33.333%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.track {
			animation: none;
		}
	}

	.two {
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 3rem;
		padding-block: clamp(3.5rem, 8vw, 6rem);
		align-items: start;
	}

	.two h2 {
		font-size: clamp(2rem, 4vw, 3rem);
		margin-bottom: 1rem;
	}

	.links {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		font-family: var(--display);
		font-size: 1.5rem;
		font-variation-settings: 'SOFT' 90, 'WONK' 1;
	}

	.links a {
		text-decoration: none;
		border-bottom: 1px solid var(--rule);
		padding-block: 0.6rem;
		transition: color 0.2s, padding-left 0.2s;
	}

	.links a:hover {
		color: var(--plum);
		padding-left: 0.5rem;
	}

	@media (max-width: 860px) {
		.hero,
		.two {
			grid-template-columns: 1fr;
		}

		.art {
			max-width: 26rem;
			margin-inline: auto;
		}
	}
</style>
