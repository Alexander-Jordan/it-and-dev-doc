# Installing Rust:

[Rust's website installation page](rust-lang.org/tools/install)

The recommended way on any Unix-like OS (Linux or Mac) is using a Rust toolchain installer called `rustup` (a shell script).

**Run the installer by running the following command:**
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

**Follow the instructions received at the terminal:**

```
Welcome to Rust!

This will download and install the official compiler for the Rust
programming language, and its package manager, Cargo.

Rustup metadata and toolchains will be installed into the Rustup
home directory, located at:

  /home/brallex/.rustup

This can be modified with the RUSTUP_HOME environment variable.

The Cargo home directory is located at:

  /home/brallex/.cargo

This can be modified with the CARGO_HOME environment variable.

The cargo, rustc, rustup and other commands will be added to
Cargo's bin directory, located at:

  /home/brallex/.cargo/bin

This path will then be added to your PATH environment variable by
modifying the profile files located at:

  /home/brallex/.profile
  /home/brallex/.bashrc

You can uninstall at any time with rustup self uninstall and
these changes will be reverted.

Current installation options:


   default host triple: x86_64-unknown-linux-gnu
     default toolchain: stable (default)
               profile: default
  modify PATH variable: yes

1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
```

**Press enter to proceed with the default installation.**
When the installation is done, it will output this message:

```
Rust is installed now. Great!

To get started you may need to restart your current shell.
This would reload your PATH environment variable to include
Cargo's bin directory ($HOME/.cargo/bin).

To configure your current shell, run:
source "$HOME/.cargo/env"
```

After restarting the terminal, see what rustup can do by typing `rustup` in the terminal:

```
$ rustup
rustup 1.25.1 (bb60b1e89 2022-07-12)
The Rust toolchain installer

USAGE:
    rustup [FLAGS] [+toolchain] <SUBCOMMAND>

FLAGS:
    -v, --verbose    Enable verbose output
    -q, --quiet      Disable progress output
    -h, --help       Prints help information
    -V, --version    Prints version information

ARGS:
    <+toolchain>    release channel (e.g. +stable) or custom toolchain to set override

SUBCOMMANDS:
    show           Show the active and installed toolchains or profiles
    update         Update Rust toolchains and rustup
    check          Check for updates to Rust toolchains and rustup
    default        Set the default toolchain
    toolchain      Modify or query the installed toolchains
    target         Modify a toolchain's supported targets
    component      Modify a toolchain's installed components
    override       Modify directory toolchain overrides
    run            Run a command with an environment configured for a given toolchain
    which          Display which binary will be run for a given command
    doc            Open the documentation for the current toolchain
    man            View the man page for a given command
    self           Modify the rustup installation
    set            Alter rustup settings
    completions    Generate tab-completion scripts for your shell
    help           Prints this message or the help of the given subcommand(s)

DISCUSSION:
    Rustup installs The Rust Programming Language from the official
    release channels, enabling you to easily switch between stable,
    beta, and nightly compilers and keep them updated. It makes
    cross-compiling simpler with binary builds of the standard library
    for common platforms.

    If you are new to Rust consider running `rustup doc --book` to
    learn Rust.
```

Check that Rust has been installed correctly by running this command:

```
rustc --version
```

You should see the version number, commit hash, and commit date for the latest stable version that has been released in the following format:

```
rustc x.y.z (abcabcabc yyyy-mm-dd)
```

Let's finally learn Rust by entering the suggested command at the end of this help text:

```
rustup doc --book
```

## VS CODE & IDE's

From the Rust introductary book:

```
To help IDE integration, the Rust community recommends using `rust-analyzer`. This tool is a set of compiler-centric utilities that speaks the Language Server Protocol, which is a specification for IDEs and programming languages to communicate with each other. Different clients can use `rust-analyzer`, such as the Rust analyzer plug-in for Visual Studio Code.
```

For VS Code, install `rust-analyzer` extension from the marketplace.

### FINAL NOTES:

In the introductary book under chapter 1 (about installation) this is mentioned:

```
You will also need a linker, which is a program that Rust uses to join its compiled outputs into one file. It is likely you already have one. If you get linker errors, you should install a C compiler, which will typically include a linker. A C compiler is also useful because some common Rust packages depend on C code and will need a C compiler.

Linux users should generally install GCC or Clang, according to their distribution’s documentation. For example, if you use Ubuntu, you can install the `build-essential` package.
```

This was already installed on my machine by default, but it can be installed or checked by running:

```
sudo apt update
sudo apt install build-essential
```
