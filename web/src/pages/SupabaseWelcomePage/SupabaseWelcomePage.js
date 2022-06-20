import { useEffect, useState, useCallback } from 'react'

import { AuthProvider } from '@redwoodjs/auth'
import { Link, routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { supabaseClient } from 'src/components/Supabase'

const supabaseProviderPagePath = routes.provider({ provider: 'supabase' })

/** Supabase thirdparty auth confirmation collides with Netlify/Firebase providers, so must confirm in a separate page. */
/** This page is set to redirect back to Supabase Provider Page after 3 seconds */
const SupabaseWelcome = () => {
  const [seconds, setSeconds] = useState(5)

  const tick = useCallback(() => {
    setSeconds(seconds - 1)
  }, [seconds])

  useEffect(() => {
    if (!seconds) {
      navigate(supabaseProviderPagePath)
    }
    const timeoutId = setTimeout(() => {
      tick()
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [seconds, tick])

  return (
    <>
      <MetaTags title="Signed in to Supabase" />
      <AuthProvider client={supabaseClient} type="supabase">
        <div className="max-w-screen-sm bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 mx-auto grid grid-rows-3 gap-y-2 text-center">
          <span role="img" aria-label="hooray" className="text-5xl">
            🎉
          </span>
          <p>Successfully signed into Supabase!</p>
          <div>
            <span>Redirecting </span>
            <Link to={supabaseProviderPagePath}>
              back to Supabase provider page
            </Link>
            <span> in</span>
            <span className="text-red-700 font-semibold text-2xl">
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

export default SupabaseWelcome
