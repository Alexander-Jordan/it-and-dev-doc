[Good resource](https://git-scm.com/book/en/v2)

```bash
# create new branch
git branch <branch>
# go to branch
git checkout <branch>
# create and go to branch
git checkout -b <branch>
# delete branch
git branch -d <branch>
# list all local branches OR all local & remote branches
git branch
git branch --all
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
# make local branch available on remote (renamed OR new)
git branch -u origin <branch>
# remove branch from remote (old name OR any)
git push origin --delete <branch>
# remove all local branches based on pattern
git branch -D $(git branch --list | grep "<pattern>")
```

```bash
# fetch latest version of current branch
git pull
# put your added commits on top of the latest version of the current branch
git pull --rebase
```

```bash
# merge current branch with given branch
git merge <branch>
```

```bash
# temporarily set aside some changes made
git stash
# bring back latest stashed changes
git stash pop
```

```bash
# display all new, edited and deleted files
git status
# add files to commit
git add <files OR . (all)>
```

```bash
# commit with a message
git commit -m "<message>"
# commit with a message & add any not added files to commit
git commit -am "<message>"
```

```bash
# save your commits to the remote version
git push
```