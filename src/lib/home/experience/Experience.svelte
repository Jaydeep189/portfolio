<script>
	import Seperator from '$lib/util/Seperator.svelte';
	import TimeLine from '$lib/util/TimeLine.svelte';
</script>

<section id="experience" class=" font-mono py-10">
	<div class="max-w-6xl mx-auto max-lg:mx-5">
		<h3 class=" text-purple-800 text-2xl font-semibold">Work</h3>
		<h2 class=" font-bold text-3xl">Experience</h2>
	</div>
	<div class=" max-w-6xl pt-10 flex">
		<div class="grid grid-cols-12">
			<TimeLine
				title="SSIP Hackathon (Finalist)"
				description="We were selected as one of the top two teams for the problem statement given by the Government of India in the SSIP Hackathon."
				year="2023"
			/>
			<TimeLine
				title="Stacknyu (Co-Founder)"
				description="I started this company with a few of my friends back in 2021 (NULLPRENEURS LLP). I have learned many things from being a co-founder in the company, such as learning how to do business, how to manage a team, and how to work with clients. "
				year="2021"
			/>
			<TimeLine
				title="Freelancing"
				description="I started doing freelancing on Fiverr during the pandemic."
				year="2020"
			/>
		</div>
	</div>
</section>

<Seperator color=" border-fuchsia-600" />
