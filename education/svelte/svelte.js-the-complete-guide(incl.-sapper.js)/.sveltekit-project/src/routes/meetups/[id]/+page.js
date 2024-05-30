import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    const meetupId = params.id;

    return fetch(`https://svelte-project-5e789-default-rtdb.firebaseio.com/meetups/${meetupId}.json`)
        .then((res) => {
            if (!res.ok) {
                error(response.status, {
					message: 'Fetching meetups failed, please try again later!'
				});
            }
            return res.json();
        })
        .then((meetupData) => {
            return { loadedMeetup: {...meetupData, id: meetupId } }
        })
        .catch(() => {
            error(500, {
				message: 'Could not fetch meetups'
			});
        });
}
