import { Router, Route, Set } from '@redwoodjs/router'
import AppLayout from 'src/layouts/AppLayout'

import SuperTokens from 'supertokens-auth-react'

import { initializeSuperTokens } from 'src/components/SuperTokens'

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
