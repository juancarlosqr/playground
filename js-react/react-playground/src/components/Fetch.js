import React, { Fragment, useState, useEffect } from 'react'

const { log } = console

/**
 * Use case of render-props pattern
 */
const Fetch = ({ render, url }) => {
  const [fetchUrl] = useState(url)
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    setTimeout(() => {
      fetch(fetchUrl)
        .then(resp => resp.json())
        .then(json => {
          log(json)
          setData(json)
        })
        .catch(error => {
          log(error)
          setError('Something is broken...')
        })
        .finally(() => setLoading(false))
    }, 300)
  }, [fetchUrl])
  return (
    <Fragment>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && render(data)}
    </Fragment>
  )
}

export default Fetch
