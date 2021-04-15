import { useAuth } from '@redwoodjs/auth'

const LogInOutButtons = ({ logInOptions, logOutOptions, signUpOptions }) => {
  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <>
      <button
        className="w-full flex justify-center mb-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => {
          isAuthenticated ? logOut(logOutOptions) : logIn(logInOptions)
        }}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </button>
      {!isAuthenticated && (
        <button
          className="w-full flex justify-center mb-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
