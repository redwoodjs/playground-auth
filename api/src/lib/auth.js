// Define what you want `currentUser` to return throughout your app. For example,
// to return a real user from your database, you could do something like:
//
//   export const getCurrentUser = async ({ email }) => {
//     return await db.user.findOne({ where: { email } })
//   }

// @ts-check

import { AuthenticationError } from '@redwoodjs/graphql-server'
import { logger } from './logger'

import admin from 'firebase-admin'

admin.initializeApp({ projectId: process.env.FIREBASE_PROJECT_ID })

export const getCurrentUser = async (decoded, { type, token }) => {
  logger.debug(
    {
      payload: { decoded, type, token },
    },
    'Current User'
  )

  return { decoded, type, token }
}

// Use this function in your services to check that a user is logged in, and
// optionally raise an error if they're not.

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
