import { AuthProvider } from '@redwoodjs/auth'
import { providers } from 'src/lib/providers'
import ProviderCard from 'src/components/ProviderCard'

const HomePage = () => {
  return (
    <div className="max-w-7xl w-full mx-auto sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-2 gap-3 md:grid-cols-3">
        {providers.map((provider, i) => (
          <ConditionalWrapper
            key={i}
            condition={provider.client}
            wrapper={(children) => (
              <AuthProvider client={provider.client} type={provider.slug}>
                {children}
              </AuthProvider>
            )}
          >
            <ProviderCard provider={provider} />
          </ConditionalWrapper>
        ))}
      </div>
    </div>
  )
}

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

export default HomePage
