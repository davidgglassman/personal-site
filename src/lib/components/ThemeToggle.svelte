<script lang="ts">
	import { browser } from '$app/environment';
	import { Toggle } from '$components/ui/toggle';
	import SunIcon from '~icons/solar/sun-2-bold';
	import MoonIcon from '~icons/solar/moon-line-duotone';

	type Theme = 'system' | 'dark' | 'light';
	let theme: Theme = 'system';

	let toggleTheme = () => {};

	if (browser) {
		theme = (localStorage.getItem('theme') as Theme | null) ?? 'system';

		const prefersDark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (theme === 'system') theme = prefersDark ? 'dark' : 'light';

		function setTheme(newTheme: Theme) {
			theme = newTheme;

			if (newTheme === 'dark') document.documentElement.classList.add('dark');
			else document.documentElement.classList.remove('dark');

			localStorage.setItem('theme', newTheme);
		}

		toggleTheme = () => {
			setTheme(theme === 'dark' ? 'light' : 'dark');
		};

		setTheme(theme);
	}
</script>

<Toggle onclick={toggleTheme}>
	{#if theme === 'dark'}
		<SunIcon class="size-6 text-yellow-500" />
	{:else}
		<MoonIcon class="size-6 text-blue-500" />
	{/if}
</Toggle>
