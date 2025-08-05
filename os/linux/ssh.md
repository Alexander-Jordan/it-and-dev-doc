# SSH

## Setup

### Install openssh-client

```bash
sudo apt install openssh-client
```

### Install openssh-server

```bash
sudo apt install openssh-server
```

### Configure existing files and folders

If you ever need to change machine (physical or virtual) you should configure SSH from fresh for best security.

However, if you ever need to quickly copy your current setup to a new machine, here is the configuration you need to do:

1. Copy the whole `.ssh` folder to the new machine's home directory.
2. Set the permissions of the files and folder like the following:

- `.ssh`: `drwxrwxr-x` (`chmod 775 .ssh`)
  - any private key: `-rw-------` (`chmod 600 .ssh/[private_key]`)
  - any public key: `-rw-rw-r--` (`chmod 664 .ssh/[public_key]`)
  - `authorized_keys`: `-rw-rw-r--` (`chmod 664 .ssh/authorized_keys`)
  - `config`: `-rw-rw-r--` (`chmod 664 .ssh/config`)
  - `known_hosts`: `-rw-------` (`chmod 600 .ssh/known_hosts`)
  - `known_hosts.old`: `-rw-------` (`chmod 600 .ssh/known_hosts.old`)

### Test connection to GitHub

```bash
ssh -T git@github.com
```
