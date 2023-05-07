import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import SSRProvider from 'react-bootstrap/SSRProvider'
import '../styles/globals.scss'

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
})

export default function App ({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </ApolloProvider>
  )
}
