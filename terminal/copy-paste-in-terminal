# Copy/Paste In the Terminal

Here is a small description of copy/pasting in a terminal

## Linux

### CTRL-C/CTRL-V

```
In the terminal you might try to use CTRL-C/CTRL-V to copy/paste something like you normally do.
These shortcuts though do something else in the terminal.

CTRL-C is used to interrupt a current running program/process.
CTRL-V is often used to insert the following character literally without prforming any associated action.
For example in the vi editor, CTRL-V followed by ESC-key will print out the ESC characters.

So for the terminal there's other shortcuts to copy/paste like you normally do.

Note: in some text-editors (like PHPStorm) CTRL-C/CTRL-V acts like you'd expect.
```

- Copy: `SHIFT-CTRL-C`
- Paste: `SHIFT-CTRL-V`

### Copy file content

```
To copy a files content via the terminal, without having to display the content, you need a non-pre-installed package.
```

#### xsel

```bash
# install
sudo apt install xsel
# copy to clipboard
xsel -bi < filename
xsel -b < filename # `-i` OR `--input` is default, so can be omitted
# paste to file (override all existing content)
xsel -bo > filename # `-o` OR `--output`
# paste to file (append to the end of existing content)
xsel -bo >> filename # `>>` appends
```

#### xclip

```bash
# install
sudo apt install xclip
# copy to clipboard
xclip -selection clipboard filename
xclip -sel c filename # `-selection` & `clipboard` can be shortened to `-sel` & `c`
# paste to file (override all existing content)
xclip -o -sel c > filename # `-o` OR `-out`
# paste to file (append to the end of existing content)
xclip -o -sel c >> filename # `>>` appends
```

#### xsel vs xclip

[From Tmux page in the Arch Wiki](https://wiki.archlinux.org/title/Tmux#X_clipboard_integration)

```
Unlike xsel, [xclip] works better when printing a raw bitstream that does not fit the current locale.
Nevertheless, it is neater to use xsel because xclip does not close STDOUT after it has read from the tmux buffer.
As such, tmux does not know that the copy task has completed, and continues to wait for xclip to terminate,
thereby rendering tmux unresponsive.
A workaround is to redirect `STDOUT` to `/dev/null`
```
