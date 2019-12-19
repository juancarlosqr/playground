import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg'

const Home = () => {
  return (
    <div>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <p>
        My first Apollo app{" "}
        <span role="img" aria-label="rocket emoji">
          🚀
        </span>
      </p>
      <p>
        <a
          className="App-link"
          href="https://graphql.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn GraphQL
        </a>
      </p>
      <p>
        <Link to="/dogs" className="App-link">
          See Dogs
        </Link>
      </p>
      <p>OR</p>
      <p>
        <Link to="/rates" className="App-link">
          See Exchange Rates
        </Link>
      </p>
    </div>
  );
};

export default Home
