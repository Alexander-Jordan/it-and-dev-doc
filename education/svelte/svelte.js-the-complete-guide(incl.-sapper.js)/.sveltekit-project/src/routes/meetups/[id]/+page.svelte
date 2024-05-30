<script>
    import Button from '../../../lib/components/UI/Button.svelte';

    export let data;
</script>

<style>
    section {
        margin-top: 4rem;
    }

    .image {
        width: 100%;
        height: 25rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .image {
        background: #e7e7e7;
    }

    .content {
        text-align: center;
        width: 80%;
        margin: auto;
    }

    h1 {
        font-size: 2rem;
        font-family: 'Roboto Slab', sans-serif;
        margin: 0.5rem 0;
    }

    h2 {
        font-size: 1.25rem;
        color: #6b6b6b;
    }

    p {
        font-size: 1.5rem;
    }
</style>

<section>
    <div class="image">
        <img src={data.loadedMeetup.imageUrl} alt={data.loadedMeetup.title}>
    </div>
    <div class="content">
        <h1>{data.loadedMeetup.title}</h1>
        <h2>{data.loadedMeetup.subtitle} - {data.loadedMeetup.address}</h2>
        <p>{data.loadedMeetup.description}</p>
        <Button href="mailto:{data.loadedMeetup.contactEmail}">Contact</Button>
        <Button
            mode="outline"
            href="/"
        >
            Close
        </Button>
    </div>
</section>
