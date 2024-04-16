<script context="module">
    let deactivateNode;
</script>

<script>
    export let member;

    let isActive;

    function deactivate() {
        isActive = false;
    }

    function activate() {
        if (deactivateNode) {
            deactivateNode();
        }
        isActive = true;
        deactivateNode = deactivate;
    }
</script>

<style>
    .active {
        color: red;
    }
</style>

<h1 on:click={activate} class:active={isActive}>{member.name}</h1>
{#if member.isParent}
    <ul>
        {#each member.children as child}
            <li>
                <svelte:self member={child} />
            </li>
        {/each}
    </ul>
{/if}
