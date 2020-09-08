import { AuthProvider } from '@redwoodjs/auth'
import { Auth0Client } from '@auth0/auth0-spa-js'

const auth0 = new Auth0Client({
  domain: process.env.AUTH0_DOMAIN,
  client_id: process.env.AUTH0_CLIENT_ID,
  redirect_uri: window.location.href,
  // ** NOTE ** Storing tokens in browser local storage provides persistence across page refreshes and browser tabs.
  // However, if an attacker can achieve running JavaScript in the SPA using a cross-site scripting (XSS) attack,
  // they can retrieve the tokens stored in local storage.
  // https://auth0.com/docs/libraries/auth0-spa-js#change-storage-options
  cacheLocation: 'localstorage',
  audience: process.env.AUTH0_AUDIENCE,
})

export default (props) => {
  return <AuthProvider client={auth0} type="auth0" {...props} />
}
