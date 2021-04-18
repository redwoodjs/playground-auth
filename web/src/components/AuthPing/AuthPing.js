import { useAuth } from '@redwoodjs/auth'

const AuthPing = () => {
  const { isAuthenticated } = useAuth()
  const sharedClasses =
    'bg-green-400 absolute top-0 right-0 mt-2 mr-2 w-2 h-2 rounded-full'

  return (
    <>
      {isAuthenticated && (
        <>
          <div className={`${sharedClasses} z-10`} />
          <div className={`${sharedClasses} animate-ping z-0 opacity-75`} />
        </>
      )}
    </>
  )
}

export default AuthPing
