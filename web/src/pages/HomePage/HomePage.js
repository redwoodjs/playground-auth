import { Link, routes } from '@redwoodjs/router'
import { AuthProvider } from '@redwoodjs/auth'
import { providers } from 'src/lib/providers'
import Badge from 'src/components/Badge'

const HomePage = () => {
  return (
    <div className="max-w-7xl w-full mx-auto sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 gap-3 md:grid-cols-3">
        {providers.map((provider, i) => (
          <Link
            key={i}
            to={routes.provider({ provider: provider.slug })}
            className="relative col-span-1 flex items-center justify-center py-12 px-8 bg-white border border-red-300 rounded-md transition-colors duration-200 hover:bg-red-100"
          >
            {provider.client && (
              <AuthProvider client={provider.client} type={provider.slug}>
                <div className="absolute top-0 right-0 mt-2 mr-2">
                  <Badge />
                </div>
              </AuthProvider>
            )}
            <img
              className="max-h-10 max-w-24 h-auto w-auto"
              src={provider.image}
              alt={provider.name}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage
