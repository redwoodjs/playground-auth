import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
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
    websiteDomain: "http://localhost:8910/"
  },
  recipeList: [
    sessions.init(),
    emailpassword.init()
  ]
});

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <Routes />
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
