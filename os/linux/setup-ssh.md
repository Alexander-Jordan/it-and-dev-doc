Install openssh-client:

```
sudo apt install openssh-client
```

Install openssh-server:

```
sudo apt install openssh-server
```

Copy whole .ssh folder to new computer's home directory
Set authorized_keys permissions to -rw-rw-r--:
```
chmod 664 .ssh/authorized_keys
```

Set config permissions to -rw-rw-r--:
```
chmod 664 .ssh/config
```

Set private key (id_rsa) permissions to -rw-------:
```
chmod 600 .ssh/id_rsa
```

Set public key (id_rsa.pub) permissions to -rw-rw-r--:
```
chmod 664 .ssh/id_rsa.pub
```

Set both known_hosts & .old permissions to -rw-------:
```
chmod 600 .ssh/known_hosts
chmod 600 .ssh/known_hosts.old
```

Set .ssh folder permissions to drwxrwxr-x:
```
chmod 775 .ssh
```

Test connection to github:
```
ssh -T git@github.com
```
