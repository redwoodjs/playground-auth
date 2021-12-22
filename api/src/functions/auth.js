let SuperTokens = require("supertokens-node");
let { middleware } = require("supertokens-node/framework/awsLambda");

let { config } = require("../services/supertokens");

SuperTokens.init(config);

export const handler = middleware()