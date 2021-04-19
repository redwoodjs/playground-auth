import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { CheckCircleIcon } from '@heroicons/react/outline'

const ProviderCard = ({ provider }) => {
  const { isAuthenticated } = useAuth()

  return (
    <Link
      to={routes.provider({ provider: provider.slug })}
      className={`${
        isAuthenticated
          ? 'border-green-300 bg-green-50 hover:bg-white'
          : 'border-red-300 hover:bg-red-100'
      } relative col-span-1 flex items-center justify-center py-8 px-8 bg-white border rounded-md transition-colors duration-200`}
    >
      {isAuthenticated && (
        <CheckCircleIcon
          className="h-5 w-5 absolute top-0 right-0 mt-2 mr-2 text-green-400"
          aria-hidden="true"
        />
      )}
      <span className="sr-only">
        {provider.name} is{' '}
        {isAuthenticated ? 'authenticated' : 'not authenticated'}
      </span>
      <img
        className="max-h-10 max-w-24 h-auto w-auto"
        src={provider.image}
        alt={provider.name}
      />
    </Link>
  )
}

export default ProviderCard
