import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { Magic } from 'magic-sdk'
import { useState } from 'react'

const m = new Magic(process.env.MAGIC_SECRET_KEY)

const MagicLinkUserTools = () => {
  const [email, setemail] = useState('')

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
      {isAuthenticated ? 'Authenticated' : 'Not Authenticated'} <br />
      <form action="#">
        <input
          type="email"
          placeholder="email address"
          required
          onChange={(e) => setemail(e.target.value)}
        />
        <button
          disabled={!email.length && !isAuthenticated}
          onClick={async () => {
            if (!isAuthenticated && email.length) {
              await logIn({ email })
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
                await signUp({ email: email })
              }
            }}
          >
            Sign Up
          </button>
        )}
      </form>
      <br />
      <code>
        userMetaData:
        <br />
        {JSON.stringify(userMetadata, 2)}
      </code>
      <br />
      <code>
        currentUser:
        <br />
        {JSON.stringify(currentUser, 2)}
      </code>
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
