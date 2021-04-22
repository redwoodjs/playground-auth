import ThirdPartyProviderButton from 'src/components/ThirdPartyProviderButton'
import Spinner from '../Spinner'

export default ({ providers, onProviderClick, loading, ...rest }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    )
  }
  return (
    <>
      <p className="text-center">Or continue with</p>
      <div {...rest} className="py-4 grid xs:grid-cols-1 sm:grid-cols-3 gap-2">
        {providers.map((provider) => (
          <ThirdPartyProviderButton
            key={provider.value}
            provider={provider}
            onClick={onProviderClick}
          />
        ))}
      </div>
    </>
  )
}
