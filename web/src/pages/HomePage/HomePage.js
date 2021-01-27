import { Link, routes } from '@redwoodjs/router'
import UserTools from 'src/components/UserTools'
import Auth0 from 'src/components/Auth0'
import AzureActiveDirectory from 'src/components/AzureActiveDirectory'
import Netlify from 'src/components/Netlify'
import MagicLink from 'src/components/MagicLink'
import Firebase from 'src/components/Firebase'

const HomePage = () => {
  return (
    <div>
      <h1>@redwoodjs/auth in action</h1>
      <p>
        This page demonstrates the authentication providers that RedwoodJS
        supports.
      </p>
      <Auth0>
        <UserTools
          logOutOptions={{
            returnTo: process.env.AUTH0_REDIRECT_URI || process.env.DEPLOY_URL,
          }}
        />
      </Auth0>
      <AzureActiveDirectory>
        <UserTools />
      </AzureActiveDirectory>{' '}
      <MagicLink />
      <Netlify>
        <UserTools />
      </Netlify>{' '}
      <Firebase />
      <p>
        <Link to={routes.supabase()}>Supabase Auth</Link>
      </p>
    </div>
  )
}

export default HomePage
