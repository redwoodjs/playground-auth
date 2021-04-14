import UserTools from 'src/components/UserTools'
import Auth0 from 'src/components/Auth0'
import AzureActiveDirectory from 'src/components/AzureActiveDirectory'
import Netlify from 'src/components/Netlify'
import MagicLink from 'src/components/MagicLink'
import Firebase from 'src/components/Firebase'
import Supabase from 'src/components/Supabase'

const HomePage = () => {
  return (
    <div className="px-wrap py-12">
      <div className="container gap-8 grid max-w-screen-xl mx-auto md:grid-cols-2 xl:grid-cols-3">
        <header className="md:col-span-2 xl:col-span-3">
          <h1 className="font-bold">
            <span style={{ letterSpacing: '-0.6px' }}>RedwoodJS:</span>{' '}
            @redwoodjs/auth in action
          </h1>
          <p>
            This page demonstrates the authentication providers that Redwood
            supports.
          </p>
        </header>
        <Auth0>
          <UserTools
            logOutOptions={{
              returnTo:
                process.env.AUTH0_REDIRECT_URI || process.env.DEPLOY_URL,
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
    </div>
  )
}

export default HomePage
