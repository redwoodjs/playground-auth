import { useAuth } from '@redwoodjs/auth'

const Auth0 = () => {
  const { logIn, logOut, isAuthenticated, currentUser, type } = useAuth()

  return (
    <>
      <h2>{type}</h2>
      {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}{' '}
      <button
        onClick={() => {
          isAuthenticated ? logOut() : logIn()
        }}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      <br />
      <code>{JSON.stringify(currentUser, 2)}</code>
    </>
  )
}

export default Auth0
