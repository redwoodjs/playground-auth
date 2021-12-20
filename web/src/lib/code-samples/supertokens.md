```js
import { useAuth } from '@redwoodjs/auth'
import {SignInAndUp} from "supertokens-auth-react/recipe/thirdpartyemailpassword";

const SuperTokens = () => {
  const { logIn, logOut, signUp, isAuthenticated } = useAuth()

  return (
    <>
      {
        isAuthenticated ?
          <div>Logged in!!</div>
          :
          <SignInAndUp />
      }
    </>
  )
}

export default SuperTokens
```
