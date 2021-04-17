import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

import AuthProviderCardHeading from 'src/components/AuthProviderCardHeading'
import AuthResults from 'src/components/AuthResults'
import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import Badge from 'src/components/Badge'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const SupabaseUserTools = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { logIn, logOut, signUp, isAuthenticated, type } = useAuth()

  const resetForm = () => {
    setEmail('')
    setPassword('')
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
        className="btn"
        disabled={(!email.length || !password.length) && !isAuthenticated}
        onClick={async () => {
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
        }}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      {!isAuthenticated && (
        <button
          className="btn btn-alt"
          disabled={(!email.length || !password.length) && !isAuthenticated}
          onClick={async () => {
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
          }}
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
    <AuthProvider client={supabase} type="supabase">
      {/* Add apollo provider here, so that useAuth gets passed in for Cells,etc.  */}
      <RedwoodApolloProvider>
        <SupabaseUserTools />
      </RedwoodApolloProvider>
    </AuthProvider>
  )
}
