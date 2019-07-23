import React, { useEffect, useState } from 'react'
import Amplify, { Auth, Hub, Logger } from 'aws-amplify'
import { Alert, Button, TextInputField } from 'evergreen-ui'
import GoBack from '../components/GoBack'
import awsexports from './aws-exports'
import './cognito.css'

Amplify.configure(awsexports)

const logger = new Logger('Cognito', 'DEBUG')

const Header = () => (
  <section>
    <GoBack />
    <h2>aws-amplify-cognito</h2>
  </section>
)

const Loading = () => (
  <section>
    <p className="secret">Loading...</p>
  </section>
)

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    Auth.signIn(username, password)
      .then(auth => logger.debug('signin.auth', auth))
      .catch(error => {
        logger.error('signin.error', error)
        setError(error.message || 'Something is wrong...')
      })
      .finally(() => setLoading(false))
  }
  return (
    <div>
      <h3>Sign In</h3>
      <form onSubmit={handleSubmit}>
        <TextInputField disabled={loading} label="Username" inputWidth='50%' required value={username} onChange={e => setUsername(e.target.value)} type="email" />
        <TextInputField disabled={loading} label="Password" inputWidth='50%' required value={password} onChange={e => setPassword(e.target.value)} type="password" />
        {!loading && error && <Alert intent="danger" appearance="card" marginBottom={16} title={error} />}
        <Button disabled={loading} appearance="primary" type="submit">Sign In</Button>
      </form>
    </div>
  )
}

const SignUp = () => {
  const SIGN_UP = 'Sign Up'
  const CONFIRM_SIGN_UP = 'Confirm Sign Up'
  const [signUpState, setSignUpState] = useState(SIGN_UP)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const handleError = error => {
    logger.error('signup.error', error)
    setError(error.message || 'Something is wrong...')
  }
  const handleFinally = () => setLoading(false)
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    if (signUpState === SIGN_UP) {
      Auth.signUp({username, password, attributes: {email: username}})
        .then(auth => {
          logger.debug('signup.auth', auth)
          setSignUpState(CONFIRM_SIGN_UP)
        })
        .catch(handleError)
        .finally(handleFinally)
    }
    if (signUpState === CONFIRM_SIGN_UP) {
      Auth.confirmSignUp(username, code)
        .then(auth => {
          logger.debug('confirm.auth', auth)
          setSuccess('Successful Sign Up. You can sign in now')
        })
        .catch(handleError)
        .finally(handleFinally)
    }
  }
  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <TextInputField disabled={loading} label="Username" inputWidth='50%' required value={username} onChange={e => setUsername(e.target.value)} type="email" />
        {signUpState === SIGN_UP && <TextInputField disabled={loading} label="Password" inputWidth='50%' required value={password} onChange={e => setPassword(e.target.value)} type="password" />}
        {signUpState === CONFIRM_SIGN_UP && <TextInputField disabled={loading} label="Code" inputWidth='50%' required value={code} onChange={e => setCode(e.target.value)} />}
        {!loading && !error && success && <Alert intent="success" appearance="card" marginBottom={16} title={success} />}
        {!loading && error && <Alert intent="danger" appearance="card" marginBottom={16} title={error} />}
        <Button disabled={loading} appearance="primary" type="submit">{signUpState}</Button>
      </form>
    </div>
  )
}

const Dashboard = ({ auth }) => (
  <section>
    <h3>Dashboard</h3>
    <p>{auth.user.attributes.email}</p>
    <p className="secret">(insert protected stuff here...)</p>
    <Button appearance="primary" onClick={auth.signOut}>Sign Out</Button>
  </section>
)

const Cognito = () => {
  const [authData, setAuthData] = useState({
    signOut: () => Auth.signOut(),
  })
  const [authState, setAuthState] = useState('loading')
  // setup auth events listener
  useEffect(() => {
    logger.debug('useEffect.HUB')
    Hub.listen('auth', ({ payload }) => {
      logger.debug('Hub event', payload.event)
      switch (payload.event) {
        case 'signIn':
          setImmediate(() => {
            setAuthData(auth => ({
              ...auth,
              user: payload.data,
            }))
            setAuthState('signedIn')
          })
          break
        case 'signIn_failure':
          setAuthState('signIn')
          break
        case 'signOut':
          setImmediate(() => {
            setAuthState('signIn')
            setAuthData(auth => ({
              ...auth,
              user: null,
            }))
          })
          break
        default:
          break
      }
    })
    return () => {
      Hub.remove('auth')
    }
  }, [])
  // check current user
  useEffect(() => {
    logger.debug('useEffect.AUTH')
    Auth.currentAuthenticatedUser({
      bypassCache: true,
    })
      .then(user => {
        logger.debug('authenticated')
        setAuthData(auth => ({
          ...auth,
          user,
        }))
        setAuthState('signedIn')
      })
      .catch(e => {
        logger.debug('not authenticated', e)
        setAuthState('signIn')
      })
  }, [])
  logger.debug('rendering', authState)
  logger.debug('authData', authData)
  return (
    <div>
      <Header />
      {authState === 'loading' && <Loading />}
      {authState === 'signIn' && <><SignIn /><SignUp /></>}
      {authState === 'signedIn' && <Dashboard auth={authData} />}
    </div>
  )
}

export default Cognito
