import { Auth0Client } from '@auth0/auth0-spa-js'

import { createAuth0Auth } from '@redwoodjs/auth-providers-web'

const auth0 = new Auth0Client({
  domain: process.env.AUTH0_DOMAIN || '',
  client_id: process.env.AUTH0_CLIENT_ID || '',
  redirect_uri: window.location.href,

  // ** NOTE ** Storing tokens in browser local storage provides persistence across page refreshes and browser tabs.
  // However, if an attacker can achieve running JavaScript in the SPA using a cross-site scripting (XSS) attack,
  // they can retrieve the tokens stored in local storage.
  // https://auth0.com/docs/libraries/auth0-spa-js#change-storage-options
  cacheLocation: 'localstorage',
  audience: process.env.AUTH0_AUDIENCE,

  // @MARK useRefreshTokens is required for automatically extending sessions
  // beyond that set in the initial JWT expiration.
  //
  // @see https://auth0.com/docs/tokens/refresh-tokens
  useRefreshTokens: true,
})

export const { AuthProvider, useAuth } = createAuth0Auth(auth0)
