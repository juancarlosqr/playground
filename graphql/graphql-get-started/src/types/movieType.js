const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql');
const directorType = require('./directorType')
const directors = require('../fixtures/directors')

// Define Movie Type
const movieType = new GraphQLObjectType({
  name: 'Movie',
  fields: {
      id: {
          type: GraphQLID,
      },
      name: {
          type: GraphQLString,
      },
      year: {
          type: GraphQLInt,
      },
      boxOffice: {
          type: GraphQLString,
      },
      rottenTomatoes: {
          type: GraphQLString,
      },
      poster: {
          type: GraphQLString,
      },
      director: {
          type: directorType,
          resolve: source => directors.find(d => source.director_id === d.id),
      },
  },
});

module.exports = movieType;
