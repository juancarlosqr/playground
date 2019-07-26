import { gql } from 'apollo-boost'

const movies = gql`
{
  movies {
    id
    poster
    name
    year
    rottenTomatoes
    boxOffice
    director {
      name
    }
  }
}
`

export default movies
