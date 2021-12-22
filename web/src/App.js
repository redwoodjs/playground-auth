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
    apiDomain: process.env.SUPERTOKENS_API_DOMAIN,
    websiteDomain: process.env.SUPERTOKENS_WEBSITE_DOMAIN,
    apiGatewayPath: process.env.SUPERTOKENS_API_GATEWAY_PATH,
    appName: "SuperTokens RedwoodJS",
    websiteBasePath: "/supertokens",
    apiBasePath: "/auth",
  },
  recipeList: [
    Sessions.init(),
    ThirdPartyEmailPassword.init({
      style: {
        button: {
          backgroundColor: "rgb(191 71 34)",
          borderColor: "rgb(191 71 34)",
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
        style: {
          container: {
            width: "auto",
            boxShadow: "none",
          },
        },
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
