<script>
    import { tweened } from 'svelte/motion';
    import { cubicIn } from 'svelte/easing';
    import Spring from './Spring.svelte';

    const progress = tweened(0, {
        delay: 0, // how long before the animation starts
        duration: 700, // duration of the animation in ms (default: 400)
        easing: cubicIn, // easing function (svelte has some built-in)
    });

    setTimeout(() => {
        progress.set(0.5);
    }, 1500);
</script>

<progress value={$progress}></progress>
<Spring />
