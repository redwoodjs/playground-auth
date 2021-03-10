import { AuthProvider } from '@redwoodjs/auth'
import supertokens from "supertokens-auth-react";
import sessions from "supertokens-auth-react/recipe/session";
import emailpassword from "supertokens-auth-react/recipe/emailpassword";

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

export default (props) => {
  return <AuthProvider client={undefined} type="supertokens" {...props} />
}
