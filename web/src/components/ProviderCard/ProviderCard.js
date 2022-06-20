import { LockOpenIcon, LockClosedIcon } from '@heroicons/react/outline'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

import ProviderImage from 'src/components/ProviderImage'

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
      <div className="flex items-center absolute top-0 right-0 mt-2 mr-2">
        {provider.client &&
          (isAuthenticated ? (
            <>
              <span className="text-green-400 font-semibold text-2xs mr-1">
                Signed In<span className="sr-only"> to {provider.name}</span>
              </span>
              <LockOpenIcon
                className="h-4 w-4 text-green-400"
                aria-hidden="true"
              />
            </>
          ) : (
            <>
              <span className="text-red-400 font-semibold text-2xs mr-1">
                Signed Out<span className="sr-only"> of {provider.name}</span>
              </span>
              <LockClosedIcon
                className="h-4 w-4 text-red-400"
                aria-hidden="true"
              />
            </>
          ))}
      </div>
      <div className="flex items-center justify-center text-xl font-semibold max-h-10 max-w-xl w-full h-full">
        <ProviderImage provider={provider} />
      </div>
    </Link>
  )
}

export default ProviderCard
