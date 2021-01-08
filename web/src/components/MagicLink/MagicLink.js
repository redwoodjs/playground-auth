import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { Magic } from 'magic-sdk'
import { useState } from 'react'

import AuthResults from 'src/components/AuthResults'

const m = new Magic(process.env.MAGIC_SECRET_KEY)

const MagicLinkUserTools = () => {
  const [email, setEmail] = useState('')

  const {
    // prettier-ignore
    logIn,
    logOut,
    signUp,
    isAuthenticated,
    type,
  } = useAuth()

  return (
    <div>
      <h2>{type}</h2>
      {isAuthenticated ? 'Authenticated' : 'Not Authenticated'} <br />
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
      <MagicLinkUserTools />
    </AuthProvider>
  )
}
