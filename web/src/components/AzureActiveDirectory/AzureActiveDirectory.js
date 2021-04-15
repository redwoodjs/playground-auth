import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { UserAgentApplication } from 'msal'
import AuthResults from 'src/components/AuthResults'
import AuthProviderCardHeading from 'src/components/AuthProviderCardHeading'
//import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'

const azureActiveDirectoryClient = new UserAgentApplication({
  auth: {
    clientId: process.env.AZURE_ACTIVE_DIRECTORY_CLIENT_ID,
    authority: process.env.AZURE_ACTIVE_DIRECTORY_AUTHORITY,
    redirectUri: process.env.AZURE_ACTIVE_DIRECTORY_REDIRECT_URI,
    postLogoutRedirectUri:
      process.env.AZURE_ACTIVE_DIRECTORY_LOGOUT_REDIRECT_URI,
  },
})

const AzureUserTools = () => {
  const { type } = useAuth()

  return (
    <div>
      <AuthProviderCardHeading type={type} />
      <AuthResults />
    </div>
  )
}

export default ({ children }) => {
  const { type } = useAuth()
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
