<script>
	import Seperator from '$lib/util/Seperator.svelte';
	import TimeLine from '$lib/util/TimeLine.svelte';
</script>

<section class=" font-mono py-10">
	<div class="max-w-6xl mx-auto max-lg:mx-5">
		<h3 class=" text-purple-800 text-2xl font-semibold">Work</h3>
		<h2 class=" font-bold text-3xl">Experience</h2>
	</div>
	<div class=" max-w-6xl pt-10 flex">
		<div class="grid grid-cols-12">
			<TimeLine
				title="SSIP Hackathon (Finalist)"
				description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti commodi, modi itaque autem dignissimos, possimus tempora asperiores assumenda placeat sapiente repellat reiciendis reprehenderit labore eos aspernatur quis nisi dolorum?"
				year="2023"
			/>
			<TimeLine
				title="Stacknyu (Co-Founder)"
				description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti commodi, modi itaque autem dignissimos, possimus tempora asperiores assumenda placeat sapiente repellat reiciendis reprehenderit labore eos aspernatur quis nisi dolorum?"
				year="2021"
			/>
			<TimeLine
				title="Freelancing"
				description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deleniti commodi, modi itaque autem dignissimos, possimus tempora asperiores assumenda placeat sapiente repellat reiciendis reprehenderit labore eos aspernatur quis nisi dolorum?"
				year="2020"
			/>
		</div>
	</div>
</section>

<Seperator color=" border-red-700" />
