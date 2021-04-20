import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

import AuthResults from 'src/components/AuthResults'
import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import Badge from 'src/components/Badge'

import logoGoogle from '../../lib/images/thirdparty-logos/google.png'
import logoGithub from '../../lib/images/thirdparty-logos/github.png'
import logoGitlab from '../../lib/images/thirdparty-logos/gitlab.png'
import logoAzure from '../../lib/images/thirdparty-logos/azure.png'
import logoFacebook from '../../lib/images/thirdparty-logos/facebook.png'
import logoBitbucket from '../../lib/images/thirdparty-logos/bitbucket.png'
import ThirdPartyProviderContainer from '../ThirdPartyProviderContainer'

export const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const thirdPartyProviders = [
  { value: 'github', label: 'Github', logo: logoGithub },
  { value: 'google', label: 'Google', logo: logoGoogle },
  // Below are available but not configured in Supabase yet
  { value: 'gitlab', label: 'Gitlab', logo: logoGitlab, disabled: true },
  { value: 'azure', label: 'Azure', logo: logoAzure, disabled: true },
  { value: 'facebook', label: 'Facbeook', logo: logoFacebook, disabled: true },
  {
    value: 'bitbucket',
    label: 'Bitbucket',
    logo: logoBitbucket,
    disabled: true,
  },
]

const SupabaseUserTools = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

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
        console.log(e)
        const supabaseError = JSON.parse(e.message)
        alert(supabaseError.error_description)
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
        const supabaseError = JSON.parse(e.message)
        alert(supabaseError.msg)
        console.log(e)
      }
    }
  }

  return (
    <div>
      <Badge />
      {isAuthenticated && <PollCurrentVersionCell />}
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
      <button
        type="submit"
        className="btn"
        disabled={(!email.length || !password.length) && !isAuthenticated}
        onClick={handleExistingUser}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      {!isAuthenticated && (
        <button
          className="btn btn-alt"
          disabled={(!email.length || !password.length) && !isAuthenticated}
          onClick={handleSignup}
        >
          Sign Up
        </button>
      )}
      <br />

      <ThirdPartyProviderContainer
        providers={thirdPartyProviders}
        onProviderClick={
          (e) =>
            logIn({
              provider: e.target.value,
            }) // login works for login/signup
        }
      />
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
