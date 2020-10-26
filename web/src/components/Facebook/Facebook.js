import {AuthProvider, useAuth} from '@redwoodjs/auth'
import {useState} from "react";
import * as Facebook from 'fb-sdk-wrapper'

Facebook.load().then(() => Facebook.init(
  {
    appId: process.env.FACEBOOK_AUTH_APP_ID,
    version: process.env.FACEBOOK_AUTH_API_VERSION,
    cookie: process.env.FACEBOOK_AUTH_COOKIE === "true",
    status: process.env.FACEBOOK_AUTH_STATUS === "true",
    xfbml: process.env.FACEBOOK_AUTH_XFBML === "true",
    frictionlessRequests: process.env.FACEBOOK_AUTH_FRICTIONLESS_REQUESTS  === "true",
    hideFlashCallback: process.env.FACEBOOK_AUTH_HIDE_FLASH_CALLBACK  === "true",
    autoLogAppEvents: process.env.FACEBOOK_AUTH_AUTO_LOG_APP_EVENTS  === "true",
  }
))

const FacebookUserTools = ({
                     logInOptions = {},
                     logOutOptions = {},
                     signUpOptions = {},
                   }) => {
  const {
    loading,
    logIn,
    logOut,
    signUp,
    isAuthenticated,
    userMetadata,
    currentUser,
    type,
  } = useAuth()

  const [scope, setScope] = useState('')

  if (loading) {
    return 'Loading...'
  }

  return (
    <div>
      <h2>{type}</h2>
      {isAuthenticated ? 'Authenticated' : 'Not Authenticated'} <br/>

      <form>
        <p>
          <input
            type="scope"
            placeholder="scope"
            required
            value={scope}
            onChange={(e) => setScope(e.target.value)}
          />
          <br/>
          <small>
            See <a href="https://developers.facebook.com/docs/permissions/reference">Permissions reference</a>
          </small>
        </p>
      </form>

      <p>
        <button
          onClick={() => {
            isAuthenticated ? logOut(logOutOptions) : logIn({...logInOptions, scope})
          }}
        >
          {isAuthenticated ? 'Log Out' : 'Log In'}
        </button>
        {!isAuthenticated && (
          <button
            onClick={() => {
              signUp({...signUpOptions, scope})
            }}
          >
            Sign Up
          </button>
        )}

      </p>

      <code>
        userMetaData:
        <br />
        {JSON.stringify(userMetadata, 2)}
      </code>
      <br />
      <code>
        currentUser:
        <br />
        {JSON.stringify(currentUser, 2)}
      </code>
    </div>
  )
}

export default (props) => {
  return (
    <AuthProvider client={Facebook} type="facebook" {...props}>
      <FacebookUserTools/>
    </AuthProvider>
  )
}
