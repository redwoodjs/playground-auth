import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'
import { config } from "src/services/supertokens";
import schemas from 'src/graphql/**/*.{js,ts}'
import services from 'src/services/**/*.{js,ts}'
import { init } from "supertokens-node";

import { getCurrentUser } from 'src/lib/auth.js'
import { supertokensGraphQLHandler } from "supertokens-node/redwood";

// Upgrade notes as of RedwoodJS 0.19.0, but this project does not use a db so we comment it out for now
//import { db } from 'src/lib/db'

init(config);

export const handler = supertokensGraphQLHandler(createGraphQLHandler, {
  getCurrentUser,
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
  onException: () => {
    // Disconnect from your database with an unhandled exception.

    // Upgrade notes as of RedwoodJS 0.19.0, but this project does not use a db so we comment it out for now
    // db.$disconnect()
  }
});
