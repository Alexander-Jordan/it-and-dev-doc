[Good resource](https://git-scm.com/book/en/v2)

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
git branch --move <current-name> <new-name>
git branch -M # same, but forcefully
# establish a connection between the current local branch with the named branch on the remote ('origin')
git branch -u origin <branch>
# remove all local branches based on pattern
git branch -D $(git branch --list | grep "<pattern>")
```

#### git checkout

```bash
# create and go to branch
git checkout -b <branch>
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

#### git add

```bash
# add files to commit
git add <files OR . (all)>
```

#### git commit

```bash
# commit with a message
git commit -m "<message>"
# commit with a message & add any not added files to commit
git commit -am "<message>"
```

#### git push

```bash
# save your commits to the remote version
git push
# upload local repo content to the remote repo ('origin'), naming the branch on the remote repo to upload it to
git push -u origin <branch>
# remove branch from remote (old name OR any)
git push origin --delete <branch>
```