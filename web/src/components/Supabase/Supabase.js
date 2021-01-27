import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

import AuthResults from 'src/components/AuthResults'

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const SupabaseUserTools = ({ scheme }) => {
  const [authScheme] = useState(scheme)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { logIn, logOut, signUp, isAuthenticated, type } = useAuth()

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  // const disableLogin = () => {
  //   if (authScheme === 'email' || authScheme === 'magiclink') {

  //   }
  //      !email.length && !isAuthenticated
  //     : !isAuthenticated
  // }

  const showEmail = () => {
    return (
      (authScheme === 'email' || authScheme === 'magiclink') && !isAuthenticated
    )
  }

  const showSignUp = () => {
    return authScheme === 'email' && !isAuthenticated
  }

  return (
    <div>
      <h2>
        {type} {authScheme} authentication
      </h2>
      {isAuthenticated ? 'Authenticated' : 'Not Authenticated'} <br />
      <form>
        {showEmail() && (
          <input
            type="email"
            placeholder="email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}

        <br />

        {showSignUp() && (
          <input
            type="password"
            placeholder="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
      </form>
      <br />
      <button
        // disabled={disableLogin()}
        onClick={async () => {
          if (!isAuthenticated) {
            try {
              const { user, error } = await logIn({
                email,
                password,
                provider:
                  authScheme === 'email' || authScheme === 'magiclink'
                    ? null
                    : authScheme,
              })

              if (error) {
                console.debug(error)
                alert(error)
              } else {
                console.debug(user)
                resetForm()
              }
            } catch (error) {
              console.error(error)
              alert(error)
            }
          } else {
            await logOut()
          }
        }}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      {showSignUp() && (
        <button
          disabled={isAuthenticated || email.length == 0}
          onClick={async () => {
            try {
              const { user, error } = await signUp({
                email,
                password,
              })
              console.debug(user)
              console.debug(error)
              resetForm()
            } catch (error) {
              console.error(error)
              alert(error)
            }
          }}
        >
          Sign Up
        </button>
      )}
      <br />
      <AuthResults scheme={scheme} />
    </div>
  )
}

export default ({ scheme }) => {
  return (
    <AuthProvider client={supabase} type="supabase">
      <SupabaseUserTools scheme={scheme} />
    </AuthProvider>
  )
}
