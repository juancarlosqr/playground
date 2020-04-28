import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"

export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Header>About Gatsby</Header>
      <p>Such wow. Very React.</p>
      <a
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
    </div>
  </Layout>
)
