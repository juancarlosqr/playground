const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
} = require('graphql');

//Define Director Type
const directorType = new GraphQLObjectType({
  name: 'Director',
  fields: {
      id: {
          type: GraphQLID
      },
      name: {
          type: GraphQLString
      },
      born: {
          type: GraphQLString
      },
      image: {
          type: GraphQLString
      },
  },
});

module.exports = directorType;
