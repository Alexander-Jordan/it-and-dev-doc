<script>
    /** @type {import('./$types').PageData} */
	export let data;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each data.posts as post}
		<li><a href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
</ul>
