import Auth0, { auth0Client } from 'src/components/Auth0'
import AzureActiveDirectory, {
  azureActiveDirectoryClient,
} from 'src/components/AzureActiveDirectory'
import Netlify from 'src/components/Netlify'
import netlifyIdentity from 'netlify-identity-widget'
import MagicLink, { magicLinkClient } from 'src/components/MagicLink'
import Firebase, { firebaseClient } from 'src/components/Firebase'
import Supabase, { supabaseClient } from 'src/components/Supabase'

export const providers = [
  {
    name: 'Auth0',
    slug: 'auth0',
    client: auth0Client,
    component: <Auth0 />,
  },
  {
    name: 'Azure Active Directory',
    slug: 'azureActiveDirectory',
    client: azureActiveDirectoryClient,
    component: <AzureActiveDirectory />,
  },
  {
    name: 'Netlify',
    slug: 'netlify',
    client: netlifyIdentity,
    component: <Netlify />,
  },
  {
    name: 'MagicLink',
    slug: 'magicLink',
    client: magicLinkClient,
    component: <MagicLink />,
  },
  {
    name: 'Firebase',
    slug: 'firebase',
    client: firebaseClient,
    component: <Firebase />,
  },
  {
    name: 'Supabase',
    slug: 'supabase',
    client: supabaseClient,
    component: <Supabase />,
  },
  {
    name: 'Ethereum',
    slug: 'ethereum',
  },
  {
    name: 'Nhost',
    slug: 'nhost',
  },
]
