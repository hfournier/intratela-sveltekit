<script lang="ts">
	import { page } from '$app/stores';
	import { routes } from '$lib/routes';
</script>

<div
	class="container mx-auto flex max-w-screen-lg flex-wrap items-center justify-between px-6 py-3 relative bg-stone-900
         [&>input:checked_~_label>svg>path:first-child]:opacity-0 
         [&>input:checked_~_label>svg>path:last-child]:opacity-100 
         [&>input:checked_~_nav]:opacity-100
         [&>input:checked_~_nav]:translate-y-0"
>
	<div class="flex flex-shrink-0 items-center text-white">
		<a class="m-0 flex flex-col gap-0" href="/">
			<div class="font-cunia text-2xl leading-5 text-primary-600">Intratela</div>
			<div class="font-cunia text-[1.1rem] leading-4 text-secondary-500">Technologies</div>
			<span class="sr-only">Intratela Technologies</span>
		</a>
	</div>
	<input id="menuBtn" type="checkbox" class="hidden" />
	<label class="text-stone-200 hover:text-white focus:outline-none lg:hidden" for="menuBtn">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
			aria-label="Menu toggle button"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M4 6h16M4 12h16M4 18h16"
				class="transition-opacity duration-300 ease-in"
			/>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6 18L18 6M6 6l12 12"
				class="opacity-0 transition-opacity duration-300 ease-in"
			/>
		</svg>
	</label>
	<nav
		aria-label="Main Navigation"
		class="absolute top-[4.5rem] right-3 -z-10 flex -translate-y-[310px] flex-col gap-x-8 gap-y-4 py-4 lg:py-0 bg-stone-900/90 opacity-0 transition-all duration-700 ease-in-out lg:static lg:flex lg:w-auto lg:translate-y-0 lg:flex-row lg:items-center lg:opacity-100 lg:z-0"
	>
		{#each routes as route}
			{#if route.title !== 'Home'}
				<a
					href={route.link}
					class="rounded px-4 lg:px-0 py-1 text-right text-lg font-semibold text-stone-200 hover:bg-stone-800 hover:text-primary-500 focus:outline-none lg:mt-0 lg:hover:bg-transparent [&[aria-current='page']]:text-primary-400"
					aria-current={$page.url.pathname === route.link ? 'page' : null}
				>
					{route.title}
				</a>
			{/if}
		{/each}
	</nav>
</div>
