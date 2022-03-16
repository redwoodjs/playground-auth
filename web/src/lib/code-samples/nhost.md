```javascript
import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'

const Nhost = () => {
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

  const handleLogInOut = async () => {
    setError(null)

    if (!isAuthenticated) {
      try {
        await logIn({ provider: method })
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
        disabled={
          !isAuthenticated && (!email.length || !password.length)
        }
        onClick={handleLogInOut}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      {!isAuthenticated && (
        <button
          disabled={!email.length || !password.length}
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      )}
    </div>
  )
}

export default Nhost
```
