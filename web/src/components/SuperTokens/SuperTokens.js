import { AuthProvider, useAuth } from '@redwoodjs/auth'

import UserTools from '../UserTools/UserTools'
import { RedwoodApolloProvider } from '@redwoodjs/web/dist/apollo'
import Session from 'supertokens-auth-react/recipe/session'

import SuperTokens from 'supertokens-auth-react'
import Sessions from 'supertokens-auth-react/recipe/session'
import ThirdPartyEmailPassword, {
  Github,
  Google,
  Apple,
  SignInAndUp,
} from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

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

export const initializeSuperTokens = () => {
  SuperTokens.init({
    appInfo: {
      apiDomain,
      websiteDomain,
      apiGatewayPath: process.env.SUPERTOKENS_API_GATEWAY_PATH,
      appName: 'SuperTokens RedwoodJS',
      websiteBasePath: '/supertokens',
      apiBasePath,
    },
    recipeList: [
      Sessions.init(),
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
          disableDefaultImplementation: true,
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
}

export const SuperTokensClient = {
  authRecipe: ThirdPartyEmailPassword,
  sessionRecipe: Session,
}

const Content = (_props) => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <div className="p-4 text-lg">Loading profile ...</div>
  }

  if (isAuthenticated) {
    return <UserTools />
  }

  return <SignInAndUp />
}

export default (props) => {
  console.log(apiDomain, '>>> SuperTokens apiDomain')
  console.log(websiteDomain, '>>> SuperTokens websiteDomain')
  console.log(process.env.CONTEXT, '>>> Netlify process.env.CONTEXT ')

  return (
    <AuthProvider client={SuperTokensClient} type="supertokens" {...props}>
      <RedwoodApolloProvider>
        <Content />
      </RedwoodApolloProvider>
    </AuthProvider>
  )
}
