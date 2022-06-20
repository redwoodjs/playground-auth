import SuperTokens from 'supertokens-auth-react'

import { Router, Route, Set } from '@redwoodjs/router'

import { initializeSuperTokens } from 'src/components/SuperTokens'
import AppLayout from 'src/layouts/AppLayout'

const Routes = () => {
  //initializeSuperTokens()

  // if (SuperTokens.canHandleRoute()) {
  //   return SuperTokens.getRoutingComponent()
  // }

  return (
    <Router>
      <Set wrap={AppLayout}>
        <Route
          path="/supabase/welcome"
          page={SupabaseWelcomePage}
          name="supabaseWelcome"
        />
        <Route path="/{provider}" page={ProviderPage} name="provider" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
