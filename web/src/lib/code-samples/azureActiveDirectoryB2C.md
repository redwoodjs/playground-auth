```js
import { useAuth } from '@redwoodjs/auth'

const AzureActiveDirectoryB2C = () => {
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

export default AzureActiveDirectoryB2C
```
