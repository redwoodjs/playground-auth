import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { NhostClient } from '@nhost/nhost-js'
import { useState } from 'react'

import AuthResults from 'src/components/AuthResults'
import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'
import Badge from 'src/components/Badge'
import logoGithub from '../../lib/images/thirdparty-logos/github.png'
import logoDiscord from '../../lib/images/thirdparty-logos/discord.png'
import logoGoogle from '../../lib/images/thirdparty-logos/google.png'
import logoFacebook from '../../lib/images/thirdparty-logos/facebook.png'
import logoSpotify from '../../lib/images/thirdparty-logos/spotify.png'

import ThirdPartyProviderContainer from '../ThirdPartyProviderContainer'

export const nhostClient = new NhostClient({
  backendUrl: process.env.NHOST_BACKEND_URL,
})

export const thirdPartyProviders = [
  { value: 'github', label: 'GitHub', logo: logoGithub },
  { value: 'discord', label: 'Discord', logo: logoDiscord },
  { value: 'google', label: 'Google', logo: logoGoogle, disabled: true },
  { value: 'facebook', label: 'Facebook', logo: logoFacebook, disabled: true },
  { value: 'spotify', label: 'Spotify', logo: logoSpotify, disabled: true },
  { value: 'google', label: 'Google', logo: logoGoogle, disabled: true },
]

const NhostUserTools = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  const resetForm = () => {
    setEmail('')
    setPassword('')
    setError(null)
  }

  const handleLogInOut = async () => {
    setError(null)

    if (!isAuthenticated) {
      try {
        await logIn({ email, password })
        resetForm()
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
      {error && <p>{error}</p>}

      {!isAuthenticated && (
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
        type="submit"
        className="btn"
        disabled={!isAuthenticated && (!email.length || !password.length)}
        onClick={handleLogInOut}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      {!isAuthenticated && (
        <button
          className="btn btn-alt"
          disabled={!email.length || !password.length}
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      )}

      <br />

      <ThirdPartyProviderContainer
        providers={thirdPartyProviders}
        loading={loading}
        onProviderClick={async (e) => {
          setLoading(true)
          await logIn({
            provider: e.target.value,
            options: { redirectTo: `${process.env.URL}/nhost/welcome` },
          })
        }}
      />
      {isAuthenticated && <PollCurrentVersionCell />}
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
