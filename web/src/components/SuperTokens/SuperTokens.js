import { AuthProvider } from '@redwoodjs/auth'
import sessions from "supertokens-auth-react/recipe/session";

import emailpassword from "supertokens-auth-react/recipe/emailpassword";

export default (props) => {
  return (
    <AuthProvider client={{sessions, authRecipe: emailpassword}} type="supertokens" {...props}>
    </AuthProvider>
  )
}
