<script>
  import MeetupItem from "./Meetups/MeetupItem.svelte";
import Header from "./UI/Header.svelte";

  const meetups = [
    {
        id: 'm1',
        title: 'Coding Bootcamp',
        subtitle: 'Learn to code in 2 hours',
        description: 'In this meetup, we will have some experts that teach you how to code!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/640px-JavaScript_code.png',
        address: '27th Nerd Road, 32523 New York',
        contactEmail: 'code@test.com'
    },
    {
        id: 'm2',
        title: 'Swim Together',
        subtitle: 'Let\'s go for some swimming',
        description: 'We will simply swim a bit!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Polar_bear_swimming.jpg/640px-Polar_bear_swimming.jpg',
        address: '2nd Beach Avenue, 13231 New Zealand',
        contactEmail: 'swim@test.com'
    }
  ]
</script>

<style>
    #meetups {
        margin-top: 5rem;
    }
</style>

<Header />

<section id="meetups">
    {#each meetups as meetup}
        <MeetupItem />
    {/each}
</section>
