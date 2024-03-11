<script>
    export let courseGoal = 'My course goal';

    $: shouldHighlight = courseGoal.includes('!');
</script>

<style>
    .highlight {
        color: #f00
    }
</style>

<h1 class:highlight={shouldHighlight}>{courseGoal}</h1>
  