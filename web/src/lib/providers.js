import auth0 from './images/auth0.png'
import Auth0, { auth0Client } from 'src/components/Auth0'
import azureActiveDirectory from './images/azureactivedirectory.png'
import AzureActiveDirectory, {
  azureActiveDirectoryClient,
} from 'src/components/AzureActiveDirectory'
import netlify from './images/netlify.png'
import Netlify from 'src/components/Netlify'
import netlifyIdentity from 'netlify-identity-widget'
import magiclink from './images/magiclink.png'
import MagicLink, { magicLinkClient } from 'src/components/MagicLink'
import firebase from './images/firebase.png'
import Firebase, { firebaseClient } from 'src/components/Firebase'
import supabase from './images/supabase.png'
import Supabase, { supabaseClient } from 'src/components/Supabase'
import ethereum from './images/ethereum.png'
import nhost from './images/nhost.png'

export const providers = [
  {
    name: 'Auth0',
    slug: 'auth0',
    image: auth0,
    client: auth0Client,
    component: <Auth0 />,
  },
  {
    name: 'Azure Active Directory',
    slug: 'azureActiveDirectory',
    image: azureActiveDirectory,
    client: azureActiveDirectoryClient,
    component: <AzureActiveDirectory />,
  },
  {
    name: 'Netlify',
    slug: 'netlify',
    image: netlify,
    client: netlifyIdentity,
    component: <Netlify />,
  },
  {
    name: 'MagicLink',
    slug: 'magicLink',
    image: magiclink,
    client: magicLinkClient,
    component: <MagicLink />,
  },
  {
    name: 'Firebase',
    slug: 'firebase',
    image: firebase,
    client: firebaseClient,
    component: <Firebase />,
  },
  {
    name: 'Supabase',
    slug: 'supabase',
    image: supabase,
    client: supabaseClient,
    component: <Supabase />,
  },
  {
    name: 'Ethereum',
    slug: 'ethereum',
    image: ethereum,
  },
  {
    name: 'Nhost',
    slug: 'nhost',
    image: nhost,
  },
]
