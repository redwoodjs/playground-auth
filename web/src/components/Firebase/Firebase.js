import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { initializeApp, getApp, getApps } from 'firebase/app'
import * as firebaseAuth from '@firebase/auth'
import { useState } from 'react'

import AuthResults from 'src/components/AuthResults'
import LogInOutButtons from 'src/components/LogInOutButtons/LogInOutButtons'
import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'
import Badge from 'src/components/Badge'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  appId: process.env.FIREBASE_APP_ID,
}

const firebaseApp = ((config) => {
  const apps = getApps()
  if (!apps.length) {
    initializeApp(config)
  }
  return getApp()
})(firebaseConfig)

export const firebaseClient = {
  firebaseAuth,
  firebaseApp,
}

const FirebaseUserTools = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [provider, setProvider] = useState('google.com')

  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <div>
      <Badge />
      <label htmlFor="provider" style={{ display: 'block', marginTop: 10 }}>
        Provider
      </label>
      {/* Disabled are not setup in linked Firebase account */}
      <select
        value={provider}
        onChange={(event) => setProvider(event.target.value)}
      >
        <option value="google.com">Google (default)</option>
        <option disabled value="apple.com">
          Apple
        </option>
        <option disabled value="facebook.com">
          Facebook
        </option>
        <option value="github.com">Github</option>
        <option disabled value="microsoft.com">
          Microsoft
        </option>
        <option value="twitter.com">Twitter</option>
        <option value="password">Password</option>
      </select>

      {provider !== 'password' ? (
        <LogInOutButtons logInOptions={provider} signUpOptions={provider} />
      ) : (
        <>
          {isAuthenticated ? (
            <button className="btn" onClick={() => logOut()}>
              Log Out
            </button>
          ) : (
            <div style={{ marginTop: 10 }}>
              <input
                type="email"
                placeholder="email address"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="btn"
                disabled={
                  (!email.length || !password.length) && !isAuthenticated
                }
                onClick={() => logIn({ email, password })}
              >
                Log In
              </button>
              <button
                className="btn btn-alt"
                disabled={
                  (!email.length || !password.length) && !isAuthenticated
                }
                onClick={() => signUp({ email, password })}
              >
                Sign Up
              </button>
            </div>
          )}
        </>
      )}
      <br />
      {isAuthenticated && <PollCurrentVersionCell />}

      <AuthResults />
    </div>
  )
}

export default (props) => {
  return (
    // Alternatively can add prop skipFetchCurrentUser instead of setting up firebase-admin app in api/lib/auth.js
    <AuthProvider client={firebaseClient} type="firebase" {...props}>
      <RedwoodApolloProvider>
        <FirebaseUserTools />
      </RedwoodApolloProvider>
    </AuthProvider>
  )
}
