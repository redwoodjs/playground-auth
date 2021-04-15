const AuthProviderCardHeading = ({ type }) => {
  return (
    <div className="bg-white mb-5 py-5 border-b border-gray-200 sm:px-6">
      <h2 className="text-lg leading-6 font-medium text-gray-900 capitalize">
        {type}
      </h2>
    </div>
  )
}

export default AuthProviderCardHeading
