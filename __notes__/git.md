# Git

## Change remote

```sh
git remote rename origin [NEW_REMOTE_NAME]
git remote add origin [NEW_REMOTE_URL]
 
# for every branch tracking previous remote name:
git branch --set-upstream-to origin/[BRANCH]
# for master
git branch --set-upstream-to origin/master

# list remotes
git remote -v

# check remote configurations
cat .git/config
```

__resources__

- [https://help.github.com/en/articles/renaming-a-remote](https://help.github.com/en/articles/renaming-a-remote)
- [https://help.github.com/en/articles/adding-a-remote](https://help.github.com/en/articles/adding-a-remote)
- [https://stackoverflow.com/questions/18801147/changing-the-git-remote-push-to-default](https://stackoverflow.com/questions/18801147/changing-the-git-remote-push-to-default)