import { writable } from 'svelte/store';

type Page = {
	title: string;
	description: string;
	sections: {
		heading: string;
		text: string;
		svg: string;
		keywords?: { label: string; link: string }[];
	}[];
};

export const site_page = writable<Page>();
