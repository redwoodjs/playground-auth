import { SignInAndUp } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

import { RedwoodApolloProvider } from '@redwoodjs/web/dist/apollo'

import { useAuth } from 'src/supertokensAuth'

import UserTools from '../UserTools/UserTools'

const Content = () => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <div className="p-4 text-lg">Loading profile ...</div>
  }

  if (isAuthenticated) {
    return <UserTools useAuth={useAuth} />
  }

  return <SignInAndUp />
}

export default () => {
  return (
    <RedwoodApolloProvider useAuth={useAuth}>
      <Content />
    </RedwoodApolloProvider>
  )
}
