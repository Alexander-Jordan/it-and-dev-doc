<script>
    import { createEventDispatcher } from "svelte";
    import TextInput from "../UI/TextInput.svelte";
    import Button from "../UI/Button.svelte";
    import Modal from "../UI/Modal.svelte";
    import { isEmpty } from '../helpers/validation'

    let title = '';
    let titleValid = false;
    let subtitle = '';
    let address = '';
    let email = '';
    let description = '';
    let imageUrl = '';

    const dispatch = createEventDispatcher();

    $: titleValid = !isEmpty(title);

    function cancelForm() {
        dispatch('cancel');
    }

    function submitForm() {
        dispatch('save', {
            title: title,
            subtitle: subtitle,
            description: description,
            imageUrl: imageUrl,
            address: address,
            contactEmail: email
        })
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
            value={subtitle}
            on:input={(event) => subtitle = event.target.value}
        />
        <TextInput
            id="address"
            label="Address"
            value={address}
            on:input={(event) => address = event.target.value}
        />
        <TextInput
            id="imageUrl"
            label="Image URL"
            value={imageUrl}
            on:input={(event) => imageUrl = event.target.value}
        />
        <TextInput
            id="email"
            label="E-Mail"
            inputType="email"
            value={email}
            on:input={(event) => email = event.target.value}
        />
        <TextInput
            id="description"
            label="Description"
            controlType="textarea"
            value={description}
            on:input={(event) => description = event.target.value}
        />
    </form>
    <div slot="footer">
        <Button mode="outline" on:click={cancelForm}>Cancel</Button>
        <Button on:click={submitForm}>Submit</Button>
    </div>
</Modal>
