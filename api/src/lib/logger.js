//@ts-check
import { createLogger, redactionsList } from '@redwoodjs/api/logger'
export const logger = createLogger({
  options: {
    redact: [
      ...redactionsList,
      'payload.email',
      'payload.decoded.email',
      'payload.token',
      'data.email',
      'data.redwood.currentUser.decoded.email',
      'data.redwood.currentUser.token',
    ],
  },
})
