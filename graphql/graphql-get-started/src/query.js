const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = require('graphql');
const directorType = require('./types/directorType')
const directors = require('./fixtures/directors')
const movieType = require('./types/movieType')
const movies = require('./fixtures/movies')

//Define the Query
const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        greeting: {
            type: GraphQLString,
            resolve: () => 'hello graphql!',
        },
        year: {
            type: GraphQLInt,
            resolve: () => new Date().getFullYear()
        },
        movies: {
            type: new GraphQLList(movieType),
            resolve: () => movies,
        },
        movie: {
            type: movieType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (_, args) => movies.find(movie => args.id === movie.id)
            
        },
        directors: {
            type: new GraphQLList(directorType),
            resolve: () => directors,
        },
        director: {
            type: directorType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (_, args) => directors.find(director => args.id === director.id)
        },
    }
});

module.exports = queryType;
