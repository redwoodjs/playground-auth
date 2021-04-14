import { useAuth } from '@redwoodjs/auth'

import AuthResults from 'src/components/AuthResults'
import LogInOutButtons from '../LogInOutButtons/LogInOutButtons'

const UserTools = ({
  logInOptions = {},
  logOutOptions = {},
  signUpOptions = {},
}) => {
  const { isAuthenticated, loading, type } = useAuth()

  if (loading) {
    return 'Loading...'
  }

  return (
    <div>
      <h2>{type}</h2>
      <p>{isAuthenticated ? 'Authenticated' : 'Not Authenticated'}</p>
      <LogInOutButtons
        logInOptions={logInOptions}
        logOutOptions={logOutOptions}
        signUpOptions={signUpOptions}
      />
      <hr />
      <AuthResults />
    </div>
  )
}

export default UserTools
