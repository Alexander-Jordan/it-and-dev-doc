[Good resource](https://git-scm.com/book/en/v2)

#### git remote

```bash
# add the remote repository URL, and save it under a name ('origin' is mostly used)
git remote add <name> <url>
```

#### git branch

```bash
# create new branch
git branch <branch>
# delete branch
git branch -d <branch>
# list branches
git branch --list # only local branches
git branch # if no flags added, it acts as if the --list flag was added
git branch --all # both local and remote branches
git branch --all | grep <keyword-to-match>
# to see last commit on each branch
git branch -v
# to see what remote branches the local branches points to
git branch -vv 
# which branches are merged/not merged with the current branch
git branch --merged
git branch --no-merged
# rename branch
git branch -m <new-name> # rename current branch ('-m' or '--move')
git branch -m <current-name> <new-name> # rename specified current branch name
git branch -M <current-name> <new-name> # same, but forcefully ('-M' is the same as '--move --force')
# establish a connection between the current local branch with the named branch on the remote
git branch -u <remote-name> <branch>
# remove all local branches based on pattern
git branch -D $(git branch --list | grep "<pattern>")
```

#### git checkout

```bash
# change to existing branch
git checkout <branch>
# create and change to new branch
git checkout -b <branch>
# checkout a specific commit
git checkout <commit-hash>
```

#### git pull

```bash
# fetch latest version of current branch
git pull
# put your added commits on top of the latest version of the current branch
git pull --rebase
```

#### git merge

```bash
# merge current branch with given branch
git merge <branch>
```

#### git stash

```bash
# temporarily set aside some changes made
git stash
# bring back latest stashed changes
git stash pop
```

#### git status

```bash
# display all new, edited and deleted files
git status
```

#### git diff

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

#### git add

```bash
# add edited (and new) files to commit
git add <files OR . (all)>
```

#### git commit

```bash
# commit with a message
git commit -m "<message>"
# commit with a message & add all edited (not new) files to the commit
git commit -am "<message>"
```

#### git push

```bash
# establish the connection between the current local branch and named remote branch,
# AND upload local commits from the current branch to the remote branch.
# this is a shorthand for 'git branch -u <remote-name> <branch> && git push'
git push -u <remote-name> <branch>
# upload local commits from the current branch, to the remote branch it is connected to
git push
# remove branch from remote
git push <remote-name> --delete <branch>
```