# Add user to sudoers

```
su -

vi /etc/sudoers

# after line with: "root ALL=(ALL) ALL" add following
MY_USER    ALL=(ALL) ALL

# save and close
```

__source__

- http://www.openredes.com/2011/08/06/error-user-is-not-in-the-sudoers-file-this-incident-will-be-reported/