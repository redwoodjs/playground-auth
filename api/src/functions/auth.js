import { config } from "src/services/supertokens";
import express from "express";
import { middleware, errorHandler, init } from "supertokens-node";
import serverless from "serverless-http"
import bodyParser from "body-parser";
// TODO: test for other providers once everything is done

export function authHandler() {
  let app = express();

  init(config);

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(middleware());

  app.use(errorHandler());

  app.use((
    error,
    _,
    response,
    __
) => {
    response.statusCode = 500;
    response.json({
        error: error.message === undefined ? "Something went wrong" : error.message,
    });
});

  return serverless(app);
}

export const handler = authHandler()