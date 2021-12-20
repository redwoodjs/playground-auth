import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'
import { init } from "supertokens-node";
import { config } from "src/services/supertokens";

import { getCurrentUser } from 'src/lib/auth.js'
// import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

init(config);

export const handler = createGraphQLHandler({
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
