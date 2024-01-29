#### Upload existing local git repository to GitHub 

```bash
# first create a new GitHub repository (best practice is to match the name of the git repo)

# add remote origin via SSH (need to setup)
git remote add origin git@github:<github-username>/<new-github-repository-name>.git

# OR add remote origin via HTTPS (need to setup Personal Access Tokens)
git remote add origin https://github.com/<github-username>/<new-github-repository-name>.git

# upload git repository to GitHub, and add upstream (tracking) reference
git push -u origin main
# OR
git push --set-upstream origin main
```
