import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_DOG = gql`
  query getDog($breed: String!) {
    dog(breed: $breed) {
      id
      images {
        id
        url
      }
      subbreeds
    }
  }
`;

function Dog() {
  const { breed } = useParams();
  const { loading, error, data } = useQuery(GET_DOG, {
    variables: {
      breed
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;
  const {
    dog: { id, images, subbreeds }
  } = data;

  return (
    <div>
      <p>
        <Link to="/dogs" className="App-link">
          Dogs
        </Link>
      </p>
      <h3 data-id={id}>{breed}</h3>
      <p>
        <span>subbreeds:&nbsp;</span>
        {subbreeds ? <span>{subbreeds.join(" ")}</span> : "none"}
      </p>
      {images.map(d => (
        <img
          key={d.id}
          src={d.url}
          alt=""
          style={{ height: 360, margin: "0.3em" }}
        />
      ))}
    </div>
  );
}

export default Dog;
