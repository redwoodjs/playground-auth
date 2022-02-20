import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'
import { isBrowser } from '@redwoodjs/prerender/browserUtils'
import UserTools from '../UserTools/UserTools'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

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
