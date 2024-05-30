import { error } from '@sveltejs/kit';

/** @type {import('./$types').LayoutLoad} */
export function load() {
	return fetch('https://svelte-project-5e789-default-rtdb.firebaseio.com/meetups.json')
		.then(response => {
			if (!response.ok) {
				error(response.status, {
					message: 'Fetching meetups failed, please try again later!'
				});
			}
			return response.json();
		})
		.then(data => {
			const loadedMeetups = [];
			for (const key in data) {
				loadedMeetups.push({
					...data[key],
					id: key
				});
			}
			return { loadedMeetups: loadedMeetups.reverse() }
		})
		.catch(() => {
			error(500, {
				message: 'Could not fetch meetups'
			});
		});
}
