import { FatalErrorBoundary } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import supertokens from "supertokens-auth-react";
import sessions from "supertokens-auth-react/recipe/session";
import emailpassword from "supertokens-auth-react/recipe/emailpassword";

import Routes from 'src/Routes'

import './index.css'

supertokens.init({
  appInfo: {
    apiDomain: "http://localhost:8910/",
    appName: "SuperTokens RedwoodJS",
    websiteDomain: "http://localhost:8910/",
    apiBasePath: "/.netlify/functions/auth"
  },
  recipeList: [
    sessions.init(),
    emailpassword.init({
      onHandleEvent(context) {
          console.log(context);
      }
    })
  ]
});

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodApolloProvider>
      <Routes />
    </RedwoodApolloProvider>
  </FatalErrorBoundary>
)

export default App