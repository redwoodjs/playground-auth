import Auth0 from 'src/components/Auth0'
import AzureActiveDirectory from 'src/components/AzureActiveDirectory'
import Netlify from 'src/components/Netlify'
import MagicLink from 'src/components/MagicLink'
import Firebase from 'src/components/Firebase'
import Supabase from 'src/components/Supabase'

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
        <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
          <Auth0 />
        </li>
        <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
          <AzureActiveDirectory />
        </li>
        <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
          <Netlify />
        </li>
        <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
          <MagicLink />
        </li>
        <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
          <Firebase />
        </li>
        <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
          <Supabase />
        </li>
      </ul>
    </div>
  )
}

export default HomePage
