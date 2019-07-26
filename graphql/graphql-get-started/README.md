# Node and Graphql

https://medium.freecodecamp.org/an-introduction-to-graphql-how-it-works-and-how-to-use-it-91162ecd72d0

__run__

```sh
docker-compose up
```

__query example__

```graphql
{
  greeting,
  year,
  movie(id: 1) {
    id
    name
  },
  movies {
    id
    name
    year
    boxOffice
    rottenTomatoes
    poster
    director {
      id
      name
      born
      image
    }
  }
  director(id: 3) {
    id
    name
    born
    image
  }
  directors {
    id
    name
    born
    image
  }
}
```

__client__

```js
import ApolloClient from 'apollo-boost'
import { gql } from 'apollo-boost'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
})

apolloClient
  .query({
    query: gql`
      {
        movies {
          name
          boxOffice
          poster
          director {
            name
          }
        }
      }
    `
  })
  .then(result => console.log(result))
  .catch(error => console.log(error))
```