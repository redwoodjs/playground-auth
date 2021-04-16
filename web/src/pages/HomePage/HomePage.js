import Auth0 from 'src/components/Auth0'
import AzureActiveDirectory from 'src/components/AzureActiveDirectory'
import Netlify from 'src/components/Netlify'
import MagicLink from 'src/components/MagicLink'
import Firebase from 'src/components/Firebase'
import Supabase from 'src/components/Supabase'
import Card from 'src/components/Card/Card'

const HomePage = () => {
  return (
    <div className="max-w-7xl py-5 mx-auto sm:px-6 lg:px-8">
      <h1 className="text-lg pb-5 leading-6 font-medium text-gray-900 capitalize">
        @redwoodjs/auth in action
      </h1>
      <p className="text-md pb-5">
        This page demonstrates authentication providers supported by{' '}
        <a
          className="underline"
          href="https://www.redwoodjs.com/authentication"
          targer="_blank"
        >
          RedwoodJS
        </a>
        .
      </p>
      <ul className="space-y-3">
        <Card>
          <Auth0 />
        </Card>
        <Card>
          <AzureActiveDirectory />
        </Card>
        <Card>
          <Netlify />
        </Card>
        <Card>
          <MagicLink />
        </Card>
        <Card>
          <Firebase />
        </Card>
        <Card>
          <Supabase />
        </Card>
      </ul>
    </div>
  )
}

export default HomePage
