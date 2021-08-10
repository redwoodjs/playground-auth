```javascript
import { useAuth } from '@redwoodjs/auth'

const Clerk = () => {
  const { logIn, logOut, signUp, isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  // In your own apps, you can use `@clerk/clerk-react` for pre-built UI
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

export default Clerk
```
