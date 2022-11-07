import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import { useAuth } from 'src/netlifyAuth'

import UserTools from '../UserTools/UserTools'

const Netlify = () => {
  return (
    <RedwoodApolloProvider useAuth={useAuth}>
      <UserTools useAuth={useAuth} />
    </RedwoodApolloProvider>
  )
}

export default Netlify
