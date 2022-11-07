import { AuthProvider as Auth0AuthProvider } from './auth0Auth'
import { AuthProvider as FirebaseAuthProvider } from './firebaseAuth'
import {
  AuthProvider as NetlifyAuthProvider,
  useAuth as useNetlifyAuth,
} from './netlifyAuth'
import { AuthProvider as SupabaseAuthProvider } from './supabaseAuth'
import { AuthProvider as SupertokensAuthProvider } from './supertokensAuth'

interface Props {
  children: React.ReactNode
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  return (
    <NetlifyAuthProvider>
      <Auth0AuthProvider>
        <SupabaseAuthProvider>
          <FirebaseAuthProvider>
            <SupertokensAuthProvider>{children}</SupertokensAuthProvider>
          </FirebaseAuthProvider>
        </SupabaseAuthProvider>
      </Auth0AuthProvider>
    </NetlifyAuthProvider>
  )
}

// TODO: Maybe we can simplify this
export const useAuth = () => {
  return {
    ...useNetlifyAuth(),
  }
}
