import { AuthProvider } from '@redwoodjs/auth'
import { Auth0Client } from '@auth0/auth0-spa-js'

const auth0 = new Auth0Client({
  domain: 'billable.eu.auth0.com',
  client_id: 'QOsYIlHvCLqLzmfDU0Z3upFdu1znlkqK',
  redirect_uri: window.location.href,
  cacheLocation: 'localstorage',
  audience: 'api.billable',
})

export default (props) => {
  return <AuthProvider client={auth0} type="auth0" {...props} />
}
