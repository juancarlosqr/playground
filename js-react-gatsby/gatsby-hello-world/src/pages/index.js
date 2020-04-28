import React from "react"
import Layout from "../components/Layout"
import Header from "../components/Header"

export default () => (
  <Layout>
    <div style={{ color: `purple` }}>
      <Header>Home</Header>
      <p>What a wonderful world!</p>
      <img src="https://source.unsplash.com/random/630x400" alt="" />
    </div>
  </Layout>
)
