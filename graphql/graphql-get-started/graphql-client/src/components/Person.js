import React from 'react'

const Person = ({ person }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-2by3">
        <img src={person.image} alt="Person" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{person.name}</p>
          <p className="subtitle is-6">Born: {person.born}</p>
        </div>
      </div>
    </div>
  </div>
)

export default Person
