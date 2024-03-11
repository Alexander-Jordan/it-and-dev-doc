<script>
	let password = '';
	let passwords = [];

	$: passwordTooShort = password.trim().length < 5;
	$: passwordTooLong = password.trim().length > 10;

	function addPassword() {
		if (passwordTooShort || passwordTooLong) {
			return;
		}

		passwords = [
			...passwords,
			password
		]
	}

	function removePassword(index) {
		passwords = passwords.filter((pwd, i) => i !== index);
	}
</script>

<h1>Assignment</h1>

<p>Solve these tasks.</p>

<ol>
	<li>Add a password input field and save the user input in a variable.</li>
	<li>Output "Too short" if the password is shorter than 5 characters and "Too long" if it's longer than 10.</li>
	<li>Output the password in a paragraph tag if it's between these boundaries.</li>
	<li>Add a button and let the user add the passwords to an array.</li>
	<li>Output the array values (= passwords) in a unordered list (ul tag).</li>
	<li>Bonus: If a password is clicked, remove it from the list.</li>
</ol>

<input type="password" bind:value={password}>
<button on:click={addPassword}>Add Password</button>
{#if passwordTooShort}
	<p>Password: Too short</p>
{:else if passwordTooLong}
	<p>Password: Too long</p>
{:else}
	<p>Password: {password}</p>
{/if}

<ul>
	{#each passwords as pwd, i}
		<li on:click={removePassword.bind(this, i)}>{pwd}</li>
	{/each}
</ul>
