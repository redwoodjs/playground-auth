// Define what you want `currentUser` to return throughout your app. For example,
// to return a real user from your database, you could do something like:
//
//   export const getCurrentUser = async ({ email }) => {
//     return await db.user.findOne({ where: { email } })
//   }

// @ts-check

import { AuthenticationError } from '@redwoodjs/api'
import * as emailpassword from "supertokens-node/recipe/emailpassword";
import { logger } from './logger'

export const getCurrentUser = async (decoded, { type, token }) => {
  if (type === "supertokens") {
    return {
      type,
      userId: decoded.getUserId(),
      jwtPayload: decoded.getJWTPayload(),
      sessionHandle: decoded.getHandle(),
      email: (await emailpassword.getUserById(decoded.getUserId())).email
    }
  }
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
