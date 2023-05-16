<script>
	import Seperator from '$lib/util/Seperator.svelte';
	import TimeLine from '$lib/util/TimeLine.svelte';
</script>

<section id="education" class=" font-mono py-10">
	<div class="max-w-6xl mx-auto max-lg:mx-5">
		<h3 class=" text-fuchsia-600 text-2xl font-semibold">About</h3>
		<h2 class=" font-bold text-3xl">Education</h2>
	</div>
	<div class=" max-w-6xl pt-10">
		<div class="grid grid-cols-12">
			<TimeLine
				title="Computer Science and Engineering"
				description="From Gujarat Technical University (GTU)"
				year="2024"
				color="text-fuchsia-600"
			/>
			<TimeLine
				title="Higher Secondary Education (Science)"
				description="Studied from Shree Narayan Vidhayalaya, Vadodara"
				year="2020"
				color="text-fuchsia-600"
			/>
			<TimeLine
				title=" Secondary Education"
				description="Studied from Shashi Dhan Day School, Dahod"
				year="2018"
				color="text-fuchsia-600"
			/>
		</div>
	</div>
</section>

<Seperator color=" border-fuchsia-600" />
