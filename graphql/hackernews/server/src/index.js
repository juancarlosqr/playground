const { GraphQLServer } = require('graphql-yoga')

// 1
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]
let idCount = links.length

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: (_, args) => links.find(l => l.id === args.id)
  },
  Mutation: {
    createLink: (_, args) => {
       const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    },
    updateLink: (_, args) => {
      const linkIndex = links.findIndex(l => l.id === args.id)
      links[linkIndex] = args
      return args
    },
    deleteLink: (_, args) => {
      const linkIndex = links.findIndex(l => l.id === args.id)
      const linkDeleted = links[linkIndex]
      links = links.filter(l => l.id !== args.id)
      return linkDeleted
    }
  },
}

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log(`Server is running on http://localhost:4000`))
