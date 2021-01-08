import { useAuth } from '@redwoodjs/auth'

import AuthResults from 'src/components/AuthResults'

const UserTools = ({
  logInOptions = {},
  logOutOptions = {},
  signUpOptions = {},
}) => {
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
      <AuthResults />
    </div>
  )
}

export default UserTools
