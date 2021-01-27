import { Link, routes } from '@redwoodjs/router'

import Supabase from 'src/components/Supabase'

const SupabasePage = () => {
  return (
    <div>
      <h1>
        <Link to={routes.home()}>@redwoodjs/auth</Link> in action
      </h1>
      <p>
        This page demonstrates the RedwoodJS Supabase authentication provider.
      </p>
      <Supabase scheme="email" />
      <Supabase scheme="github" />
      <Supabase scheme="magiclink" />
    </div>
  )
}

export default SupabasePage
