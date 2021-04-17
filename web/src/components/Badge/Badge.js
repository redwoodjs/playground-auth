import { useAuth } from '@redwoodjs/auth'

const Badge = () => {
  const { isAuthenticated } = useAuth()
  const color = isAuthenticated ? 'green' : 'red'

  return (
    <div className="flex justify-center mb-4">
      <span
        className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-${color}-100 text-${color}-800`}
      >
        <svg
          className={`-ml-1 mr-1.5 h-2 w-2 text-${color}-400`}
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
