import { AuthProvider, useAuth } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'

import AuthProviderCardHeading from 'src/components/AuthProviderCardHeading'
import AuthResults from 'src/components/AuthResults'
import PollCurrentVersionCell from 'src/components/PollCurrentVersionCell'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { LockClosedIcon } from '@heroicons/react/solid'
import logo from './supabase-logo.png';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const SupabaseUserTools = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { logIn, logOut, signUp, isAuthenticated, type } = useAuth()

  const resetForm = () => {
    setEmail('')
    setPassword('')
  }


  return (
    <div>
    {/* <AuthProviderCardHeading type={type} /> */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
        <img className="mx-auto h-12 w-auto" src={logo} alt="Supabase" />
        <br/>
        <hr/>
          <h2 className="mt-6 text-center text-lg font-extrabold text-gray-900">
            {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
          </h2>
          {isAuthenticated && <PollCurrentVersionCell />}
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={(!email.length || !password.length) && !isAuthenticated}
              onClick={async () => {
                if (!isAuthenticated && email.length) {
                  try {
                    await logIn({ email, password })
                    resetForm()
                  } catch (e) {
                    console.log(e)
                    const supabaseError = JSON.parse(e.message)
                    alert(supabaseError.error_description)
                  }
                } else {
                  await logOut()
                }
              }}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              {isAuthenticated ? 'Log Out' : 'Log In'}
            </button>
            {!isAuthenticated && (
        <button
          className="w-full flex justify-center mb-2 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          disabled={(!email.length || !password.length) && !isAuthenticated}
          onClick={async () => {
            if (!isAuthenticated && email.length && password.length) {
              try {
                await signUp({ email, password })

                resetForm()
              } catch (e) {
                const supabaseError = JSON.parse(e.message)
                alert(supabaseError.msg)
                console.log(e)
              }
            }
          }}
        >
          Sign Up
        </button>
      )}
          </div>
          <hr></hr>
          <AuthResults />
        </form>
      </div>
    </div>
    </div>
  )
}

export default () => {
  return (
    <AuthProvider client={supabase} type="supabase">
      {/* Add apollo provider here, so that useAuth gets passed in for Cells,etc.  */}
      <RedwoodApolloProvider>
        <SupabaseUserTools />
      </RedwoodApolloProvider>
    </AuthProvider>
  )
}
