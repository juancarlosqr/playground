import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/DataLayout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
    <p>
      Follow me on{" "}
      <a
        href={`https://twitter.com/${data.site.siteMetadata.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        twitter
      }
    }
  }
`
