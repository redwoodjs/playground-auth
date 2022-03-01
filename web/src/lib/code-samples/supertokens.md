```js
import { useAuth } from '@redwoodjs/auth'
import { SignInAndUp } from "supertokens-auth-react/recipe/thirdpartyemailpassword"

const SuperTokens = () => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return <div>Loading profile ...</div>
  }

  return (
    <>
      {
        isAuthenticated ?
          <div>Logged in!</div>
          :
          <SignInAndUp />
      }
    </>
  )
}

export default SuperTokens
```
