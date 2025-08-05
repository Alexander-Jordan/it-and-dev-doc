# Install deb packages

## `apt`

`apt` is a more user-friendly tool utilizing `dpkg`, it will handle all dependencies, and you should in most cases just use `apt` instead of `dpkg`.

```bash
# install
sudo apt install <package path> # full path or start path with ./
# remove
sudo apt remove <software name> # this name will be displayed when you install the package
```

## `dpkg`

If you have a specific reason for it and you know what you are doing, then you can use `dpkg`.

```bash
# install
sudo dpkg -i <package name>
# to fix any dependency issues
sudo apt-get install -f
# remove
sudo dpkg -r <software name>
```
