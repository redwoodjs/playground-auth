import SuperTokens from 'supertokens-node'
import { middleware } from 'supertokens-node/framework/awsLambda'

import { config } from '../services/supertokens'

SuperTokens.init(config)

export const handler = middleware()
