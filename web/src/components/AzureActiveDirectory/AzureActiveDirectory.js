import { AuthProvider } from '@redwoodjs/auth'
import { UserAgentApplication } from 'msal'
import { RedwoodApolloProvider } from '@redwoodjs/web/dist/apollo'

import UserTools from 'src/components/UserTools'

const azureActiveDirectoryClient = new UserAgentApplication({
  auth: {
    clientId: process.env.AZURE_ACTIVE_DIRECTORY_CLIENT_ID,
    authority: process.env.AZURE_ACTIVE_DIRECTORY_AUTHORITY,
    redirectUri: process.env.AZURE_ACTIVE_DIRECTORY_REDIRECT_URI,
    postLogoutRedirectUri:
      process.env.AZURE_ACTIVE_DIRECTORY_LOGOUT_REDIRECT_URI,
  },
})

export default ({ children }) => {
  return (
    <AuthProvider
      client={azureActiveDirectoryClient}
      type="azureActiveDirectory"
    >
      {/* Add apollo provider here, so that useAuth gets passed in for Cells,etc.  */}
      <RedwoodApolloProvider>
        <UserTools />
        {children}
      </RedwoodApolloProvider>
    </AuthProvider>
  )
}
