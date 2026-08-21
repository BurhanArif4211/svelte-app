import { readable } from 'svelte/store';

export const certStore = readable([], (set) => {
	let cancelled = false;

	fetch('/data/certs.json')
		.then((res) => {
			if (!res.ok) console.log(`JSON LOAD ${res.status}`);
			return res.json();
		})
		.then((data) => {
			if (!cancelled) set(data);
		})
		.catch((err) => {
			console.error('Failed to load projects:', err);
			if (!cancelled) set([]);
		});

	return () => {
		cancelled = true;
	};
});
