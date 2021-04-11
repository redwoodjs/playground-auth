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
    pollInterval: 10000,
  }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ redwood }) => {
  return (
    <>
      <h3>Polling output</h3>
      {JSON.stringify(redwood)}
    </>
  )
}
