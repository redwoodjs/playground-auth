import Auth0, { auth0Client } from 'src/components/Auth0'
import AzureActiveDirectory, {
  azureActiveDirectoryClient,
} from 'src/components/AzureActiveDirectory'
import Netlify from 'src/components/Netlify'
import netlifyIdentity from 'netlify-identity-widget'
import MagicLink, { magicLinkClient } from 'src/components/MagicLink'
import Firebase, { firebaseClient } from 'src/components/Firebase'
import Supabase, { supabaseClient } from 'src/components/Supabase'
import Nhost, { nhostClient } from 'src/components/Nhost'
import Ethereum, { ethereumClient } from 'src/components/ethereum'

export const providers = [
  {
    name: 'Auth0',
    slug: 'auth0',
    client: auth0Client,
    component: <Auth0 />,
    docsUrl: 'https://redwoodjs.com/docs/authentication#auth0',
  },
  {
    name: 'Azure Active Directory',
    slug: 'azureActiveDirectory',
    client: azureActiveDirectoryClient,
    component: <AzureActiveDirectory />,
    docsUrl: 'https://redwoodjs.com/docs/authentication#azure-active-directory',
  },
  {
    name: 'Netlify',
    slug: 'netlify',
    client: netlifyIdentity,
    component: <Netlify />,
    docsUrl:
      'https://redwoodjs.com/docs/authentication#netlify-identity-widget',
  },
  {
    name: 'MagicLink',
    slug: 'magicLink',
    client: magicLinkClient,
    component: <MagicLink />,
    docsUrl: 'https://redwoodjs.com/docs/authentication#magiclink',
  },
  {
    name: 'Firebase',
    slug: 'firebase',
    client: firebaseClient,
    component: <Firebase />,
    docsUrl: 'https://redwoodjs.com/docs/authentication#firebase',
  },
  {
    name: 'Supabase',
    slug: 'supabase',
    client: supabaseClient,
    component: <Supabase />,
    docsUrl: 'https://redwoodjs.com/docs/authentication#supabase',
  },
  {
    name: 'Ethereum',
    slug: 'ethereum',
    client: etehreumClient,
    component: <Ethereum />,
    docsUrl: 'https://redwoodjs.com/docs/authentication#ethereum',
  },
  {
    name: 'Nhost',
    slug: 'nhost',
    client: nhostClient,
    component: <Nhost />,
    docsUrl: 'https://redwoodjs.com/docs/authentication#nhost',
  },
]
