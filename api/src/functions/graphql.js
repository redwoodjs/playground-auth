import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'

import schemas from 'src/graphql/**/*.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { getCurrentUser } from 'src/lib/auth.js'

// Upgrade to RedwoodJS 0.19.0, but this project does not use a db so we comment it out
//import { db } from 'src/lib/db'

export const handler = createGraphQLHandler({
  getCurrentUser,
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
  onException: () => {
    // Disconnect from your database with an unhandled exception.

    // Upgrade to RedwoodJS 0.19.0, but this project does not use a db so we comment it out
    // db.$disconnect()
  }
})
