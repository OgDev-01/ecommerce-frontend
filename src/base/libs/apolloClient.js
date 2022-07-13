import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.STRAPI_ENDPOINT_PRODUCTION_GRAPHQL,
  cache: new InMemoryCache(),
});

export const Apollo = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
