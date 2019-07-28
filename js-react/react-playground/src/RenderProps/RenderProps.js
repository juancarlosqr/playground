import React, { Fragment } from 'react'
import Fetch from '../components/Fetch'
import GoBack from '../components/GoBack'

const { log } = console

const Header = () => (
  <section>
    <GoBack />
    <h2>render-props</h2>
    <h3>users</h3>
  </section>
)

const Name = ({ name }) => <h4>{name}</h4>

const Email = ({ email }) => <p style={{paddingLeft: '36px'}}>{email}</p>

const User = ({ user, name, children }) => (
  <article>
    {name(user.name)}
    {children(user.email)}
  </article>
)

const UsersList = ({ users }) => {
  if (!users.length) return <p>No users</p>
  return (
    <div>
      {users.map(user => <User
        key={user.id}
        user={user}
        name={name => <Name name={name} />}
      >
        {email => <Email email={email} />}
      </User>)}
    </div>
  )
}

const RenderProps = () => {
  const url = 'https://jsonplaceholder.typicode.com/users'
  log('rendering')
  return (
    <Fragment>
      <Header />
      <Fetch url={url} render={users => <UsersList users={users} />} />
    </Fragment>
  )
}

export default RenderProps
