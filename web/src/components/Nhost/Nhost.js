import { useState } from 'react'

import { createClient } from 'nhost-js-sdk'

import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import AuthResults from 'src/components/AuthResults'
import Badge from 'src/components/Badge'
import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'

export const nhostClient = createClient({
  baseURL: process.env.NHOST_BACKEND_URL,
  autoLogin: false,
})

const NhostUserTools = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [method, setMethod] = useState('password')
  const [error, setError] = useState(null)

  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setError(null)
  }

  const isOAuth = () => {
    return method !== 'password'
  }

  const handleLogInOut = async () => {
    setError(null)

    if (!isAuthenticated) {
      try {
        isOAuth()
          ? await logIn({ provider: method })
          : (await logIn({ email, password })) && resetForm()
      } catch (e) {
        console.log(e)
        setError(e.response.data.message)
      }
    } else {
      await logOut()
    }
  }

  const handleSignUp = async () => {
    setError(null)

    try {
      await signUp({ email, password })

      resetForm()
    } catch (e) {
      setError(e.response.data.message)
    }
  }

  return (
    <div>
      <Badge />
      {isAuthenticated && <PollCurrentVersionCell />}
      <label htmlFor="provider" style={{ display: 'block', marginTop: 10 }}>
        Provider
      </label>
      <select
        value={method}
        onChange={(event) => setMethod(event.target.value)}
      >
        <option value="password">Email/Password</option>
        <option value="github">GitHub</option>
      </select>
      {error && <p>{error}</p>}
      {!isAuthenticated && method === 'password' && (
        <div style={{ marginTop: 10 }}>
          <input
            type="email"
            placeholder="email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      )}
      <button
        className="btn"
        disabled={
          !isAuthenticated && !isOAuth() && (!email.length || !password.length)
        }
        onClick={handleLogInOut}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      {!isAuthenticated && (
        <button
          className="btn btn-alt"
          disabled={isOAuth() || !email.length || !password.length}
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      )}
      <br />
      <AuthResults />
    </div>
  )
}

export default () => {
  return (
    <AuthProvider client={nhostClient} type="nhost">
      <RedwoodApolloProvider>
        <NhostUserTools />
      </RedwoodApolloProvider>
    </AuthProvider>
  )
}
