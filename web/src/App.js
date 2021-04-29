import { FatalErrorBoundary } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import './index.css'
import 'highlight.js/styles/atom-one-dark.css'
import supertokens from "supertokens-auth-react";
import sessions from "supertokens-auth-react/recipe/session";
import emailpassword from "supertokens-auth-react/recipe/emailpassword";

supertokens.init({
  appInfo: {
    apiDomain: "http://localhost:8910/",
    appName: "SuperTokens RedwoodJS",
    websiteDomain: "http://localhost:8910/",
    apiBasePath: "/auth",
    apiGatewayPath: "/.netlify/functions"
  },
  recipeList: [
    sessions.init(),
    emailpassword.init({
      getRedirectionURL: (context) => {
        if (context.action === "SUCCESS") {
          return "/supertokens";
        }
      }
    })
  ]
});

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <Toaster />
    <Routes />
  </FatalErrorBoundary>
)

export default App
