import { AuthProvider } from '@redwoodjs/auth'
import EthereumAuthClient from '@oneclickdapp/ethereum-auth'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { FetchConfigProvider, useFetchConfig } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/dist/apollo'

import UserTools from '../UserTools/UserTools'

let ethereum

const ApolloInjector = ({ children }) => {
  const { uri, headers } = useFetchConfig()
  try {
    const graphQLClient = new ApolloClient({
      cache: new InMemoryCache(),
      uri,
      headers,
    })
    // Default option using Apollo Client
    const makeRequest = (mutation, variables) =>
      graphQLClient.mutate({
        mutation,
        variables,
      })

    // Alternative option using graphql-hooks
    // You'll also need to modify graphQLClient
    // const makeRequest = (query, variables) =>
    //   graphQLClient.request({
    //     query,
    //     variables,
    //   })

    ethereum = new EthereumAuthClient({
      makeRequest,
      debug: process.NODE_ENV === 'development',
    })
  } catch (e) {
    console.log(e)
  }
  return React.cloneElement(children, { client: ethereum })
}

export const ethereumClient = new EthereumAuthClient({
  makeRequest: () => {},
  debug: process.NODE_ENV === 'development',
})

export default (props) => {
  return (
    <ApolloInjector>
      <AuthProvider client={ethereum} type="ethereum" {...props}>
        {/* Add apollo provider here, so that useAuth gets passed in for Cells,etc.  */}
        <RedwoodApolloProvider>
          <p className="mt-4 mb-4">
            Full example app in the 👉{' '}
            <a href="https://github.com/oneclickdapp/ethereum-auth">repo</a>
          </p>
          <UserTools />
        </RedwoodApolloProvider>
      </AuthProvider>
    </ApolloInjector>
  )
}
