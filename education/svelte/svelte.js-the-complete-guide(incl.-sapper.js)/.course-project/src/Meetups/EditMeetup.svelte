<script>
    import meetups from './meetups-store.js';
    import { createEventDispatcher } from "svelte";
    import TextInput from "../UI/TextInput.svelte";
    import Button from "../UI/Button.svelte";
    import Modal from "../UI/Modal.svelte";
    import { isEmpty, isValidEmail } from '../helpers/validation'

    export let id = null;

    let title = '';
    let subtitle = '';
    let address = '';
    let email = '';
    let description = '';
    let imageUrl = '';

    if (id) {
        const unsubscribe = meetups.subscribe(items => {
            const selectedMeetup = items.find(i => i.id === id);
            title = selectedMeetup.title;
            subtitle = selectedMeetup.subtitle;
            address = selectedMeetup.address;
            email = selectedMeetup.contactEmail;
            description = selectedMeetup.description;
            imageUrl = selectedMeetup.imageUrl;
        })

        unsubscribe();
    }

    const dispatch = createEventDispatcher();

    $: titleValid = !isEmpty(title);
    $: subtitleValid = !isEmpty(subtitle);
    $: addressValid = !isEmpty(address);
    $: emailValid = isValidEmail(email);
    $: descriptionValid = !isEmpty(description);
    $: imageUrlValid = !isEmpty(imageUrl);
    $: formIsValid = titleValid
        && subtitleValid
        && addressValid
        && emailValid
        && descriptionValid
        && imageUrlValid;

    function cancelForm() {
        dispatch('cancel');
    }

    function submitForm() {
        const meetupData = {
            title: title,
            subtitle: subtitle,
            description: description,
            imageUrl: imageUrl,
            address: address,
            contactEmail: email
        }

        if (id) {
            meetups.updateMeetup(id, meetupData)
        } else {
            fetch(
                'https://svelte-project-5e789-default-rtdb.firebaseio.com/meetups.json',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        ...meetupData,
                        isFavorite: false
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
                .then(response => {
                    if (!response.ok) {
                        throw new Error('An error occured, please try again!');
                    }
                    return response.json();
                })
                .then(data => {
                    meetups.addMeetup({
                        ...meetupData,
                        isFavorite: false,
                        id: data.name
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
        dispatch('save')
    }

    function deleteMeetup() {
        meetups.removeMeetup(id)
        dispatch('save');
    }
</script>

<style>
    form {
        width: 100%;
    }
</style>

<Modal title="Edit Meetup Data" on:cancel>
    <form on:submit|preventDefault={submitForm}>
        <TextInput
            id="title"
            label="Title"
            valid={titleValid}
            validityMessage="Please enter a valid title."
            value={title}
            on:input={(event) => title = event.target.value}
        />
        <TextInput
            id="subtitle"
            label="Subtitle"
            valid={subtitleValid}
            validityMessage="Please enter a valid subtitle."
            value={subtitle}
            on:input={(event) => subtitle = event.target.value}
        />
        <TextInput
            id="address"
            label="Address"
            valid={addressValid}
            validityMessage="Please enter a valid address."
            value={address}
            on:input={(event) => address = event.target.value}
        />
        <TextInput
            id="imageUrl"
            label="Image URL"
            valid={imageUrlValid}
            validityMessage="Please enter a valid image URL."
            value={imageUrl}
            on:input={(event) => imageUrl = event.target.value}
        />
        <TextInput
            id="email"
            label="E-Mail"
            inputType="email"
            valid={emailValid}
            validityMessage="Please enter a valid email address."
            value={email}
            on:input={(event) => email = event.target.value}
        />
        <TextInput
            id="description"
            label="Description"
            controlType="textarea"
            valid={descriptionValid}
            validityMessage="Please enter a valid description."
            bind:value={description}
        />
    </form>
    <div slot="footer">
        <Button mode="outline" on:click={cancelForm}>Cancel</Button>
        <Button on:click={submitForm} disabled={!formIsValid}>Submit</Button>
        {#if id}
            <Button on:click={deleteMeetup}>
                Delete
            </Button>
        {/if}
    </div>
</Modal>
