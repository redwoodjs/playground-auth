import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { Magic } from 'magic-sdk'
import { useState } from 'react'

const m = new Magic(process.env.MAGIC_API_KEY)

const MagicLinkUserTools = () => {
  const [logInEmail, setLogInEmail] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')

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
          onChange={(e) => setLogInEmail(e.target.value)}
        />
        <button
          disabled={!logInEmail.length && !isAuthenticated}
          onClick={async () => {
            if (!isAuthenticated && logInEmail.length) {
              await logIn({ email: logInEmail })
            } else {
              await logOut()
            }
          }}
        >
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </button>
      </form>
      <form action="#">
        <input
          type="email"
          placeholder="email address"
          required
          onChange={(e) => setSignUpEmail(e.target.value)}
        />
        <button
          disabled={!signUpEmail.length && !isAuthenticated}
          onClick={async () => {
            if (!isAuthenticated && signUpEmail.length) {
              await signUp({ email: signUpEmail })
            } else {
              await logOut()
            }
          }}
        >
          {isAuthenticated ? 'Log Out' : 'Sign Up'}
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
