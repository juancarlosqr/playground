import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_DOGS = gql`
  query getDogs {
    dogs {
      id
      breed
      displayImage
    }
  }
`;

function Dogs() {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (error) return `Error! ${error}`;

  return (
    <div>
      <h1>Dogs</h1>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="App-dogs">
          {data.dogs.map(({ id, breed, displayImage }) => (
            <article key={id} className="App-dog">
              <p>
                <Link to={`/dogs/${breed}`} className="App-link">
                  {breed}
                </Link>
              </p>
              <img src={displayImage} alt="" style={{ height: 300 }} />
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dogs;
