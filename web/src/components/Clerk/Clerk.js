import { AuthProvider } from '@redwoodjs/auth'
import { RedwoodApolloProvider } from '@redwoodjs/web/dist/apollo'

import { ClerkProvider, ClerkLoaded, useClerk } from '@clerk/clerk-react'

import UserTools from '../UserTools/UserTools'

// You can set user roles in a "roles" array on the public metadata in Clerk.
// Also, you need to add two env variables: CLERK_FRONTEND_API_URL for web and
// CLERK_API_KEY for api, with the frontend api host and api key, respectively,
// both from your Clerk.dev dashboard.
let clerk
export const clerkClient = () => clerk

const ClerkAuthConsumer = ({ children }) => {
  clerk = useClerk()
  return React.cloneElement(children, { client: clerk })
}

const ClerkAuthProvider = ({ children }) => {
  const frontendApi = process.env.CLERK_FRONTEND_API_URL
  if (!frontendApi) {
    throw new Error('Need to define env variable CLERK_FRONTEND_API_URL')
  }

  return (
    <ClerkProvider frontendApi={frontendApi}>
      <ClerkLoaded>
        <ClerkAuthConsumer>{children}</ClerkAuthConsumer>
      </ClerkLoaded>
    </ClerkProvider>
  )
}

export default (props) => {
  return (
    <>
      <ClerkAuthProvider>
        <AuthProvider client={clerkClient()} type="clerk" {...props}>
          {/* Add apollo provider here, so that useAuth gets passed in for Cells,etc.  */}
          <RedwoodApolloProvider>
            <UserTools />
          </RedwoodApolloProvider>
        </AuthProvider>
      </ClerkAuthProvider>
    </>
  )
}
