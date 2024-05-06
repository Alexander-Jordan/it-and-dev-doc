import { error } from '@sveltejs/kit';
import posts from '../data.js';

/** @type {import('./$types').LayoutLoad} */
export async function load({ params }) {
    const post = posts.find((post) => post.slug === params.slug);

    if (!post) throw error(404);

	return {
        segment: 'blog',
		post: post,
	};
}