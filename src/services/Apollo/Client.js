import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

const defaultOptions =  {
  watchQuery: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "ignore",
    notifyOnNetworkStatusChange: true
  }
}

const client = new ApolloClient({
  ssr: false,
  link: new HttpLink({
    uri: "http://localhost:4000"
  }),
  cache: new InMemoryCache(),
  defaultOptions
})

export default client;
