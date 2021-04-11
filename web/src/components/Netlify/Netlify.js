import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import { isBrowser } from '@redwoodjs/prerender/browserUtils'

if (isBrowser) {
  netlifyIdentity.init()
}

export default (props) => {
  return <AuthProvider client={netlifyIdentity} type="netlify" {...props} />
}
