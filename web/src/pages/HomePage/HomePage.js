import UserTools from 'src/components/UserTools'
import Auth0 from 'src/components/Auth0'
import AzureActiveDirectory from 'src/components/AzureActiveDirectory'
import Netlify from 'src/components/Netlify'
import MagicLink from 'src/components/MagicLink'
import Firebase from 'src/components/Firebase'
import Supabase from 'src/components/Supabase'

const HomePage = () => {
  return (
    <div>
      <h1>@redwoodjs/auth in action</h1>
      <p>
        This page demonstrates the authentication providers that redwood
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
      </AzureActiveDirectory>
      <Netlify>
        <UserTools />
      </Netlify>
      <MagicLink />
      <Firebase />
      <Supabase />
    </div>
  )
}

export default HomePage
