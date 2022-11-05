import SuperTokens from 'supertokens-auth-react'
import Session from 'supertokens-auth-react/recipe/session'
import Sessions from 'supertokens-auth-react/recipe/session'
import ThirdPartyEmailPassword, {
  Github,
  Google,
  Apple,
  SignInAndUp,
} from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

import { RedwoodApolloProvider } from '@redwoodjs/web/dist/apollo'

import { useAuth } from 'src/supertokensAuth'

import UserTools from '../UserTools/UserTools'

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

const Content = () => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <div className="p-4 text-lg">Loading profile ...</div>
  }

  if (isAuthenticated) {
    return <UserTools useAuth={useAuth} />
  }

  return <SignInAndUp />
}

export default () => {
  const { logIn } = useAuth()

  return (
    <RedwoodApolloProvider useAuth={useAuth}>
      <button
        onClick={() => {
          logIn()
        }}
      >
        LogIn
      </button>
      <Content />
    </RedwoodApolloProvider>
  )
}
