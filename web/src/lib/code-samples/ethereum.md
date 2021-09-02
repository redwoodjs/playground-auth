```js
import { useAuth } from '@redwoodjs/auth'

const Ethereum = () => {
  const { logIn, logOut, isAuthenticated } = useAuth()

  return (
    <>
      <button onClick={isAuthenticated ? logOut : logIn}>
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      {!isAuthenticated && <button onClick={logIn}>Sign Up</button>}
    </>
  )
}

export default Ethereum
```
