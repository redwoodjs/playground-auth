import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/graphql-server'

import schemas from 'src/graphql/**/*.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { getCurrentUser } from 'src/lib/auth.js'
// import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const handler = createGraphQLHandler({
  getCurrentUser,
  loggerConfig: {
    logger,
    options: { tracing: true, operationName: true, data: true },
  },
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    // Upgrade notes as of RedwoodJS 0.19.0, but this project does not use a db so we comment it out for now
    // db.$disconnect()
  },
})
