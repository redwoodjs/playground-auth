import netlifyIdentity from 'netlify-identity-widget'

import Auth0 from 'src/components/Auth0'
import AzureActiveDirectory, {
  azureActiveDirectoryClient,
} from 'src/components/AzureActiveDirectory'
import Clerk, { clerkClient } from 'src/components/Clerk'
import Firebase from 'src/components/Firebase'
import MagicLink, { magicLinkClient } from 'src/components/MagicLink'
import Netlify from 'src/components/Netlify'
import Nhost, { nhostClient } from 'src/components/Nhost'
import Supabase, { supabaseClient } from 'src/components/Supabase'
import SuperTokens from 'src/components/SuperTokens'

export const providers = [
  {
    name: 'Auth0',
    slug: 'auth0',
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
    name: 'Clerk',
    slug: 'clerk',
    client: clerkClient,
    component: <Clerk />,
    docsUrl: 'https://redwoodjs.com/docs/authentication#clerk',
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
    docsUrl: 'https://redwoodjs.com/docs/authentication#ethereum',
  },
  {
    name: 'Nhost',
    slug: 'nhost',
    client: nhostClient,
    component: <Nhost />,
    docsUrl: 'https://redwoodjs.com/docs/authentication#nhost',
  },
  {
    name: 'SuperTokens',
    slug: 'supertokens',
    component: <SuperTokens />,
  },
]
