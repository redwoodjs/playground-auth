import { Router, Route, Set } from '@redwoodjs/router'
import AppLayout from 'src/layouts/AppLayout'

const Routes = () => {
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
