<script lang="ts">
	import { site_page } from '../stores/site-pages';
</script>

<svelte:head>
	<title>{$site_page.title} | Intratela Technologies | Kelowna, BC</title>
	<meta name="description" content={$site_page.description} />
	<meta name="og:title" content="{$site_page.title} | Intratela Technologies | Kelowna, BC" />
	<meta name="og:description" content={$site_page.description} />
</svelte:head>

{#if $site_page}
	<h1 class="heading1">
		{$site_page.title}
	</h1>
	<p class="px-4">{@html $site_page.description}</p>

	{#each $site_page.sections as section}
		<section
			class="mt-32 flex flex-col items-center justify-center gap-4 first:mt-24 last:mb-16 sm:flex-row sm:gap-8 even:sm:flex-row-reverse lg:gap-11 first:lg:mt-32"
		>
			<div class="w-full px-4 sm:w-1/2">{@html section.svg}</div>
			<div class="w-full px-4 text-center sm:w-1/2">
				<h2 class="heading2">{section.heading}</h2>
				<p class="text-justify">{@html section.text}</p>
				{#if section.keywords}
					<div class="flex flex-wrap justify-center gap-x-3 gap-y-2 pt-4 sm:gap-x-2">
						{#each section.keywords as keyword}
							<a
								href={keyword.link}
								target="ref"
								class="pill pill-secondary whitespace-nowrap transition-transform hover:scale-105 hover:shadow-md"
								>{keyword.label}</a
							>
						{/each}
					</div>
				{/if}
			</div>
		</section>
	{/each}
{/if}
