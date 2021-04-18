import { navigate, routes } from '@redwoodjs/router'
import { providers } from 'src/lib/providers'
import { Helmet } from 'react-helmet'

const ProviderPage = ({ provider }) => {
  const currentIndex = providers.findIndex((e) => e.slug == provider)
  const currentProvider = providers[currentIndex]

  function changeProvider(e) {
    navigate(routes.provider({ provider: e.target.value }))
  }

  return (
    <>
      <Helmet>
        <title>{currentProvider.name}</title>
      </Helmet>
      <div className="max-w-md mx-auto w-full">
        <label
          htmlFor="providers"
          className="font-medium text-xs text-gray-600"
        >
          Switch providers
        </label>
        <select
          id="providers"
          defaultValue={provider}
          onChange={changeProvider}
        >
          {providers.map((option, i) => (
            <option key={i} value={option.slug}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="mb-3">
            <img
              src={currentProvider.image}
              alt={currentProvider.name}
              className="max-h-8 mx-auto"
            />
          </h2>
          {currentProvider.component ? (
            currentProvider.component
          ) : (
            <div className="text-center">
              <h3 className="text-xl font-medium mt-6 mb-2">Help Wanted</h3>
              <p className="text-sm text-gray-600">
                Want to add the example for {currentProvider.name}? Learn how to{' '}
                <a
                  href="https://github.com/redwoodjs/playground-auth/blob/main/CONTRIBUTING.md"
                  className="font-medium"
                >
                  contribute an Authentication Provider
                </a>
                . Read the{' '}
                <a
                  href={`https://redwoodjs.com/docs/authentication#${currentProvider.slug}`}
                  className="font-medium"
                >
                  Redwood Authentication docs
                </a>{' '}
                for more information on how to implement {currentProvider.name}{' '}
                into your app.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ProviderPage
