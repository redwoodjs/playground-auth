import { AuthProvider } from '@redwoodjs/auth'
import { UserAgentApplication } from "msal";

const azureAdClient = new UserAgentApplication({
  auth: {
    clientId: process.env.AZUREAD_CLIENT_ID,
    authority: process.env.AZUREAD_AUTHORITY,
    redirectUri: process.env.AZUREAD_REDIRECT_URI,
    postLogoutRedirectUri: process.env.AZUREAD_LOGOUT_REDIRECT_URI,
  },
});

export default ({children}) => {
  return (
    <AuthProvider client={azureAdClient} type="azureAd">
      {children}
    </AuthProvider>
  )
}
