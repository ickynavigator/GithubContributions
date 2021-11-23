import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const apiKey = process.env.GH_TOKEN;
const httpLink = createHttpLink({ uri: "https://api.github.com/graphql" });
const authLink = setContext((_, { headers }) => {
  return { headers: { ...headers, authorization: `bearer ${apiKey}` } };
});
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});
