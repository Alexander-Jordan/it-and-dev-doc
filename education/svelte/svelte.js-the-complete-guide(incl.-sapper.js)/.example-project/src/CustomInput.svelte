<script>
    export let val;
    export let type = 'text';

    function setVal(event) {
        val = event.target.value;
    }
</script>

<input type={type} value={val} on:input={setVal}>