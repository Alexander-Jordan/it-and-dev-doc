# Desktop Entries

When you download an AppImage or other executables that are meant to be a clickable app from wherever it's saved, you won't get the app with a shortcut in the menu by default.
Since I don't like the thought of keeping applications in my home folder nor being forced to search for applications via file explorer, here is the documentation of how to manually create those menu shortcuts in Ubuntu.

For starters, a menu shortcut is generated through what is called desktop entries.
These are `.desktop` files that includes some descripable attributes such as name, path to the executable and icon etc.

## Desktop entries are saved in 1 of 3 places

1. **~/.local/share/applications** - user specific apps
2. **/usr/local/share/applications** - third party apps accessable to all users
3. **/usr/share/applications** - default Linux distro specific apps maintained by apt (don't edit this for most cases)

## Resources

- [How to install and edit desktop files on Linux (Desktop entries)](https://www.cyberciti.biz/howto/how-to-install-and-edit-desktop-files-on-linux-desktop-entries/)
- [Desktop Entry Specification](https://freedesktop.org/wiki/Specifications/desktop-entry-spec/) (click latest)
- [Desktop Menu Specification](https://freedesktop.org/wiki/Specifications/menu-spec/) (click latest)

## Example (Krita)

Krita is an example were the latest build is available only by downloading the AppImage from Krita's website.
AppImage files are applications that has everything built in without the need of installing them.
While pretty nifty, this also means that there will not be an automatic way of having it as a shortcut in any menu.
You'll need to do this manually.

Since the downloadable doesn't come with any icons either, I need to download that myself.

In other cases I might want an app to be accessable only by me.
In that case I would save the app folder in the `~/.local/share` folder, and create a desktop entry in `~/.local/share/applications`.

But for this example I know it's a third-party app that I want to be accessable to **any** user.

Create a directory at `/usr/local/share` (the place for all third-party apps) called `krita`:

```bash
sudo mkdir /usr/local/share/krita
```

Place both the AppImage file and the icon file in that folder.

Make sure you have the `applications` folder in `/usr/local/share` folder.
If not, create one and reboot:

```bash
sudo mkdir /usr/local/share/applications
```

Create the desktop entry for Krita inside the `applications` folder:

```bash
sudo nano /usr/local/share/applications/krita.desktop
```

Lastly add the following attributes to that file and save:

```desktop
[Desktop Entry]
Type=Application
Name=krita
Comment=Krita is a professional FREE and open source painting program. It is made by artists that want to see affordable art tools for everyone.
Exec=/usr/local/share/krita/krita-5.1.3-x86_64.appimage
Icon=/usr/local/share/krita/krita-icon.png
Categories=Graphics;
```

### Explaination

- **Type**: This specification defines 3 types of desktop entries: Application (type 1), Link (type 2) and Directory (type 3). To allow the addition of new types in the future, implementations should ignore desktop entries with an unknown type.
- **Name**: Specific name of the application.
- **Comment**: Tooltip for the entry, for example "View sites on the Internet". The value should not be redundant with the values of Name and GenericName.
- **Exec**: Program to execute, possibly with arguments.
- **Icon**: Icon to display in file manager, menus, etc.
- **Categories**: Categories in which the entry should be shown in a menu.

[For more attributes (desktop entry keys) and their descriptions.](https://specifications.freedesktop.org/desktop-entry-spec/latest/ar01s06.html)

## Other tools

There is a GUI tool called `alacarte` that can be installed via apt:

```bash
sudo apt install alacarte
```

It's great to easily add these desktop entries for user specific apps (they end up in the `~/.local/share/applications` folder), but I only use it to reorder existing shortcuts in their category.
