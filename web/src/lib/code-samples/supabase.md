```js
import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'

const Supabase = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { client, logIn, logOut, signUp, isAuthenticated, reauthenticate } = useAuth()

  // Here you can subscribe to events
  client.auth.onAuthStateChange(async (event) => {
    if (event === 'SIGNED_IN') {
      console.debug('>> in onAuthStateChange', event)
    }

    if (event === 'SIGNED_OUT') {
      console.debug('>> in onAuthStateChange', event)
      // reset the auth state to ensure no longer authenticated in all tabs
      await reauthenticate()
    }

    if (event === 'TOKEN_REFRESHED') {
      console.debug('>> in onAuthStateChange', event)
    }
  })

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }

  return (
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
      <button
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
    </>
  )
}

export default Supabase
```
