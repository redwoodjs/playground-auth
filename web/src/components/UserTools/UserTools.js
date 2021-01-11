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
      {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}{' '}
      <LogInOutButtons
        logInOptions={logInOptions}
        logOutOptions={logOutOptions}
        signUpOptions={signUpOptions}
      />
      <br />
      <AuthResults />
    </div>
  )
}

export default UserTools
