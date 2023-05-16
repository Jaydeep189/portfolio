<script>
	import SkillCard from './SkillCard.svelte';
	import Seperator from '$lib/util/Seperator.svelte';
</script>

<section id="skills" class=" max-w-6xl mx-auto font-mono py-10 max-lg:mx-5">
	<h3 class=" text-teal-700 text-2xl font-semibold">Skills</h3>
	<h2 class=" font-bold text-3xl">I like building things with</h2>
	<div class="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5 py-16">
		<SkillCard name="Sveltekit" link="https://kit.svelte.dev/" img="/frameworks/Svelte.svg" />
		<SkillCard name="Node.js" link="https://nodejs.org/" img="/frameworks/nodejs.webp" />
		<SkillCard
			name="Firebase"
			height=""
			link="https://firebase.google.com/"
			img="/frameworks/Firebase.svg"
		/>
		<SkillCard
			name="Tailwindcss"
			link="https://tailwindcss.com/"
			img="/frameworks/Tailwindcss.svg"
		/>
		<SkillCard name="Next.js" link="https://nextjs.org" img="/frameworks/Nextjs.webp" />
		<SkillCard name="Django" link="https://www.djangoproject.com/" img="/frameworks/Django.svg" />
		<SkillCard name="Flutter" link="https://flutter.dev/" img="/frameworks/Flutter.svg" />
		<SkillCard name="Astro" link="https://astro.build/" img="/frameworks/Astro.svg" />
	</div>
</section>

<Seperator />
