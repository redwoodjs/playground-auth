import ThirdPartyEmailPassword, {Google, Github, Apple} from "supertokens-node/recipe/thirdpartyemailpassword";
import * as Sessions from "supertokens-node/recipe/session";

export const config = {
  framework:"awsLambda",
  appInfo: {
    apiDomain: "http://localhost:8910/",
    appName: "SuperTokens RedwoodJS",
    websiteDomain: "http://localhost:8910/",
    apiBasePath: "/auth",
    apiGatewayPath: "/.netlify/functions",
  },
  supertokens: {
    connectionURI: "try.supertokens.io"
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      providers: [
        Google({
          clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
          clientSecret: "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"
        }),
        Github({
            clientId: "467101b197249757c71f",
            clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd"
        }),
        Apple({
            clientId: "4398792-io.supertokens.example.service",
            clientSecret: {
                keyId: "7M48Y4RYDL",
                privateKey:
                    "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
                teamId: "YWQCXGJRJL",
            },
        }),
      ],
    }),
    Sessions.init({
      jwt: {enable: true}
    })
  ],
}