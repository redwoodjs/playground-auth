import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { Magic } from 'magic-sdk'
import { useState } from 'react'

import AuthResults from 'src/components/AuthResults'

const m = new Magic(process.env.MAGIC_SECRET_KEY)

const MagicLinkUserTools = () => {
  const [email, setEmail] = useState('')

  const {
    logIn,
    logOut,
    signUp,
    isAuthenticated,
    currentUser,
    userMetadata,
    type,
  } = useAuth()

  return (
    <div>
      <h2>{type}</h2>
      <p>{isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</p>
      <form action="#">
        <input
          type="email"
          placeholder="email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
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
            className="button-alt"
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
      <hr />
      <AuthResults />
    </div>
  )
}

export default () => {
  return (
    <AuthProvider client={m} type="magicLink">
      <MagicLinkUserTools />
    </AuthProvider>
  )
}
