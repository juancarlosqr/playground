import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const MenuLink = ({ to, children }) => (
  <li
    css={css`
      display: inline-block;
      margin-right: 1rem;
    `}
  >
    <Link
      to={to}
      css={css`
        text-decoration: none;
      `}
    >
      {children}
    </Link>
  </li>
)

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 60%;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Link to={`/pandas/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
        `}
      >
        Pandas Eating Lots
      </h3>
    </Link>
    <ul
      css={css`
        list-style: none;
        float: right;
        margin: 0;
      `}
    >
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/files/">Files</MenuLink>
      <MenuLink to="/eat/">About</MenuLink>
    </ul>
    {children}
  </div>
)
