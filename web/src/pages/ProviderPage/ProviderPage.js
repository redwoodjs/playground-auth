import { useState } from 'react'
import { navigate, routes } from '@redwoodjs/router'
import { providers } from 'src/lib/providers'
import CodeSample from 'src/components/CodeSample'
import ProviderImage from 'src/components/ProviderImage'
import { MetaTags } from '@redwoodjs/web'
import { CodeIcon, EyeIcon } from '@heroicons/react/outline'

const tabs = [
  { name: 'Demo', slug: 'demo', icon: <EyeIcon /> },
  { name: 'Code', slug: 'code', icon: <CodeIcon /> },
]

const ProviderPage = ({ provider }) => {
  const currentIndex = providers.findIndex((e) => e.slug == provider)
  const currentProvider = providers[currentIndex]

  const [viewTab, setViewTab] = useState(tabs[0].slug)

  function changeProvider(e) {
    navigate(routes.provider({ provider: e.target.value }))
  }

  return (
    <>
      <MetaTags title={currentProvider.name} />
      <div className="max-w-md mx-auto w-full">
        <label
          htmlFor="providers"
          className="font-medium text-xs text-gray-600"
        >
          Switch providers
        </label>
        <select
          id="providers"
          className="border-none shadow"
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
      <div className="flex justify-center mt-6 -mb-4 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex items-center rounded-md bg-red-200 hover:bg-red-300">
          {tabs.map((tab) => (
            <button
              key={tab.slug}
              className={`${
                tab.slug === viewTab ? 'shadow bg-white' : 'group'
              } flex items-center rounded-md p-1.5 sm:pl-2.5 sm:pr-3.5`}
              onClick={() => setViewTab(tab.slug)}
            >
              {tab.icon && (
                <span
                  className={`${
                    tab.slug === viewTab
                      ? 'text-red-700'
                      : 'text-red-600 group-hover:text-gray-800'
                  } h-5 w-5 sm:h-4 sm:w-4 sm:mr-2`}
                >
                  {tab.icon}
                </span>
              )}
              <span
                className={`${
                  tab.slug === viewTab
                    ? ''
                    : 'text-red-600 group-hover:text-black'
                } sr-only sm:not-sr-only font-medium text-sm`}
              >
                {tab.name}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div
        className={`${
          viewTab === 'code' ? 'max-w-2xl' : 'max-w-md'
        } transition-all duration-300 mt-6 mx-auto w-full`}
      >
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-center text-2xl font-medium max-h-8 max-w-sm mx-auto w-full h-full mb-3">
            <ProviderImage provider={currentProvider} />
          </div>

          {viewTab === 'demo' &&
            (currentProvider.component ? (
              currentProvider.component
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-medium mt-6 mb-2">Help Wanted</h3>
                <p className="text-sm text-gray-600">
                  Want to add the example for {currentProvider.name}? Learn how
                  to{' '}
                  <a
                    href="https://github.com/redwoodjs/playground-auth/blob/main/CONTRIBUTING.md"
                    className="font-medium"
                  >
                    contribute an Authentication Provider
                  </a>
                  .
                </p>

                {currentProvider.docsUrl && (
                  <p className="text-sm text-gray-600 mt-4">
                    Read the{' '}
                    <a
                      href={`https://redwoodjs.com/docs/authentication#${currentProvider.slug}`}
                      className="font-medium"
                    >
                      Redwood Authentication docs
                    </a>{' '}
                    for more information on how to implement{' '}
                    {currentProvider.name} into your app.
                  </p>
                )}
              </div>
            ))}

          {viewTab === 'code' && <CodeSample provider={currentProvider} />}
        </div>
      </div>
    </>
  )
}

export default ProviderPage
