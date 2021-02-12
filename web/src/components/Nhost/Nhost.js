import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { createClient } from 'nhost-js-sdk'
import { useState } from 'react'
import AuthResults from '../AuthResults'

const nhost = createClient({
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
      <h2>Nhost</h2>
      {isAuthenticated ? 'Authenticated' : 'Not Authenticated'} <br />
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
      {method === 'password' && (
        <div style={{ marginTop: 10 }}>
          <input
            type="email"
            placeholder="email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
        </div>
      )}
      <button
        disabled={
          !isAuthenticated && !isOAuth() && (!email.length || !password.length)
        }
        onClick={handleLogInOut}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      <button
        disabled={isOAuth() || !email.length || !password.length}
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      <br />
      <AuthResults />
    </div>
  )
}

export default () => {
  return (
    <AuthProvider client={nhost} type="nhost">
      <NhostUserTools />
    </AuthProvider>
  )
}
