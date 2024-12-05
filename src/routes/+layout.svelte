<script>
	import '../app.css';
	import { Header, Footer } from '$components';

	let { children } = $props();
</script>

<main class="flex size-full max-w-[780px] flex-col">
	<Header />

	<main class="my-4 flex w-full flex-grow flex-col items-center justify-start">
		{@render children()}
	</main>

	<Footer />
</main>
