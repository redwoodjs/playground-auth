import { AuthProvider, useAuth } from '@redwoodjs/auth'

import ThirdPartyEmailPassword, {SignInAndUp} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import UserTools from '../UserTools/UserTools';
import { RedwoodApolloProvider } from '@redwoodjs/web/dist/apollo'

export const SuperTokensClient = {authRecipe: ThirdPartyEmailPassword};

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