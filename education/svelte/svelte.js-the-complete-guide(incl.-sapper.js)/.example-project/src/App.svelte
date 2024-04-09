<script>
    let hobbies = [];
    let hobbyInput;
    let isLoading = false;

    fetch('https://svelte-project-5e789-default-rtdb.firebaseio.com/hobbies.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed');
            }
            return response.json();
        })
        .then(data => {
            hobbies = Object.values(data);
        })
        .catch(error => {
            console.log(error);
        });

    function addHobby() {
        hobbies = [...hobbies, hobbyInput.value];

        isLoading = true;
        fetch(
            'https://svelte-project-5e789-default-rtdb.firebaseio.com/hobbies.json',
            {
                method: 'POST',
                body: JSON.stringify(hobbyInput.value),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(response => {
            isLoading = false;
            if (!response.ok) {
                throw new Error('Failed');
            }
            alert('Saved data!');
        }).catch(error => {
            isLoading = false;
            console.log(error)
        });
    }
</script>

<label for="hobby">Hobby</label>
<input type="text" id="hobby" bind:this={hobbyInput}>
<button on:click={addHobby}>Add Hobby</button>

{#if isLoading}
    <p>Loading...</p>
{:else}
    <ul>
        {#each hobbies as hobby}
            <li>{hobby}</li>
        {/each}
    </ul>
{/if}

