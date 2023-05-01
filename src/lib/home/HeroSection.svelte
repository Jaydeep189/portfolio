<script>
	import Me from '../../assets/photos/me.jpg';
</script>

<section class=" max-w-5xl mx-auto py-6 md:py-16 lg:py-20">
	<div class=" grid grid-cols-1 md:grid-cols-2">
		<div class=" max-sm:flex max-sm:justify-center">
			<div class="group w-fit max-w-[200px] md:max-w-sm lg:max-w-none mx-5 lg:mx-auto">
				<div
					class="rounded-full group-hover:bg-purple-800/90 transition-all duration-300 p-2 md:p-4 bg-[#C8C8C8] w-fit"
				>
					<div class=" rounded-full p-2 md:p-4 bg-[#D9D9D9] w-fit">
						<img
							src={Me}
							class="rounded-full group-hover:scale-110 transition-transform duration-300 cursor-pointer"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
		<div class=" flex items-center max-sm:mx-5">
			<div class="font-mono space-y-4 max-sm:pt-4">
				<div class=" space-y-1">
					<h3 class=" max-sm:text-center md:text-base lg:text-lg">Hi, I am Jaydeep</h3>
					<h2 class=" text-xl max-sm:text-center md:text-2xl lg:text-4xl font-semibold">
						I build Software for Fun, Work and Community.
					</h2>
				</div>
				<p class="max-sm:text-center text-xs lg:text-base w-full sm:w-10/12 lg:w-full">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sit illum magni
					repudiandae et temporibus atque labore, quasi a modi reiciendis ex dolore pariatur
					tempora, vel ducimus nostrum, quis libero!
				</p>
				<div class=" flex justify-center md:justify-start gap-5 pt-2">
					<a
						href="/#work"
						class=" px-4 py-2 bg-teal-700 hover:rotate-6 transition-all duration-300 text-white text-base lg:text-lg rounded-md"
						>My Work</a
					>
					<a
						href="/#contact"
						class=" px-4 py-2 hover:-rotate-6 transition-all duration-300 bg-purple-800 text-white text-base lg:text-lg rounded-md"
						>Contact Me</a
					>
				</div>
			</div>
		</div>
	</div>
</section>
