import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.GRAPH_CMS_ENDPOINT,
  cache: new InMemoryCache(),
});

export const Apollo = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
