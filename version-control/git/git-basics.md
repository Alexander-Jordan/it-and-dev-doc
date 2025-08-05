# Git basics

## Resources

- [Pro Git, the git book](https://git-scm.com/book/en/v2)

## Commands

### `git remote`

```bash
# add the remote repository URL, and save it under a name ('origin' is mostly used)
git remote add <name> <url>
```

### `git branch`

```bash
# create new branch
git branch <branch>
for branch in <pattern>{from-value..to-value}; do git branch $branch; done; # create multiple branches instantly
# delete branch
git branch [-d | --delete] <branch>
git branch [-d | --delete] $(git branch -l <pattern>) # remove all local branches based on pattern
git branch -D # shortcut for '--delete --force'
# list branches
git branch [-l | --list] <pattern>  # only local branches, with the option to filter with pattern
git branch # if no flags added, it acts as if the --list flag was added
git branch [-a | --all] # both local and remote branches
git branch [-a | --all] | grep <pattern> # filter with 'grep'
git branch [-la | --list --all] <pattern> # filter with '--list'
# show last commit on each branch
git branch -v
git branch -vv # include name of the remote branch
# which branches are merged/not merged with the current branch
git branch --merged
git branch --no-merged
# rename branch
git branch [-m | --move] <new-name> # rename current branch
git branch -m <current-name> <new-name> # rename specified current branch name
git branch -M <current-name> <new-name> # shortcut for '--move --force'
# establish a connection between the current local branch with the named branch on the remote.
# this could be used when you want to change which remote branch to track.
# NOTE: the remote branch needs to first exist on the remote.
# to create the remote branch and establish the connection the first time, run:
# 'git push -u <remote-name> <branch>'
git branch [-u | --set-upstream-to] <remote-name></branch> <branch>
```

### `git switch`

```bash
# change to existing branch
git switch <branch>
# create and change to new branch
git switch [-c | --create] <branch> # shortcut for 'git branch <branch> && git switch <branch>'
git switch [-C | --force-create] # shortcut for 'git branch -f <branch> && git switch <branch>'
# change to a specific commit
git switch [-d | --detach] <commit-hash>
```

### `git checkout`

```bash
# change to existing branch
git checkout <branch>
# create and change to new branch
git checkout -b <branch>
# checkout a specific commit
git checkout <commit-hash>
```

### `git pull`

```bash
# fetch latest version of current branch
git pull
# put your added commits on top of the latest version of the current branch
git pull --rebase
```

### `git merge`

```bash
# merge current branch with given branch
git merge <branch>
```

### `git stash`

```bash
# temporarily set aside some changes made
git stash
# bring back latest stashed changes
git stash pop
```

### `git status`

```bash
# display all new, edited and deleted files
git status
```

### `git diff`

```bash
# view current content changes
git diff
# compare content changes between branches
git diff <branch1>..<branch2>
# OR
git diff <branch1> <branch2>
# comparing last commit on <branch2> and its common ancestor with <branch1>
git diff <branch1>...<branch2>
# compare affected files between branches
git diff --name-only <branch1> <branch2>
# comparing commits work as well
git diff <commit-hash1> <commit-hash2>
```

### `git add`

```bash
# include new, edited, or deleted files to commit
git add <files | . (all)>
```

### `git restore`

```bash
# restore changed or deleted files
git restore <files | . (all)>
```

### `git commit`

```bash
# commit with a message
git commit [-m | --message] "<message>"
# commit with a message & include all edited or removed files (not new) to the commit
git commit [-am | --all --message] "<message>"
```

### `git reset`

```bash
# undo last commit (before pushing to remote)
git reset
```

### `git log`

```bash
# show commit logs
git log
```

### `git push`

```bash
# establish the connection between the current local branch and named remote branch,
# AND upload local commits from the current branch to the remote branch.
git push -u <remote-name> <branch>
# upload local commits from the current branch, to the remote branch it is connected to
git push
# remove branch from remote
git push <remote-name> [-d | --delete] <branch>
```

### `git revert`

```bash
# creates a new commit that is the opposite of an existing commit
git revert <commit-hash>
```
