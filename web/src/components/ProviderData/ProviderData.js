import { useAuth } from '@redwoodjs/auth'
import AuthResults from 'src/components/AuthResults'
import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'

const ProviderData = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div className="flex gap-2 mt-8 pt-8 border-t border-red-300">
      <AuthResults />
      {isAuthenticated && <PollCurrentVersionCell />}
    </div>
  )
}

export default ProviderData
