import * as emailpassword from "supertokens-node/recipe/emailpassword";
import * as sessions from "supertokens-node/recipe/session";

export const config = {
  appInfo: {
    apiDomain: "http://localhost:8910/",
    appName: "SuperTokens RedwoodJS",
    websiteDomain: "http://localhost:8910/"
  },
  supertokens: {
    connectionURI: "try.supertokens.io"
  },
  recipeList: [
    emailpassword.init(),
    sessions.init()
  ],
  apiWebProxyPath: "/.netlify/functions",
  isInServerlessEnv: true
}