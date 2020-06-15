import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { Magic } from 'magic-sdk'
import { useState } from 'react'

const m = new Magic('pk_test_3471FA4515E86534')

const MagicLinkUserTools = () => {
  const [email, setEmail] = useState('')
  const {
    logIn,
    logOut,
    isAuthenticated,
    currentUser,
    userMetadata,
    type,
  } = useAuth()

  return (
    <>
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
          disabled={!email.length}
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
    </>
  )
}

export default () => {
  return (
    <AuthProvider client={m} type="magicLink">
      <MagicLinkUserTools />
    </AuthProvider>
  )
}
