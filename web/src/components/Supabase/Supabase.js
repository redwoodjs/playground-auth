import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import { toast } from '@redwoodjs/web/toast'

import AuthResults from 'src/components/AuthResults'
import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import Badge from 'src/components/Badge'

import logoApple from '../../lib/images/thirdparty-logos/apple.png'
import logoAzure from '../../lib/images/thirdparty-logos/azure.png'
import logoDiscord from '../../lib/images/thirdparty-logos/discord.png'
import logoBitbucket from '../../lib/images/thirdparty-logos/bitbucket.png'
import logoFacebook from '../../lib/images/thirdparty-logos/facebook.png'
import logoGithub from '../../lib/images/thirdparty-logos/github.png'
import logoGitlab from '../../lib/images/thirdparty-logos/gitlab.png'
import logoGoogle from '../../lib/images/thirdparty-logos/google.png'
import logoTwitter from '../../lib/images/thirdparty-logos/twitter.png'
import logoTwitch from '../../lib/images/thirdparty-logos/twitch.png'
import ThirdPartyProviderContainer from '../ThirdPartyProviderContainer'

export const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const thirdPartyProviders = [
  { value: 'github', label: 'Github', logo: logoGithub },
  { value: 'google', label: 'Google', logo: logoGoogle },
  // Below are available but not configured in Supabase yet
  { value: 'apple', label: 'Apple', logo: logoApple, disabled: true },
  { value: 'discord', label: 'Discord', logo: logoDiscord, disabled: true },
  { value: 'twitter', label: 'Twitter', logo: logoTwitter, disabled: true },
  { value: 'twitch', label: 'Twitch', logo: logoTwitch, disabled: true },
  { value: 'gitlab', label: 'Gitlab', logo: logoGitlab, disabled: true },
  { value: 'azure', label: 'Azure', logo: logoAzure, disabled: true },
  { value: 'facebook', label: 'Facebook', logo: logoFacebook, disabled: true },
  {
    value: 'bitbucket',
    label: 'Bitbucket',
    logo: logoBitbucket,
    disabled: true,
  },
]

const handleSbError = (error) => {
  console.log(error)
  const supabaseError = JSON.parse(error.message)
  toast.error(supabaseError.error_description)
}

const SupabaseUserTools = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  useEffect(() => {
    if (loading && isAuthenticated) {
      setLoading(false)
    }
  }, [isAuthenticated, loading])

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  const handleExistingUser = async () => {
    if (!isAuthenticated && email.length) {
      try {
        await logIn({ email, password })
        resetForm()
      } catch (e) {
        handleSbError(e)
      }
    } else {
      await logOut()
    }
  }

  const handleSignup = async () => {
    if (!isAuthenticated && email.length && password.length) {
      try {
        await signUp({ email, password })
        resetForm()
      } catch (e) {
        handleSbError(e)
      }
    }
  }

  return (
    <div>
      <Badge />
      {!isAuthenticated && (
        <>
          <form>
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
          </form>
        </>
      )}
      <button
        type="submit"
        className="btn"
        disabled={(!email.length || !password.length) && !isAuthenticated}
        onClick={handleExistingUser}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      {!isAuthenticated && (
        <>
          <button
            className="btn btn-alt"
            disabled={(!email.length || !password.length) && !isAuthenticated}
            onClick={handleSignup}
          >
            Sign Up
          </button>

          <br />

          <ThirdPartyProviderContainer
            providers={thirdPartyProviders}
            loading={loading}
            onProviderClick={async (e) => {
              setLoading(true)
              await logIn({
                provider: e.target.value,
              })
            }}
          />
        </>
      )}
      {isAuthenticated && <PollCurrentVersionCell />}
      <AuthResults />
    </div>
  )
}

export default () => {
  return (
    <AuthProvider client={supabaseClient} type="supabase">
      {/* Add apollo provider here, so that useAuth gets passed in for Cells,etc.  */}
      <RedwoodApolloProvider>
        <SupabaseUserTools />
      </RedwoodApolloProvider>
    </AuthProvider>
  )
}
