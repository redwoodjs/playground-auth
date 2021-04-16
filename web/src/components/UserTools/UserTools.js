import { useAuth } from '@redwoodjs/auth'
import AuthProviderCardHeading from 'src/components/AuthProviderCardHeading'
import AuthResults from 'src/components/AuthResults'
import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'
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
      <AuthProviderCardHeading type={type} />
      <h3 className="py-5 text-md ">
        {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
      </h3>{' '}
      {isAuthenticated && <PollCurrentVersionCell />}
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
