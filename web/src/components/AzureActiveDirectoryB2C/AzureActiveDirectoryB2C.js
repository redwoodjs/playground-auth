import { AuthProvider } from '@redwoodjs/auth'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { PublicClientApplication } from '@azure/msal-browser'
import UserTools from '../UserTools/UserTools'

export const azureActiveDirectoryB2CClient = new PublicClientApplication({
  auth: {
    clientId: process.env.AZURE_ACTIVE_DIRECTORY_B2C_CLIENT_ID,
    authority: process.env.AZURE_ACTIVE_DIRECTORY_B2C_AUTHORITY,
    redirectUri: process.env.AZURE_ACTIVE_DIRECTORY_B2C_REDIRECT_URI,
    postLogoutRedirectUri: process.env.AZURE_ACTIVE_DIRECTORY_B2C_LOGOUT_REDIRECT_URI,
    knownAuthorities:[process.env.AZURE_ACTIVE_DIRECTORY_B2C_KNOWN_AUTHORITY]
  },
})

const AzureUserTools = () => {
  console.log(process.env.AZURE_ACTIVE_DIRECTORY_B2C_REDIRECT_URI)

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
      client={azureActiveDirectoryB2CClient}
      type="azureActiveDirectory"
    >
      <AzureUserTools />
      {children}
    </AuthProvider>
  )
}
