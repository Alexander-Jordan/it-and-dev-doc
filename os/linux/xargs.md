# `xargs`

Build and execute command lines from standard input.

`xargs` reads items from the standard input, delimited by blanks or newlines, and executes the  command one or more times with any initial-arguments followed by items read from standard input. Blank lines on the standard input are ignored.

## Examples

### Delete all local git branches except `main`

```bash
git branch | grep -v 'master' | xargs git branch -d
```
