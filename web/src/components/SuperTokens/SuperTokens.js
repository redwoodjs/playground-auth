import { AuthProvider } from '@redwoodjs/auth'

export default (props) => {
  return <AuthProvider client={undefined} type="supertokens" {...props} />
}
