```js
import { useAuth } from '@redwoodjs/auth'

const AzureActiveDirectory = () => {
  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <>
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
    </>
  )
}

export default AzureActiveDirectory
```
