
Clerk has a [RedwoodJS Blog Tutorial with Clerk](https://clerk.dev/tutorials/redwoodjs-blog-tutorial-with-clerk) that explains how to setup clerk and use its components.

```js
import { AuthProvider } from '@redwoodjs/auth'
import { ClerkProvider, ClerkLoaded, useClerk } from '@clerk/clerk-react'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

let clerk
const ClerkAuthConsumer = ({ children }) => {
  clerk = useClerk()
  return React.cloneElement(children, { client: clerk })
}

const ClerkAuthProvider = ({ children }) => {
  const frontendApi = process.env.CLERK_FRONTEND_API_URL
  if (!frontendApi) {
    throw new Error('Need to define env variable CLERK_FRONTEND_API_URL')
  }

  return (
    <ClerkProvider frontendApi={frontendApi}>
      <ClerkLoaded>
        <ClerkAuthConsumer>{children}</ClerkAuthConsumer>
      </ClerkLoaded>
    </ClerkProvider>
  )
}

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ClerkAuthProvider>
        <AuthProvider type="clerk">
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </AuthProvider>
      </ClerkAuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
```
