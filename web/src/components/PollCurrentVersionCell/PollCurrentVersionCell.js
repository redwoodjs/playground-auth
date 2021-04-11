import { useEffect, useState } from 'react'

export const QUERY = gql`
  query PollCurrentVersionQuery {
    redwood {
      currentUser
      version
      prismaVersion
    }
  }
`

export const beforeQuery = () => {
  return {
    pollInterval: 20000,
  }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ redwood }) => {
  const [lastUpdate, setLastUpdate] = useState('lastUpdate')

  useEffect(() => {
    setLastUpdate(new Date().toLocaleTimeString())
  }, [redwood])

  return (
    <>
      <h3>Polling output</h3>
      <p>Last Changed {lastUpdate}</p>
      <pre style={{ color: 'green' }}>{JSON.stringify(redwood)}</pre>
    </>
  )
}
