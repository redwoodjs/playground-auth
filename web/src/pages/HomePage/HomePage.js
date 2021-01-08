// Auth Providers
import Auth0 from 'src/components/Auth0'
import AzureActiveDirectory from 'src/components/AzureActiveDirectory'
import Firebase from 'src/components/Firebase'
import MagicLink from 'src/components/MagicLink'
import Netlify from 'src/components/Netlify'
import Supabase from 'src/components/Supabase'

// Other
import UserTools from 'src/components/UserTools'
import Wrapper from 'src/components/Wrapper'

const HomePage = () => {
  return (
    <div>
      <h1>@redwoodjs/auth in action</h1>
      <p>
        This page demonstrates the authentication providers that redwood
        supports.
      </p>
      <Wrapper>
        <Auth0>
          <UserTools
            logOutOptions={{
              returnTo:
                process.env.AUTH0_REDIRECT_URI || process.env.DEPLOY_URL,
            }}
          />
        </Auth0>
      </Wrapper>

      <Wrapper>
        <AzureActiveDirectory>
          <UserTools />
        </AzureActiveDirectory>
      </Wrapper>

      <Wrapper>
        <Netlify>
          <UserTools />
        </Netlify>
      </Wrapper>

      <Wrapper>
        <MagicLink />
      </Wrapper>

      <Wrapper>
        <Firebase>
          <UserTools />
        </Firebase>
      </Wrapper>

      <Wrapper>
        <Supabase />
      </Wrapper>
    </div>
  )
}

export default HomePage
