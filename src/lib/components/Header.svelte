<script lang="ts">
	import { ThemeToggle } from '$components';
</script>

<header>
	<nav class=" flex h-20 items-center justify-between px-4">
		<div class="h-14 w-24 border border-gray-400 dark:border-gray-700"></div>
		<ul class=" flex items-center justify-center gap-4">
			<li>
				<a href="/">Home</a>
			</li>

			<li>
				<a href="/about">About</a>
			</li>

			<li>
				<a href="/blog">Blog</a>
			</li>

			<li>
				<ThemeToggle />
			</li>
		</ul>
	</nav>
</header>
