```js
import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'

const MagicLink = () => {
  const [email, setEmail] = useState('')

  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <form action="#">
      <input
        type="email"
        placeholder="email address"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        disabled={!email.length && !isAuthenticated}
        onClick={async () => {
          if (!isAuthenticated && email.length) {
            await logIn({ email })
          } else {
            await logOut()
          }
        }}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>

      {!isAuthenticated && (
        <button
          disabled={!email.length && !isAuthenticated}
          onClick={async () => {
            if (!isAuthenticated && email.length) {
              await signUp({ email })
            }
          }}
        >
          Sign Up
        </button>
      )}
    </form>
  )
}

export default MagicLink
```
