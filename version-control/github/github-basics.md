#### Upload existing local git repository to GitHub 

```bash
# first create a new GitHub repository (best practice is to match the name of the git repo)

# add the remote repository URL, and save it under a name ('origin' is mostly used)
# either via SSH (need to setup SSH locally and on GitHub profile)
git remote add origin git@github:<github-username>/<new-github-repository-name>.git
# OR via HTTPS (need to setup Personal Access Tokens)
git remote add origin https://github.com/<github-username>/<new-github-repository-name>.git

# forcefully rename the current branch to 'main' ('-M' is the same as '--move --force')
git branch -M main

# establish a connection between the current local branch with the named branch ('main') on the remote ('origin')
git branch -u origin main
# upload local branch content to the remote repo branch
git push
# OR do both in one step
git push -u origin main
```
