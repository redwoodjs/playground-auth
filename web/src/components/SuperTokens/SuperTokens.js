import { AuthProvider } from '@redwoodjs/auth'
import sessions from "supertokens-auth-react/recipe/session";
import emailpassword from "supertokens-auth-react/recipe/emailpassword";
import UserTools from '../UserTools/UserTools'
import { RedwoodApolloProvider } from '@redwoodjs/web/dist/apollo'

export const supertokensClient = {sessions, authRecipe: emailpassword};

export default (props) => {
  return (
    <AuthProvider client={supertokensClient} type="supertokens" {...props}>
      <RedwoodApolloProvider>
        <UserTools />
      </RedwoodApolloProvider>
    </AuthProvider>
  )
}
