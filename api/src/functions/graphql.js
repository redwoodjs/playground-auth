import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'
import schemas from 'src/graphql/**/*.{js,ts}'
import services from 'src/services/**/*.{js,ts}'


import { getCurrentUser } from 'src/lib/auth.js'

export const handler = createGraphQLHandler({
  getCurrentUser,
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
})
