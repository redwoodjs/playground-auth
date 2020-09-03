import { useAuth } from '@redwoodjs/auth'

const Auth0 = () => {
  const {
    loading,
    logIn,
    logOut,
    signUp,
    isAuthenticated,
    userMetadata,
    currentUser,
    type,
  } = useAuth()

  const logInOptions = {}
  const logOutOptions = {}
  const signUpOptions = {}

  if (loading) {
    return 'Loading...'
  }

  return (
    <div>
      <h2>{type}</h2>
      {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}{' '}
      <button
        onClick={() => {
          isAuthenticated ? logOut(logOutOptions) : logIn(logInOptions)
        }}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      {!isAuthenticated && (
        <button
          onClick={() => {
            signUp(signUpOptions)
          }}
        >
          Sign Up
        </button>
      )}
      <br />
      <code>
        userMetaData:
        <br />
        {JSON.stringify(userMetadata, 2)}
      </code>
      <br />
      <code>
        currentUser:
        <br />
        {JSON.stringify(currentUser, 2)}
      </code>
    </div>
  )
}

export default Auth0
