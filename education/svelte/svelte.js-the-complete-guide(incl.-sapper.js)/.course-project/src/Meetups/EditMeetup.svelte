<script>
    import meetups from './meetups-store.js';
    import { createEventDispatcher } from "svelte";
    import TextInput from "../UI/TextInput.svelte";
    import Button from "../UI/Button.svelte";
    import Modal from "../UI/Modal.svelte";
    import { isEmpty, isValidEmail } from '../helpers/validation'

    let title = '';
    let subtitle = '';
    let address = '';
    let email = '';
    let description = '';
    let imageUrl = '';

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
        meetups.addMeetup({
            title: title,
            subtitle: subtitle,
            description: description,
            imageUrl: imageUrl,
            address: address,
            contactEmail: email
        });
        dispatch('save')
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
    </div>
</Modal>
