import { AuthProvider } from '@redwoodjs/auth'
import netlifyIdentity from 'netlify-identity-widget'

netlifyIdentity.init()

export default (props) => {
  return (
    <div>
      <AuthProvider client={netlifyIdentity} type="netlify" {...props} />
    </div>
  )
}
