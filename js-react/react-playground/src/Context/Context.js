import React, { createContext, useContext, useState, useEffect } from 'react'
import GoBack from '../components/GoBack'
import './context.css'

const { log } = console

const UserContext = createContext({})

const Header = () => (
  <section>
    <GoBack />
    <h2>context</h2>
    <h3>users</h3>
  </section>
)

const Geo = () => {
  const { address } = useContext(UserContext)
  const { geo } = address
  return (
    <>
      <dt>Coordinates</dt>
      <dd>{`lat: ${geo.lat}, long: ${geo.lng}`}</dd>
    </>
  )
}

const Address = () => {
  const { address } = useContext(UserContext)
  return (
    <dl className='address'>
      <dt>City</dt>
      <dd>{address.city}</dd>
      <dt>Street</dt>
      <dd>{address.street}</dd>
      <Geo />
    </dl>
  )
}

const User = ({ user }) => (
  <UserContext.Provider value={user}>
    <article>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
      <Address />
    </article>
  </UserContext.Provider>
)

const UsersList = ({ users }) => {
  if (!users.length) return <p>No users</p>
  return (
    <div>
      {users.map(user => <User key={user.id} user={user} />)}
    </div>
  )
}

const Context = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(json => {
          log(json)
          setUsers(json)
        })
        .catch(error => {
          log(error)
          setError('Something is broken...')
        })
        .finally(() => setLoading(false))
    }, 300)
  }, [])
  log('rendering')
  return (
    <div>
      <Header />
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading && !error && <UsersList users={users} />}
    </div>
  )
}

export default Context
