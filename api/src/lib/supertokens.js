import ThirdPartyEmailPassword, {
  Google,
  Github,
  Apple,
} from 'supertokens-node/recipe/thirdpartyemailpassword'
import * as Sessions from 'supertokens-node/recipe/session'

/**
 * apiDomain setting
 *
 * Handles local dev as well as Netlify environment settings for deploy previews and production branches
 */
const apiDomain =
  process.env.BRANCH === 'main'
    ? process.env.URL
    : process.env.DEPLOY_URL || process.env.SUPERTOKENS_API_DOMAIN

/**
 * websiteDomain setting
 *
 * Handles local dev as well as Netlify environment settings for deploy previews and production branches
 */
const websiteDomain =
  process.env.BRANCH === 'main'
    ? process.env.URL
    : process.env.DEPLOY_URL || process.env.SUPERTOKENS_WEBSITE_DOMAIN

console.log(apiDomain, '>>> SuperTokens apiDomain')
console.log(websiteDomain, '>>> SuperTokens websiteDomain')
console.log(process.env.BRANCH, '>>> Netlify process.env.BRANCH ')

export const config = {
  framework: 'awsLambda',
  isInServerlessEnv: true,
  appInfo: {
    apiDomain,
    websiteDomain,
    apiGatewayPath: process.env.SUPERTOKENS_API_GATEWAY_PATH,
    appName: 'SuperTokens RedwoodJS',
    websiteBasePath: '/supertokens',
    apiBasePath: '/auth',
  },
  supertokens: {
    connectionURI: process.env.SUPERTOKENS_CONNECTION_URI,
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      providers: [
        Google({
          clientId: process.env.SUPERTOKENS_GOOGLE_CLIENT_ID,
          clientSecret: process.env.SUPERTOKENS_GOOGLE_CLIENT_SECRET,
        }),
        Github({
          clientId: process.env.SUPERTOKENS_GITHUB_CLIENT_ID,
          clientSecret: process.env.SUPERTOKENS_GITHUB_CLIENT_SECRET,
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
      jwt: { enable: true },
    }),
  ],
}
