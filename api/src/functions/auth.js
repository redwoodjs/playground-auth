import SuperTokens from 'supertokens-node'
import { middleware } from 'supertokens-node/framework/awsLambda'

import { config } from '../lib/supertokens'

SuperTokens.init(config)

export const handler = (event, context, callback) => {
  console.log('handler event', event)
  console.log('handler context', context)
  console.log('handler callback', callback)

  return middleware()(event, context, callback)
}
