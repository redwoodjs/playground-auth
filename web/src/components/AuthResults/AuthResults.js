import { useAuth } from '@redwoodjs/auth'

export default ({ scheme }) => {
  const { type, userMetadata, currentUser, isAuthenticated } = useAuth()
  const typeOk = type && type === currentUser?.type
  const emailOk = /^[\w\+]+@\w+.*\.\w\w+$/.test(userMetadata?.email)
  const tokenOk = currentUser?.token && currentUser?.token !== 'null'

  const show = () => {
    console.debug(userMetadata)
    if (type !== 'supabase') {
      return true
    } else if (scheme === userMetadata?.app_metadata?.provider) {
      return true
    }

    return false
  }

  return (
    show() && (
      <>
        <code>
          userMetaData:
          <pre style={{ margin: 0 }}>
            {JSON.stringify(userMetadata, null, 2)}
          </pre>
        </code>
        <br />
        <code>
          currentUser:
          <pre style={{ margin: 0 }}>
            {JSON.stringify(currentUser, null, 2)}
          </pre>
        </code>

        {isAuthenticated ? (
          <>
            <h3>Basic sanity checks</h3>
            <ul>
              <li style={{ color: typeOk ? 'green' : 'red' }}>Correct type</li>
              <li style={{ color: emailOk ? 'green' : 'red' }}>Valid email</li>
              <li style={{ color: tokenOk ? 'green' : 'red' }}>
                Token !== null
              </li>
            </ul>
          </>
        ) : null}
      </>
    )
  )
}
