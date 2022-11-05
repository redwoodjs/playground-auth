import SuperTokens from 'supertokens-auth-react'
import Session from 'supertokens-auth-react/recipe/session'
import ThirdPartyEmailPassword, {
  Github,
  Google,
  Apple,
} from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

import { createSuperTokensAuth } from '@redwoodjs/auth-providers-web'
import { isBrowser } from '@redwoodjs/prerender/browserUtils'

// const websiteDomain =
//   process.env.SUPERTOKENS_WEBSITE_DOMAIN || 'http://localhost:8910'
// const apiDomain =
//   process.env.SUPERTOKENS_API_DOMAIN ||
//   `${websiteDomain}${process.env.RWJS_API_URL}`

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
 * Handles local dev as well as Netlify environment settings. When deployed to
 * Netlify, the apiBasePath needs the gateway path for the functions directory
 */
const apiBasePath = process.env.NETLIFY
  ? `${process.env.SUPERTOKENS_API_GATEWAY_PATH}/auth`
  : '/auth'

console.log(process.env.CONTEXT, '<<< process.env.CONTEXT')
console.log(apiDomain, '<<< apiDomain')
console.log(websiteDomain, '<<< websiteDomain')
console.log(apiBasePath, '<<< apiBasePath')

const superTokensClient = {
  authRecipe: ThirdPartyEmailPassword,
  sessionRecipe: Session,
}

isBrowser &&
  SuperTokens.init({
    appInfo: {
      apiDomain,
      websiteDomain,
      appName: 'SuperTokens RedwoodJS',
      websiteBasePath: '/supertokens',
      apiBasePath: '/auth',
    },
    recipeList: [
      Session.init(),
      ThirdPartyEmailPassword.init({
        style: {
          button: {
            backgroundColor: 'rgb(191 71 34)',
            borderColor: 'rgb(191 71 34)',
          },
        },
        getRedirectionURL: async (context) => {
          if (context.action === 'SUCCESS') {
            if (context.redirectToPath !== undefined) {
              // we are navigating back to where the user was before they authenticated
              return context.redirectToPath
            }
            return '/supertokens'
          }
          return undefined
        },
        signInAndUpFeature: {
          disableDefaultUI: true,
          style: {
            container: {
              width: 'auto !important',
              boxShadow: 'none',
            },
          },
          providers: [Github.init(), Google.init(), Apple.init()],
        },
      }),
    ],
  })

export const { AuthProvider, useAuth } =
  createSuperTokensAuth(superTokensClient)
