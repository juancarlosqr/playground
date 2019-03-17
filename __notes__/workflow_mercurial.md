#	Workflow correcto para trabajar con BRANCH en Mercurial

```
# clonamos
hg clone ...

# creamos branch
hg branch juancarlosqr/feature
	
# en el nuevo branch lo primero que hacemos es push el nuevo branch
hg push --new-branch

# trabajar sobre este branch

# al finalizar algun cambio hacemos commit y push
hg ci -m'msg'
hg push

# al finalizar todos los cambios, cerramos branch
hg ci --close-branch -m'msg'

# regresamos al default branch
hg up default

# traemos los cambios del branch con merge
hg merge juancarlosqr/feature

# commit del merge
hg ci -m'msg'

# hacemos push al servidor
hg push
```
