import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <div
    css={css`
      margin: 0 auto;
      max-width: 80%;
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
    <ul style={{ listStyle: `none`, float: `right`, margin: `0` }}>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link
          to={`/`}
          css={css`
            float: right;
          `}
        >
          Home
        </Link>
      </li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link
          to={`/files/`}
          css={css`
            float: right;
          `}
        >
          Files
        </Link>
      </li>
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link
          to={`/eat/`}
          css={css`
            float: right;
          `}
        >
          About
        </Link>
      </li>
    </ul>
    {children}
  </div>
)
