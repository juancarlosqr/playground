import React from 'react'
import { Query } from 'react-apollo'
import directors from '../querys/directors'
import Person from './Person'

function Directors() {
  const onErrorHandler = error => console.log(error)
  return (
    <section className="section">
      <div className="columns">
        <Query query={directors} onError={onErrorHandler}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error || !data.directors) return <p>Error :(</p>

            return data.directors.map(director => (
              <div key={director.id} className="column">
                <Person person={director} />
              </div>
            ))
          }}
        </Query>
      </div>
    </section>
  )
}

export default Directors
