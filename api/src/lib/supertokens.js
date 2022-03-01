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
  process.env.CONTEXT === 'production'
    ? process.env.URL
    : process.env.DEPLOY_URL || process.env.SUPERTOKENS_API_DOMAIN

/**
 * websiteDomain setting
 *
 * Handles local dev as well as Netlify environment settings for deploy previews and production branches
 */
const websiteDomain =
  process.env.CONTEXT === 'production'
    ? process.env.URL
    : process.env.DEPLOY_URL || process.env.SUPERTOKENS_WEBSITE_DOMAIN

/**
 * apiBasePath setting
 *
 * Handles local dev as well as Netlify environment settings
 *
 * When deployed to Netlify, the apiBasePath needs the gateway path for the functions directory
 */
const apiBasePath = process.env.NETLIFY
  ? `${process.env.SUPERTOKENS_API_GATEWAY_PATH}/auth`
  : '/auth'

console.log(apiDomain, '>>> SuperTokens apiDomain')
console.log(websiteDomain, '>>> SuperTokens websiteDomain')
console.log(apiBasePath, '>>> SuperTokens apiBasePath')
console.log(process.env.CONTEXT, '>>> Netlify process.env.CONTEXT ')

export const config = {
  framework: 'awsLambda',
  isInServerlessEnv: true,
  appInfo: {
    apiDomain,
    websiteDomain,
    appName: 'SuperTokens RedwoodJS',
    websiteBasePath: '/supertokens',
    apiBasePath,
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
