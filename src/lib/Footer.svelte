<script lang="ts">
	import { page } from '$app/stores';
	import { routes } from '$lib/routes';

	const year = String(new Date().getFullYear());
</script>

<div
	class="container mx-auto flex flex-col p-4 gap-6 max-w-screen-lg items-center justify-center text-sm"
>
	<nav aria-label="Footer Navigation" class="flex gap-6">
		{#each routes as route}
			<a
				href={route.link}
				class="font-medium hover:underline hover:text-primary-500 [&[aria-current='page']]:text-primary-400"
				aria-current={$page.url.pathname === route.link ? 'page' : null}
			>
				{route.title}
			</a>
		{/each}
	</nav>

	&copy; {year} Intratela Technologies
</div>
