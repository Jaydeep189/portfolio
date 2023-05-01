<script>
	import SkillCard from './SkillCard.svelte';
	import Seperator from '$lib/util/Seperator.svelte';
</script>

<section class="  max-w-6xl mx-auto font-mono py-10 max-lg:mx-5">
	<h3 class=" text-teal-700 text-2xl font-semibold">Skills</h3>
	<h2 class=" font-bold text-3xl">I can write code in</h2>
	<div class="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-5 py-16">
		<SkillCard name="Typescript" link="https://kit.svelte.dev/" img="/languages/typescript.svg" />
		<SkillCard name="Python" link="https://nodejs.org/" img="/languages/python.svg" />
		<SkillCard name="Dart" link="https://firebase.google.com/" img="/languages/dart.svg" />
		<SkillCard name="HTML5" link="https://tailwindcss.com/" img="/languages/html.svg" />
		<SkillCard name="CSS3" link="https://nextjs.org" img="/languages/css.svg" />
		<SkillCard name="Javascript" link="https://nextjs.org" img="/languages/js.svg" />
	</div>
</section>

<Seperator color=" border-purple-800" />
