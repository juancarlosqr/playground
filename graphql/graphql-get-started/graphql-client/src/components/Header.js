import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

export const moviesRoute = '/'
export const directorsRoute = '/directors'

const Header = ({ location: { pathname } }) => {
  let title = ''
  const poweredBy = 'Powered by GraphQL'
  const activeLinkClass = 'has-text-weight-bold'
  useEffect(() => {
    document.title = `${title} - ${poweredBy}`
  })
  if (pathname === moviesRoute) {
    title = 'Movies'
  }
  if (pathname === directorsRoute) {
    title = 'Directors'
  }
  return (
    <div className="hero is-warning is-bold">
      <div className="hero-body">
        <div className="container">
          <p className="title is-1">{title}</p>
          <p className="subtitle is-4">{poweredBy}</p>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li><Link to={moviesRoute} className={pathname === moviesRoute ? activeLinkClass : ""}>Movies</Link></li>
              <li><Link to={directorsRoute} className={pathname === directorsRoute ? activeLinkClass : ""}>Directors</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default withRouter(Header)
