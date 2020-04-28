import React from "react"
import { Link } from "gatsby"
import styles from "./styles/layout.module.css"

const linkStyles = {
  textShadow: `none`,
  backgroundImage: `none`,
  textDecoration: `none`,
}

const ListLink = (props) => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={linkStyles}>
      {props.children}
    </Link>
  </li>
)

export default ({ children }) => (
  <div className={styles.container}>
    <header style={{ marginBottom: `2rem` }}>
      <Link to="/" style={linkStyles}>
        <h3 style={{ display: `inline` }}>Hello Gatsby!</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, margin: `0` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about">About</ListLink>
        <ListLink to="/team">Team</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
    {children}
    <footer style={{ position: "absolute", bottom: 0, width: "650px" }}>
      <p style={{ textAlign: "center", margin: "4rem 0", color: "purple" }}>
        Powered by Gatsby{" "}
        <span role="img" aria-label="rocket emoji">
          🚀
        </span>
      </p>
    </footer>
  </div>
)
