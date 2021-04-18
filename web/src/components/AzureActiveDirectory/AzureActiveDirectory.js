import { AuthProvider } from '@redwoodjs/auth'
import { RedwoodApolloProvider } from '@redwoodjs/web/dist/apollo'
import { UserAgentApplication } from 'msal'
import UserTools from '../UserTools/UserTools'

//import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'

export const azureActiveDirectoryClient = new UserAgentApplication({
  auth: {
    clientId: process.env.AZURE_ACTIVE_DIRECTORY_CLIENT_ID,
    authority: process.env.AZURE_ACTIVE_DIRECTORY_AUTHORITY,
    redirectUri: process.env.AZURE_ACTIVE_DIRECTORY_REDIRECT_URI,
    postLogoutRedirectUri:
      process.env.AZURE_ACTIVE_DIRECTORY_LOGOUT_REDIRECT_URI,
  },
})

const AzureUserTools = () => {
  return (
    <div>
      {/* Add apollo provider here, so that useAuth gets passed in for Cells,etc.  */}
      <RedwoodApolloProvider>
        <UserTools />
      </RedwoodApolloProvider>
    </div>
  )
}

export default ({ children }) => {
  return (
    <AuthProvider
      client={azureActiveDirectoryClient}
      type="azureActiveDirectory"
    >
      <AzureUserTools />
      {children}
    </AuthProvider>
  )
}
