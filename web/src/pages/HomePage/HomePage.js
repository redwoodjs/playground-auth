import { useAuth as useAuth0Auth } from 'src/auth0Auth'
import ProviderCard from 'src/components/ProviderCard'
import { useAuth as useFirebaseAuth } from 'src/firebaseAuth'
import { useAuth as useNetlifyAuth } from 'src/netlifyAuth'
import { useAuth as useSupabaseAuth } from 'src/supabaseAuth'
import { useAuth as useSupertokensAuth } from 'src/supertokensAuth'

const HomePage = () => {
  return (
    <div className="max-w-7xl w-full mx-auto sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 gap-3 md:grid-cols-3">
        <ProviderCard name="Auth0" useAuth={useAuth0Auth} />
        <ProviderCard name="Firebase" useAuth={useFirebaseAuth} />
        <ProviderCard name="Netlify" useAuth={useNetlifyAuth} />
        <ProviderCard name="Supabase" useAuth={useSupabaseAuth} />
        <ProviderCard name="SuperTokens" useAuth={useSupertokensAuth} />
      </div>
    </div>
  )
}

export default HomePage
