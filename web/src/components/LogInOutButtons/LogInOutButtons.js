import { useAuth } from '@redwoodjs/auth'

const LogInOutButtons = ({ logInOptions, logOutOptions, signUpOptions }) => {
  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <>
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
    </>
  )
}

export default LogInOutButtons
