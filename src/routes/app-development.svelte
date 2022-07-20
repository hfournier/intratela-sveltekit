<script lang="ts">
	import Page from '$lib/Page.svelte';
	import item from '../data/app-development.json';
	import { site_page } from '../stores/site-pages';

	$site_page = item;
</script>

<Page />
