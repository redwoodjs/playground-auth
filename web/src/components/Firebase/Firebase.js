import { AuthProvider, useAuth } from '@redwoodjs/auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { useState } from 'react'
import AuthResults from '../AuthResults'
import LogInOutButtons from '../LogInOutButtons/LogInOutButtons'

const firebaseClientConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}

const firebaseClient = ((config) => {
  firebase.initializeApp(config)
  return firebase
})(firebaseClientConfig)

const FirebaseUserTools = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <div>
      <h2>firebase</h2>
      {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}{' '}
      <h3>Google Login (default)</h3>
      <LogInOutButtons />
      {/* Other providers require setup in Firebase account */}
      <h3>Apple Login</h3>
      <LogInOutButtons logInOptions="apple.com" signUpOptions="apple.com" />
      <h3>Facebook Login</h3>
      <LogInOutButtons
        logInOptions="facebook.com"
        signUpOptions="facebook.com"
      />
      <h3>Github Login</h3>
      <LogInOutButtons logInOptions="github.com" signUpOptions="github.com" />
      <h3>Microsoft Login</h3>
      <LogInOutButtons
        logInOptions="microsoft.com"
        signUpOptions="microsoft.com"
      />
      <h3>Twitter Login</h3>
      <LogInOutButtons logInOptions="twitter.com" signUpOptions="twitter.com" />
      <h3>Password Login</h3>
      {isAuthenticated ? (
        <button onClick={() => logOut()}>Log Out</button>
      ) : (
        <>
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
            disabled={(!email.length || !password.length) && !isAuthenticated}
            onClick={() => logIn({ email, password })}
          >
            Log In
          </button>
          <button
            disabled={(!email.length || !password.length) && !isAuthenticated}
            onClick={() => signUp({ email, password })}
          >
            Sign Up
          </button>
        </>
      )}
      <br />
      <AuthResults />
    </div>
  )
}

export default (props) => {
  return (
    <AuthProvider client={firebaseClient} type="firebase" {...props}>
      <FirebaseUserTools />
    </AuthProvider>
  )
}
