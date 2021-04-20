```js
import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'

const Firebase = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [provider, setProvider] = useState('google.com')

  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <div>
      <label htmlFor="provider">
        Provider
      </label>
      <select
        value={provider}
        onChange={(event) => setProvider(event.target.value)}
      >
        <option value="google.com">Google (default)</option>
        <option value="apple.com">
          Apple
        </option>
        <option value="facebook.com">
          Facebook
        </option>
        <option value="github.com">Github</option>
        <option value="microsoft.com">
          Microsoft
        </option>
        <option value="twitter.com">Twitter</option>
        <option value="password">Password</option>
      </select>

      {provider !== 'password' ? (
        <button
          onClick={() => {
            isAuthenticated ? logOut() : logIn()
          }}
        >
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </button>
        {!isAuthenticated && (
          <button
            onClick={() => {
              signUp()
            }}
          >
            Sign Up
          </button>
        )}
      ) : (
        <>
          {isAuthenticated ? (
            <button className="btn" onClick={() => logOut()}>
              Log Out
            </button>
          ) : (
            <div style={{ marginTop: 10 }}>
              <input
                type="email"
                placeholder="email address"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                disabled={
                  (!email.length || !password.length) && !isAuthenticated
                }
                onClick={() => logIn({ email, password })}
              >
                Log In
              </button>
              <button
                disabled={
                  (!email.length || !password.length) && !isAuthenticated
                }
                onClick={() => signUp({ email, password })}
              >
                Sign Up
              </button>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Firebase
```
