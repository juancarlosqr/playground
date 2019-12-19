const { ApolloServer } = require("apollo-server");
const fetch = require("node-fetch");
const { unique } = require("shorthash");

const API_DOGS = "https://dog.ceo/api";
const API_COINBASE = "https://api.coinbase.com/v2";

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    dogs: [Dog]
		dog(breed: String!): Dog
    rates(currency: String!): [ExchangeRate]
  }

	type ExchangeRate {
		currency: String
		rate: String
		name: String
  }
  
	type Dog @cacheControl(maxAge: 1000) {
		id: String!
		breed: String!
		displayImage: String
		images: [Image]
		subbreeds: [String]
	}

	type Image @cacheControl(maxAge: 1000) {
		url: String!
		id: String!
	}
`;

const createDog = (breed, subbreeds) => ({
  breed,
  id: unique(breed),
  subbreeds: subbreeds.length > 0 ? subbreeds : null
});

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    dogs: async () => {
      const results = await fetch(`${API_DOGS}/breeds/list/all`);
      const { message: dogs } = await results.json();

      return Object.entries(dogs).map(([breed, subbreeds]) => createDog(breed, subbreeds));
    },
    dog: async (_, { breed }) => {
      const results = await fetch(`${API_DOGS}/breed/${breed}/list`);
      const { message: subbreeds } = await results.json();

      return createDog(breed, subbreeds);
    },
    rates: async (_, { currency }) => {
      try {
        const results = await fetch(
          `${API_COINBASE}/exchange-rates?currency=${currency}`
        );
        const exchangeRates = await results.json();

        return Object.entries(exchangeRates.data.rates).map(([currency, rate]) => ({
          currency,
          rate
        }));
      } catch (e) {
        console.error(e);
      }
    }
  },
  Dog: {
    displayImage: async ({ breed }) => {
      const results = await fetch(`${API_DOGS}/breed/${breed}/images/random`);
      const { message: image } = await results.json();
      return image;
    },
    images: async ({ breed }) => {
      const results = await fetch(`${API_DOGS}/breed/${breed}/images`);
      const { message: images } = await results.json();
      return images.map(image => ({ url: image, id: unique(image) }));
    }
  },
  ExchangeRate: {
    name: async ({ currency }) => {
      try {
        const results = await fetch(`${API_COINBASE}/currencies`);
        const currencyData = await results.json();

        const currencyInfo = currencyData.data.find(
          c => c.id.toUpperCase() === currency
        );
        return currencyInfo ? currencyInfo.name : null;
      } catch (e) {
        console.error(e);
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
