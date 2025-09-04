# Git basics

## Table of content

- [Resources](#resources)
- [Commands](#commands)
  - [git add](#git-add)
  - [git branch](#git-branch)
  - [git checkout](#git-checkout)
  - [git commit](#git-commit)
  - [git diff](#git-diff)
  - [git log](#git-log)
  - [git merge](#git-merge)
  - [git pull](#git-pull)
  - [git push](#git-push)
  - [git remote](#git-remote)
  - [git reset](#git-reset)
  - [git restore](#git-restore)
  - [git revert](#git-revert)
  - [git stash](#git-stash)
  - [git switch](#git-switch)

## Resources

- [Pro Git, the git book](https://git-scm.com/book/en/v2)

## Commands

### `git add`

[Back to top](#table-of-content)

```bash
# include new, edited, or deleted files to commit
git add <files | . (all)>
```

### `git branch`

[Back to top](#table-of-content)

#### Create new branch

```bash
git branch <branch>
# create multiple branches instantly:
for branch in <pattern>{from-value..to-value}; do git branch $branch; done;
```

#### Delete branch

```bash
git branch [-d | --delete] <branch>
 # remove all local branches based on pattern:
git branch [-d | --delete] $(git branch -l <pattern>)
# example, remove all but master branch:
git branch -d $(git branch | grep -v 'master')
# shortcut for '--delete --force':
git branch -D
```

#### List branches

```bash
# only local branches, with the option to filter with pattern:
git branch [-l | --list] <pattern>
# if no flags added, it acts as if the --list flag was added
git branch
# both local and remote branches:
git branch [-a | --all]
# filter with 'grep':
git branch [-a | --all] | grep <pattern>
# filter with '--list'
git branch [-la | --list --all] <pattern>
```

#### Show last commit on each branch

```bash
git branch -v
git branch -vv # include name of the remote branch
```

#### Which branches are merged/not merged with the current branch

```bash
git branch --merged
git branch --no-merged
```

#### Rename branch

```bash
git branch [-m | --move] <new-name> # rename current branch
git branch -m <current-name> <new-name> # rename specified current branch name
git branch -M <current-name> <new-name> # shortcut for '--move --force'
```

#### Manage upstream branch

```bash
# establish or change the connection between the current local branch with the named branch on the remote repository.
git branch [-u | --set-upstream-to] <remote-name>/<branch> <branch>
# if no branch name is provided at the end, it will default to the current branch:
git branch [-u | --set-upstream-to] <remote-name>/<branch>
# example: set 'my-branch' on the origin remote repository as the upstream branch for the current branch:
git branch -u origin/my-branch
# NOTE: the remote branch needs to first exist on the remote.
# to create the remote branch and establish the connection the first time, run:
git push -u <remote-name> <branch>
```

### `git checkout`

[Back to top](#table-of-content)

```bash
# change to existing branch
git checkout <branch>
# create and change to new branch
git checkout -b <branch>
# checkout a specific commit
git checkout <commit-hash>
```

### `git commit`

[Back to top](#table-of-content)

```bash
# commit with a message
git commit [-m | --message] "<message>"
# commit with a message & include all edited or removed files (not new) to the commit
git commit [-am | --all --message] "<message>"
```

### `git diff`

[Back to top](#table-of-content)

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

### `git log`

[Back to top](#table-of-content)

```bash
# show commit logs
git log
```

### `git merge`

[Back to top](#table-of-content)

```bash
# merge current branch with given branch
git merge <branch>
```

### `git pull`

[Back to top](#table-of-content)

```bash
# fetch latest version of current branch
git pull
# put your added commits on top of the latest version of the current branch
git pull --rebase
```

### `git push`

[Back to top](#table-of-content)

```bash
# establish the connection between the current local branch and named remote branch,
# AND upload local commits from the current branch to the remote branch.
git push -u <remote-name> <branch>
# upload local commits from the current branch, to the remote branch it is connected to
git push
# remove branch from remote
git push <remote-name> [-d | --delete] <branch>
```

### `git remote`

[Back to top](#table-of-content)

```bash
# add the remote repository URL, and save it under a name ('origin' is mostly used)
git remote add <name> <url>
# change the remote repository URL
git remote set-url <remote-name> <url>
```

### `git reset`

[Back to top](#table-of-content)

```bash
# undo last commit (before pushing to remote)
git reset
```

### `git restore`

[Back to top](#table-of-content)

```bash
# restore changed or deleted files
git restore <files | . (all)>
```

### `git revert`

[Back to top](#table-of-content)

```bash
# creates a new commit that is the opposite of an existing commit
git revert <commit-hash>
```

### `git stash`

[Back to top](#table-of-content)

```bash
# temporarily set aside some changes made
git stash
# bring back latest stashed changes
git stash pop
```

### `git status`

[Back to top](#table-of-content)

```bash
# display all new, edited and deleted files
git status
```

### `git switch`

[Back to top](#table-of-content)

```bash
# change to existing branch
git switch <branch>
# create and change to new branch
git switch [-c | --create] <branch> # shortcut for 'git branch <branch> && git switch <branch>'
git switch [-C | --force-create] # shortcut for 'git branch -f <branch> && git switch <branch>'
# change to a specific commit
git switch [-d | --detach] <commit-hash>
```
