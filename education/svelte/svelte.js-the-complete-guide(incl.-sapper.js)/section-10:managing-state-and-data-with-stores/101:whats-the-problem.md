# 101. What's the problem?

An example of us having an application which handles `Products`, which can be picked by a customer, and a `Cart`, which will reflect what items the customer picked:

**Product.svelte**
```svelte
<script>
  import Button from "../UI/Button.svelte";

  export let id;
  export let title;
  export let price;
  export let description;

  function addToCart() {
    // Now what?
    console.log(id);
  }
</script>

<style>
  .product {
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
  }

  h1 {
    font-size: 1.25rem;
    font-family: "Roboto Slab", serif;
    margin: 0;
  }

  h2 {
    font-size: 1rem;
    margin: 0;
    color: #494949;
  }

  p {
    margin: 0;
  }
</style>

<div class="product">
  <div>
    <h1>{title}</h1>
    <h2>{price}</h2>
    <p>{description}</p>
  </div>
  <div>
    <Button on:click={addToCart}>Add to Cart</Button>
  </div>
</div>
```

**Products.svelte**
```svelte
<script>
  import Product from "../Products/Product.svelte";

  let products = [
    {
      id: "p1",
      title: "A Book",
      price: 9.99,
      description: "A great book!"
    },
    {
      id: "p2",
      title: "A Carpet",
      price: 99.99,
      description: "Red and green."
    }
  ];
</script>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
  }
</style>

<section>
  <h1>Products</h1>
  {#each products as product (product.id)}
    <Product
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description} />
  {/each}
</section>
```

**CartItem.svelte**
```svelte
<script>
  import Button from "../UI/Button.svelte";

  export let title;
  export let price;
  export let id;

  let showDescription = false;

  function displayDescription() {
    showDescription = !showDescription;
  }

  function removeFromCart() {
    // ...
    console.log("Removing...");
  }
</script>

<style>
  li {
    margin: 1rem 0;
    border-radius: 5px;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }

  h1,
  h2 {
    font-size: 1rem;
    margin: 0;
  }

  h2 {
    color: #494949;
    margin-bottom: 1rem;
  }
</style>

<li>
  <h1>{title}</h1>
  <h2>{price}</h2>
  <Button mode="outline" on:click={displayDescription}>
    {showDescription ? 'Hide Description' : 'Show Description'}
  </Button>
  <Button on:click={removeFromCart}>Remove from Cart</Button>
  {#if showDescription}
    <p>Not available :(</p>
  {/if}
</li>
```

**Cart.svelte**
```svelte
<script>
  import CartItem from "./CartItem.svelte";

  export let items = [
    {
      id: "p1",
      title: "Test",
      price: 9.99
    },
    {
      id: "p2",
      title: "Test",
      price: 9.99
    }
  ];
</script>

<style>
  section {
    width: 30rem;
    max-width: 90%;
    margin: 2rem auto;
    border-bottom: 2px solid #ccc;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>

<section>
  <h1>Cart</h1>
  <ul>
    {#each items as item (item.id)}
      <CartItem id={item.id} title={item.title} price={item.price} />
    {:else}
      <p>No items in cart yet!</p>
    {/each}
  </ul>
</section>
```

**App.svelte**
```svelte
<script>
  import Cart from "./Cart/Cart.svelte";
  import Products from "./Products/Products.svelte";
</script>

<Cart />
<Products />
```

How would we manage the data?

We could pass it around the product and cart components, as we have been doing previously.
But the larger your project grows, and the more independent different components get, it's not really a great idea to pass so much data around all the time.

Instead, Svelte solves this problem with `stores`.
