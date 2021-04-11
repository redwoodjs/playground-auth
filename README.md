# Redwood's Auth Playground

This repo demonstrates all the Authentication Providers that Redwood supports. [Read more](https://redwoodjs.com/docs/authentication) about our authentication providers in our docs, or [preview the deploy](https://redwood-playground-auth.netlify.app/) of this site on Netlify!


### 🔗 [Link](https://redwood-playground-auth.netlify.app/)

## Setup

In order to support several Auth Providers, you may want to set custom values for the default provider settings:

### Auth0

If you want to use the `signUp` function, returned by the `useAuth` hook, to default the Auth0 UI to the sign up "tab", you need to be using the ["New Universal Login Experience"](https://auth0.com/docs/universal-login/new-experience). The "Classic Universal Experience" does not support the `screen_hint` to set the tab.

```
AUTH0_DOMAIN=""
AUTH0_AUDIENCE=""
AUTH0_CLIENT_ID=""
AUTH0_CLIENT_SECRET=""
AUTH0_REDIRECT_URI=""
AUTH0_AUDIENCE=""
```

### Azure Active Directory

```
AZURE_ACTIVE_DIRECTORY_CLIENT_ID=""
AZURE_ACTIVE_DIRECTORY_AUTHORITY=""
AZURE_ACTIVE_DIRECTORY_REDIRECT_URI=""
AZURE_ACTIVE_DIRECTORY_LOGOUT_REDIRECT_URI=""
```

### Netlify Identity

Set site

### Magic.link

```
MAGIC_SECRET_KEY=""
```

### Firebase

```
FIREBASE_API_KEY=""
FIREBASE_AUTH_DOMAIN=""
FIREBASE_DATABASE_URL=""
FIREBASE_PROJECT_ID=""
FIREBASE_STORAGE_BUCKET=""
FIREBASE_MESSAGING_SENDER_ID=""
FIREBASE_APP_ID=""
```

### Supabase

```
SUPABASE_KEY=""
SUPABASE_URL=""
```
