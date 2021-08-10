import Clerk from '@clerk/clerk-js'
import { AuthProvider } from '@redwoodjs/auth'
import { RedwoodApolloProvider } from '@redwoodjs/web/dist/apollo'

import UserTools from '../UserTools/UserTools'

// The playground uses a modified setup because the provider can be loaded/unloaded
// as the user views different playground auth setups.
// This flow has the advantage that it doesn't break in that situation, but
// the distinct DISadvantage over production that it doesn't support the React
// components that use `useClerk`.
const clerkFrontendApi = process.env.CLERK_FRONTEND_API_URL
if (!clerkFrontendApi) {
  throw new Error('Need to define env variable CLERK_FRONTEND_API_URL')
}

export let clerkClient = window.Clerk || new Clerk(clerkFrontendApi)
if (!window.Clerk) {
  window.Clerk = clerkClient
}
clerkClient.load({})

export default (props) => {
  return (
    <AuthProvider client={clerkClient} type="clerk" {...props}>
      {/* Add apollo provider here, so that useAuth gets passed in for Cells,etc.  */}
      <RedwoodApolloProvider>
        <UserTools
          logOutOptions={{
            returnTo: process.env.DEPLOY_URL,
          }}
        />
      </RedwoodApolloProvider>
    </AuthProvider>
  )
}
