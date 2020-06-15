import UserTools from 'src/components/UserTools'
import Auth0 from 'src/components/Auth0'
import Netlify from 'src/components/Netlify'
import MagicLink from 'src/components/MagicLink'
import Firebase from 'src/components/Firebase'

const HomePage = () => {
  return (
    <div>
      <h1>@redwoodjs/auth in action</h1>
      <p>
        This page demonstrates the authentication providers that redwood
        supports.
      </p>
      <Auth0>
        <UserTools />
      </Auth0>
      <Netlify>
        <UserTools />
      </Netlify>
      <MagicLink />
      <Firebase>
        <UserTools />
      </Firebase>
    </div>
  )
}

export default HomePage
