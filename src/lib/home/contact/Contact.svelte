<script>
	import Seperator from '$lib/util/Seperator.svelte';
	import { Mail, MailOpen } from 'lucide-svelte';
</script>

<section id="contact" class=" max-w-2xl mx-auto font-mono py-20">
	<div class="">
		<h1 class=" text-4xl font-bold pb-6 text-center text-teal-800">Get In Touch!</h1>

		<form
			action=""
			class=" grid grid-cols-2 gap-4 p-8 bg-white drop-shadow-lg border-2 border-teal-700 rounded-xl border-dashed"
		>
			<input type="text" class=" active:border-teal-700 form-input rounded-md" placeholder="Name" />
			<input type="email" class=" form-input rounded-md" placeholder="Email" />
			<textarea
				class="form-input rounded-md col-span-2"
				name=""
				id=""
				cols="30"
				rows="10"
				placeholder="Message"
			/>
			<button class=" group col-span-2 flex justify-center py-2">
				<div
					class=" px-6 py-2 flex items-center gap-2 bg-teal-700 transition-all duration-300 text-white text-base lg:text-lg font-bold rounded-md"
				>
					Send

					<MailOpen class=" group-hover:hidden" size={20} />
					<Mail class=" group-hover:block hidden" size={20} />
				</div>
			</button>
		</form>
	</div>
</section>

<Seperator color=" border-teal-700" />
