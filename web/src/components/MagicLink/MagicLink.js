import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { RedwoodApolloProvider } from '@redwoodjs/web/dist/apollo'
import { Magic } from 'magic-sdk'
import { useState } from 'react'

import AuthProviderCardHeading from 'src/components/AuthProviderCardHeading'
import AuthResults from 'src/components/AuthResults'
import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'
import Badge from 'src/components/Badge'

const m = new Magic(process.env.MAGICLINK_PUBLIC)

const MagicLinkUserTools = () => {
  const [email, setEmail] = useState('')

  const { logIn, logOut, signUp, isAuthenticated, type } = useAuth()

  return (
    <div>
      <Badge />
      {isAuthenticated && <PollCurrentVersionCell />}
      <form action="#">
        <input
          type="email"
          placeholder="email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="btn"
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
            className="btn btn-alt"
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
