import ThirdPartyEmailPassword, {Google, Github, Apple} from "supertokens-node/recipe/thirdpartyemailpassword";
import * as Sessions from "supertokens-node/recipe/session";

export const config = {
  framework:"awsLambda",
  isInServerlessEnv: true,
  appInfo: {
    apiDomain: process.env.SUPERTOKENS_API_DOMAIN,
    websiteDomain: process.env.SUPERTOKENS_WEBSITE_DOMAIN,
    apiGatewayPath: process.env.SUPERTOKENS_API_GATEWAY_PATH,
    appName: "SuperTokens RedwoodJS",
    websiteBasePath: "/supertokens",
    apiBasePath: "/auth",
  },
  supertokens: {
    connectionURI: process.env.SUPERTOKENS_CONNECTION_URI,
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      providers: [
        Google({
          clientId: process.env.SUPERTOKENS_GOOGLE_CLIENT_ID,
          clientSecret: process.env.SUPERTOKENS_GOOGLE_CLIENT_SECRET
        }),
        Github({
            clientId: process.env.SUPERTOKENS_GITHUB_CLIENT_ID,
            clientSecret: process.env.SUPERTOKENS_GITHUB_CLIENT_SECRET
        }),
        Apple({
            clientId: process.env.SUPERTOKENS_APPLE_CLIENT_ID,
            clientSecret: {
                keyId: process.env.SUPERTOKENS_APPLE_SECRET_KEY_ID,
                privateKey: process.env.SUPERTOKENS_APPLE_SECRET_PRIVATE_KEY,
                teamId: process.env.SUPERTOKENS_APPLE_SECRET_TEAM_ID,
            },
        }),
      ],
    }),
    Sessions.init({
      jwt: {enable: true}
    })
  ],
}