import { useAuth } from '@redwoodjs/auth'
import LogInOutButtons from '../LogInOutButtons/LogInOutButtons'
import Badge from 'src/components/Badge'
import ProviderData from 'src/components/ProviderData'

const UserTools = ({
  logInOptions = {},
  logOutOptions = {},
  signUpOptions = {},
}) => {
  const { loading } = useAuth()

  if (loading) {
    return 'Loading...'
  }

  return (
    <div>
      <Badge />
      <LogInOutButtons
        logInOptions={logInOptions}
        logOutOptions={logOutOptions}
        signUpOptions={signUpOptions}
      />
      <ProviderData />
    </div>
  )
}

export default UserTools
