<script>
	import Header from '../lib/components/UI/Header.svelte'
</script>

<style>
	main {
        margin-top: 5rem;
    }
</style>

<Header />

<main>
	<slot></slot>
</main>
