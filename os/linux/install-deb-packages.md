#### apt

```bash
# install
sudo apt install <package path> # full path or start path with ./
# remove
sudo apt remove <software name> # this name will be displayed when you install the package
```

#### dpkg

```bash
# install
sudo dpkg -i <package name>
# to fix any dependency issues
sudo apt-get install -f
# remove
sudo dpkg -r <software name>
```

#### apt vs dpkg

```
apt is a more user-friendly tool utilizing dpkg.
apt will handle all dependencies for you.
Most of the time use apt.
If you have a specific reason for it and you know what you are doing: use dpkg.
```
