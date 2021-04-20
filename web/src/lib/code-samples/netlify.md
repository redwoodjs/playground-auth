```js
import { useAuth } from '@redwoodjs/auth'

const Netlify = () => {
  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <>
      <button
        onClick={isAuthenticated ? logOut : logIn}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      {!isAuthenticated && (
        <button
          onClick={signUp}
        >
          Sign Up
        </button>
      )}
    </>
  )
}

export default Netlify
```
