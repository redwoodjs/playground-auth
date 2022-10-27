import { Auth0Client } from '@auth0/auth0-spa-js'

import { AuthProvider } from '@redwoodjs/auth'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import UserTools from '../UserTools/UserTools'

console.log('redirect url', window.location.href)

export const auth0Client = new Auth0Client({
  domain: process.env.AUTH0_DOMAIN,
  client_id: process.env.AUTH0_CLIENT_ID,
  redirect_uri: window.location.href,
  // ** NOTE ** Storing tokens in browser local storage provides persistence across page refreshes and browser tabs.
  // However, if an attacker can achieve running JavaScript in the SPA using a cross-site scripting (XSS) attack,
  // they can retrieve the tokens stored in local storage.
  // https://auth0.com/docs/libraries/auth0-spa-js#change-storage-options
  cacheLocation: 'localstorage',
  audience: process.env.AUTH0_AUDIENCE,

  // @MARK: required for automatically extending sessions
  useRefreshTokens: true,
})

export default (props) => {
  return (
    <AuthProvider client={auth0Client} type="auth0" {...props}>
      {/* Add apollo provider here, so that useAuth gets passed in for Cells,etc.  */}
      <RedwoodApolloProvider>
        <UserTools
          logOutOptions={{
            returnTo: process.env.AUTH0_REDIRECT_URI || process.env.DEPLOY_URL,
          }}
        />
      </RedwoodApolloProvider>
    </AuthProvider>
  )
}
