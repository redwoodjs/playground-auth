import SuperTokens from 'supertokens-node'
import { middleware } from 'supertokens-node/framework/awsLambda'

import { config } from '../lib/supertokens'

SuperTokens.init(config)

export const handler = async (event, context, callback) => {
  console.log('handler event', event)
  console.log('handler context', context)
  console.log('handler callback', callback)

  const handler = await middleware()(event, context, callback)

  console.log('handler', handler)

  return handler
}
