import { useEffect, useState, useCallback } from 'react'
import { MetaTags } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'
import { AuthProvider } from '@redwoodjs/auth'
import { nhostClient } from 'src/components/Nhost'

const nhostProviderPagePath = routes.provider({ provider: 'nhost' })

/** Supabase thirdparty auth confirmation collides with Netlify/Firebase providers, so must confirm in a separate page. */
/** This page is set to redirect back to Supabase Provider Page after 3 seconds */
const NhostWelcome = () => {
  const [seconds, setSeconds] = useState(5)

  const tick = useCallback(() => {
    setSeconds(seconds - 1)
  }, [seconds])

  useEffect(() => {
    if (!seconds) {
      navigate(nhostProviderPagePath)
    }
    const timeoutId = setTimeout(() => {
      tick()
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [seconds, tick])

  return (
    <>
      <MetaTags title="Signed in to Supabase" />
      <AuthProvider client={nhostClient} type="supabase">
        <div className="grid max-w-screen-sm grid-rows-3 px-4 py-8 mx-auto text-center bg-white shadow sm:rounded-lg sm:px-10 gap-y-2">
          <span role="img" aria-label="hooray" className="text-5xl">
            🎉
          </span>
          <p>Successfully signed into Nhost!</p>
          <div>
            <span>Redirecting </span>
            <Link to={nhostProviderPagePath}>back to Nhost provider page</Link>
            <span> in</span>
            <span className="text-2xl font-semibold text-red-700">
              {' '}
              {seconds}
            </span>
            <span>...</span>
          </div>
        </div>
      </AuthProvider>
    </>
  )
}

export default NhostWelcome
