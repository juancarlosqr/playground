const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');

const query = require('./query');
const schema = new GraphQLSchema({ query });

const app = express();
const port = process.env.PORT || 5000;
const graphql = '/graphql'
const message = `Graphql Server Running at http://localhost:${port}${graphql}`

app.use(cors());

app.use(graphql, graphqlHTTP({
    schema,
    graphiql: true,
}));

app.use('/', (_, res) => {
    res.json({
        graphql,
        message
    })
});

app.listen(port, () => {
    console.log(`NODE_ENV ${process.env.NODE_ENV}`)
    console.log(`Container ID ${process.env.HOSTNAME}`)
    console.log(message);
});
