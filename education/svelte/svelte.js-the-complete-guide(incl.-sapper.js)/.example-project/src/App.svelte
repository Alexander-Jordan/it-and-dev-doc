<script>
    let y;
    let currentTitle = 'My app';

    $: console.log(y);

    function switchTitle() {
        currentTitle = 'A New Title';
    }
</script>

<style>
    div {
        height: 3000px;
    }
</style>

<svelte:window bind:scrollY={y} />
<svelte:body />
<svelte:head>
    <title>{currentTitle}</title>
</svelte:head>

<button on:click={switchTitle}>Switch Title</button>

<div></div>
