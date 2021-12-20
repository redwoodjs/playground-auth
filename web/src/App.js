import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import './index.css'
import 'highlight.js/styles/atom-one-dark.css'

import SuperTokens from "supertokens-auth-react";
import Sessions from "supertokens-auth-react/recipe/session";
import ThirdPartyEmailPassword, {Github, Google, Apple} from "supertokens-auth-react/recipe/thirdpartyemailpassword";

SuperTokens.init({
  appInfo: {
    apiDomain: "http://localhost:8910/",
    appName: "SuperTokens RedwoodJS",
    websiteDomain: "http://localhost:8910/",
    websiteBasePath: "/supertokens",
    apiBasePath: "/auth",
    apiGatewayPath: "/.netlify/functions",
  },
  recipeList: [
    Sessions.init(),
    ThirdPartyEmailPassword.init({
      style: {
        container: {
          width: "auto",
          boxShadow: "none",
        },
        button: {
          backgroundColor: "rgb(191 71 34) !important",
          borderColor: "rgb(191 71 34) !important",
        },
      },
      getRedirectionURL: async (context) => {
        if (context.action === "SUCCESS") {
            if (context.redirectToPath !== undefined) {
                // we are navigating back to where the user was before they authenticated
                return context.redirectToPath;
            }
            return "/supertokens";
        }
        return undefined;
      },
      signInAndUpFeature: {
        disableDefaultImplementation: true,
        providers: [
          Github.init(),
          Google.init(),
          Apple.init(),
        ],
      },
    })
  ]
});

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <Toaster />
      <Routes />
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
