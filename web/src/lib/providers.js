import auth0 from './images/auth0.png'
import Auth0 from 'src/components/Auth0'
import azureActiveDirectory from './images/azureactivedirectory.png'
import AzureActiveDirectory from 'src/components/AzureActiveDirectory'
import netlify from './images/netlify.png'
import Netlify from 'src/components/Netlify'
import magiclink from './images/magiclink.png'
import MagicLink from 'src/components/MagicLink'
import firebase from './images/firebase.png'
import Firebase from 'src/components/Firebase'
import supabase from './images/supabase.png'
import Supabase from 'src/components/Supabase'
import ethereum from './images/ethereum.png'
import nhost from './images/nhost.png'

export const providers = [
  {
    name: 'Auth0',
    slug: 'auth0',
    image: auth0,
    component: <Auth0 />,
  },
  {
    name: 'Azure Active Directory',
    slug: 'azureActiveDirectory',
    image: azureActiveDirectory,
    component: <AzureActiveDirectory />,
  },
  {
    name: 'Netlify',
    slug: 'netlify',
    image: netlify,
    component: <Netlify />,
  },
  {
    name: 'MagicLink',
    slug: 'magicLink',
    image: magiclink,
    component: <MagicLink />,
  },
  {
    name: 'Firebase',
    slug: 'firebase',
    image: firebase,
    component: <Firebase />,
  },
  {
    name: 'Supabase',
    slug: 'supabase',
    image: supabase,
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
