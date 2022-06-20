import netlifyIdentity from 'netlify-identity-widget'

import { AuthProvider } from '@redwoodjs/auth'
import { isBrowser } from '@redwoodjs/prerender/browserUtils'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import UserTools from '../UserTools/UserTools'

if (isBrowser) {
  netlifyIdentity.init()
}

export default (props) => {
  return (
    <AuthProvider client={netlifyIdentity} type="netlify" {...props}>
      {/* Add apollo provider here, so that useAuth gets passed in for Cells,etc.  */}
      <RedwoodApolloProvider>
        <UserTools />
      </RedwoodApolloProvider>
    </AuthProvider>
  )
}
