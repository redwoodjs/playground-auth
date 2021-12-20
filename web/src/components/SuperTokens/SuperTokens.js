import { AuthProvider, useAuth } from '@redwoodjs/auth'
import Sessions from "supertokens-auth-react/recipe/session";

import ThirdPartyEmailPassword, {SignInAndUp} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import UserTools from '../UserTools/UserTools';
import { RedwoodApolloProvider } from '@redwoodjs/web/dist/apollo'

export const SuperTokensClient = {sessions: Sessions, authRecipe: ThirdPartyEmailPassword};

const Content = (props) => {
  const {isAuthenticated, loading} = useAuth();

  if (loading) {
    return "loading...";
  }

  if (isAuthenticated) {
    return <UserTools/>;
  }

  return <SignInAndUp/>;
}

export default (props) => {
  return (
    <AuthProvider client={SuperTokensClient} type="supertokens" {...props}>
      <RedwoodApolloProvider>
        <Content/>
      </RedwoodApolloProvider>
    </AuthProvider>
  )
}