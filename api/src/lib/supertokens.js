import * as Sessions from 'supertokens-node/recipe/session'
import ThirdPartyEmailPassword, {
  Google,
  Github,
  Apple,
} from 'supertokens-node/recipe/thirdpartyemailpassword'

/**
 * apiDomain setting
 *
 * Handles local dev as well as Netlify environment settings for deploy previews and production branches
 */
const apiDomain =
  process.env.CONTEXT === 'production'
    ? process.env.URL
    : process.env.DEPLOY_PRIME_URL || process.env.SUPERTOKENS_API_DOMAIN

/**
 * websiteDomain setting
 *
 * Handles local dev as well as Netlify environment settings for deploy previews and production branches
 */
const websiteDomain =
  process.env.CONTEXT === 'production'
    ? process.env.URL
    : process.env.DEPLOY_PRIME_URL || process.env.SUPERTOKENS_WEBSITE_DOMAIN

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

/**
 * jwksIssuerUrl setting
 *
 * Handles local dev as well as Netlify environment settings
 *
 * In some cases you may need to provide a custom issuer.
 * Since the JWKS endpoint is exposed via your backend,
 * JWT verification will fail because the service may not be able to
 * query your environment.
 *
 * The url is the apiDomain + apiBasePath
 *
 * Beware of extra "/" between apiDomain and apiBasePath on Netlify deploys as Netlify
 * adds a trailing "/" and that apiBasePath already has `auth`
 *
 * For example:
 * https://621f8d3114b49d00076fe888--redwood-playground-auth.netlify.app/.netlify/functions/auth
 * https://www.netlify.app/.netlify/functions/auth
 *
 * @see https://supertokens.com/docs/thirdpartyemailpassword/common-customizations/sessions/with-jwt/enabling-jwts#using-a-custom-issuer
 */
const jwksIssuerUrl = process.env.NETLIFY
  ? { issuer: `${apiDomain}${apiBasePath}` }
  : {}

console.log(apiDomain, '>>> SuperTokens apiDomain')
console.log(websiteDomain, '>>> SuperTokens websiteDomain')
console.log(apiBasePath, '>>> SuperTokens apiBasePath')
console.log(process.env.CONTEXT, '>>> Netlify process.env.CONTEXT ')
console.log(jwksIssuerUrl, '>>> SuperTokens jwksIssuerUrl ')

export const config = {
  framework: 'awsLambda',
  isInServerlessEnv: true,
  appInfo: {
    apiDomain,
    websiteDomain,
    appName: 'SuperTokens Test',
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
      jwt: { enable: true, ...jwksIssuerUrl },
    }),
  ],
}
