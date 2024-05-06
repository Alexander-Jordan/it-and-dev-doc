import posts from './data.js';

/** @type {import('./$types').LayoutLoad} */
export function load() {
	return {
        segment: 'blog',
		posts: posts,
	};
}
