import { Router, Route, Set } from '@redwoodjs/router'
import AppLayout from 'src/layouts/AppLayout'
import supertokens from "supertokens-auth-react"

const Routes = () => {
  if (supertokens.canHandleRoute()) {
    return supertokens.getRoutingComponent();
  }
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
