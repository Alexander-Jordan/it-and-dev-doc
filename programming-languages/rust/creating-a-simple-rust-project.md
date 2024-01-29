# Creating a simple Rust project

This will be just a simple rewrite of the first chapter of the Rust introductory book, which shows how to make a `Hello World` program in Rust.

There are two methods to create a Rust project: with or without the use of `Cargo` (Rust's system & package manager).
Cargo is the recommended method since it is used to handle dependencies and manage the project, so it's good to start a project this way.

To start of, regardless of method, create a dedicated Rust folder for all Rust projects in the home directory.

```bash
~ $ mkdir rust
~ $ cd rust
```

## With Cargo (recommended)

### Quick section:

* `cargo new <project-name>` (New project)
* `cargo check` (Validate build)
* `cargo run` (Build & run)
* `cargo build` (Build for dev)
* `cargo build --release` (Optimize build for release/prod)
* `./target/<debug or release>/program_name` (Run)
* Builds are stored in the target/debug (for dev) or target/release (for prod) directory.

### Longer section:

Inside the Rust folder, create the first project:

```bash
~ $ cargo new simple-cargo-project
~ $ cd simple-cargo-project
```

Cargo has generated two files and one directory: a `Cargo.toml` file and a src directory with a `main.rs` file inside.

It has also initialized a new Git repository along with a `.gitignore` file.
Git files won’t be generated if you run `cargo new` within an existing Git repository; you can override this behavior by using `cargo new --vcs=git`.

In `Cargo.toml`, the `[package]` header is defining this package and used by Cargo to compile the program.
The `[dependencies]` header lists any dependencies of the project.

Inside `src/main.rs` a main function printing `Hello, World!` has been generated.
Edit the printed text to say `This is a simple Cargo project`:

```rust
fn main() {
    println!("This is a simple Rust project");
}
```
**Build & run**:

Because the default build is a debug build, Cargo puts the binary in a directory named debug.
Build the project & run the program:

```bash
~/rust/simple-cargo-project $ cargo build
...
~/rust/simple-cargo-project $ ./target/debug/simple-cargo-project
```

These two steps can be combined in one command that is used more often:

```
~/rust/simple-cargo-project $ cargo run
```

`cargo check` is used to make sure it compiles but doesn't actually build the program.
This is faster than `cargo build`, so it's good to use `check` when testing the program while developing.

When the program is ready for release on prod, build the program with the `--release` tag:

```
~/rust/simple-cargo-project $ cargo build --release
```

You can now run the optimized program from the `/target/release` folder:

```
~/rust/simple-cargo-project $ ./target/release/simple-cargo-project
```

## Without Cargo

Inside the Rust folder, create the second project folder:

```bash
~ $ mkdir simple-project
~ $ cd simple-project
```

Make a new source file called `main.rs` (files with multiple words are written like `two_words.rs`):

```bash
~/rust $ touch main.rs
```

Insert this code inside the file:

```rust
fn main() {
    println!("This is a simple Rust project");
}
```

Compile & run the program:

```bash
~/rust $ rustc main.rs
~/rust $ ./main
```

## Convert project to use Cargo

If you started a project that doesn’t use Cargo you can convert it to a project that does use Cargo.
Move the project code into the `src` directory and create an appropriate `Cargo.toml` file.