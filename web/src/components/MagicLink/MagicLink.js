import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { RedwoodApolloProvider } from '@redwoodjs/web/dist/apollo'
import { Magic } from 'magic-sdk'
import { useState } from 'react'

import AuthProviderCardHeading from 'src/components/AuthProviderCardHeading'
import AuthResults from 'src/components/AuthResults'
import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'

const m = new Magic(process.env.MAGICLINK_PUBLIC)

const MagicLinkUserTools = () => {
  const [email, setEmail] = useState('')

  const { logIn, logOut, signUp, isAuthenticated, type } = useAuth()

  return (
    <div>
      <AuthProviderCardHeading type={type} />
      {isAuthenticated ? 'Authenticated' : 'Not Authenticated'} <br />
      {isAuthenticated && <PollCurrentVersionCell />}
      <form action="#">
        <input
          className="mb-5 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          type="email"
          placeholder="email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-full flex justify-center mb-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={!email.length && !isAuthenticated}
          onClick={async () => {
            if (!isAuthenticated && email.length) {
              await logIn({ email, showUI: true })
            } else {
              await logOut()
            }
          }}
        >
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </button>

        {!isAuthenticated && (
          <button
            className="w-full flex justify-center mb-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            disabled={!email.length && !isAuthenticated}
            onClick={async () => {
              if (!isAuthenticated && email.length) {
                await signUp({ email, showUI: true })
              }
            }}
          >
            Sign Up
          </button>
        )}
      </form>
      <br />
      <AuthResults />
    </div>
  )
}

export default () => {
  return (
    <AuthProvider client={m} type="magicLink">
      {/* Add apollo provider here, so that useAuth gets passed in for Cells,etc.  */}
      <RedwoodApolloProvider>
        <MagicLinkUserTools />
      </RedwoodApolloProvider>
    </AuthProvider>
  )
}
