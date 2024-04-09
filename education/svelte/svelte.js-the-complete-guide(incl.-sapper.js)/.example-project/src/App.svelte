<script>
    let hobbies = [];
    let hobbyInput;

    function addHobby() {
        hobbies = [...hobbies, hobbyInput.value];

        fetch(
            'https://svelte-project-5e789-default-rtdb.firebaseio.com/hobbies.json',
            {
                method: 'POST',
                body: JSON.stringify(hobbies),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            if (!response.ok) {
                throw new Error('Failed');
            }
        }).catch(error => {
            console.log(error)
        });
    }
</script>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={hobbyInput}>
<button on:click={addHobby}>Add Hobby</button>

<ul>
    {#each hobbies as hobby}
        <li>{hobby}</li>
    {/each}
</ul>
