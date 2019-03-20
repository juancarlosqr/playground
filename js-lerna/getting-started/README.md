# getting-started lerna

__usage__

```sh
npm install --global lerna

npm start
```

Using `lerna boostrap` will install all the packages dependencies. Using the `--hoist` option will install the dependencies in the root of the project.

__add packages__

```sh
# external dependencies for all packages
lerna add sillyname

# selective upgrade for a specific package
lerna add sillyname@0.2.0 --scope=header

# external dependencies for a specific package
lerna add sillyname --scope=button

# internal dependencies
lerna add button --scope=awesome-app
```
