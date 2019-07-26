import React from 'react'
import { Query } from 'react-apollo'
import movies from '../querys/movies'
import Movie from './Movie'

function Home() {
  const onErrorHandler = error => console.log(error)
  return (
    <section className="section">
      <div className="columns">
        <Query query={movies} onError={onErrorHandler}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>
            if (error || !data.movies) return <p>Error :(</p>

            return data.movies.map(movie => (
              <div key={movie.id} className="column">
                <Movie movie={movie} />
              </div>
            ))
          }}
        </Query>
      </div>
    </section>
  )
}

export default Home
