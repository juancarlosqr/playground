import { gql } from 'apollo-boost'

const directors = gql`
{
  directors {
    id
    name
    born
    image
  }
}
`

export default directors
