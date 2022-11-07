const Badge = ({ useAuth }) => {
  const { isAuthenticated } = useAuth()

  return (
    <div className="flex justify-center mb-4">
      <span
        className={`${
          isAuthenticated
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        } inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium`}
      >
        <svg
          className={`${
            isAuthenticated ? 'text-green-400' : 'text-red-400'
          } -ml-1 mr-1.5 h-2 w-2`}
          fill="currentColor"
          viewBox="0 0 8 8"
        >
          <circle cx={4} cy={4} r={3} />
        </svg>
        {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
      </span>
    </div>
  )
}

export default Badge
