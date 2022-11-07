import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import { useAuth } from 'src/auth0Auth'

import UserTools from '../UserTools/UserTools'

export default () => {
  return (
    <RedwoodApolloProvider useAuth={useAuth}>
      <UserTools
        useAuth={useAuth}
        logOutOptions={{
          returnTo: process.env.AUTH0_REDIRECT_URI || process.env.DEPLOY_URL,
        }}
      />
    </RedwoodApolloProvider>
  )
}
