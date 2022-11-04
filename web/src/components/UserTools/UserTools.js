import AuthResults from 'src/components/AuthResults'
import Badge from 'src/components/Badge'
import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'

import LogInOutButtons from '../LogInOutButtons/LogInOutButtons'

const UserTools = ({
  useAuth,
  logInOptions = {},
  logOutOptions = {},
  signUpOptions = {},
}) => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <>Loading...</>
  }

  return (
    <div>
      <Badge useAuth={useAuth} />
      {isAuthenticated && <PollCurrentVersionCell />}
      <LogInOutButtons
        useAuth={useAuth}
        logInOptions={logInOptions}
        logOutOptions={logOutOptions}
        signUpOptions={signUpOptions}
      />
      <br />
      <AuthResults useAuth={useAuth} />
    </div>
  )
}

export default UserTools
