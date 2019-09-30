import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header"

export default () => (
  <div style={{ color: `purple` }}>
    <Header title="Hello Gatsby!" />
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/user">User</Link></li>
    </ul>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)