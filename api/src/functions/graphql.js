import { supertokensAuthDecoder } from '@redwoodjs/auth-providers-api'
import {
  firebaseAuthDecoder,
  supabaseAuthDecoder,
} from '@redwoodjs/auth-providers-api'
import { auth0AuthDecoder } from '@redwoodjs/auth-providers-api'
import { netlifyAuthDecoder } from '@redwoodjs/auth-providers-api'
import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { getCurrentUser } from 'src/lib/auth'
// import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

const authDecoder = (token, type, req) => {
  switch (type) {
    case 'auth0':
      return auth0AuthDecoder(token, type, req)
    case 'netlify':
      return netlifyAuthDecoder(token, type, req)
    case 'firebase':
      return firebaseAuthDecoder(token, type, req)
    case 'supabase':
      return supabaseAuthDecoder(token, type, req)
    case 'supertokens':
      return supertokensAuthDecoder(token, type, req)
  }

  throw new Error(type + ' is not a supported auth type')
}

export const handler = createGraphQLHandler({
  authDecoder,
  getCurrentUser,
  loggerConfig: {
    logger,
    options: { tracing: true, operationName: true, data: true },
  },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    // Upgrade notes as of RedwoodJS 0.19.0, but this project does not use a db so we comment it out for now
    // db.$disconnect()
  },
})
