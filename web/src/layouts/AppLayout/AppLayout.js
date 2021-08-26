import { Link, routes } from '@redwoodjs/router'
import Footer from 'src/components/Footer'
import { MetaTags } from '@redwoodjs/web'

const AppLayout = ({ children }) => {
  return (
    <>
      <MetaTags />
      <div className="min-h-screen bg-red-100 flex flex-col justify-center py-12 px-6 lg:px-8">
        <div className="mb-6 text-center sm:mx-auto sm:w-full sm:max-w-md">
          <Link to={routes.home()}>
            <img
              className="h-16 w-auto inline-block"
              src="https://d33wubrfki0l68.cloudfront.net/492ed629970792d32ac857da0166a7d2308bad99/428b6/images/diecut.svg"
              alt="RedwoodJS"
            />
          </Link>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">
            @RedwoodJS/Auth In Action
          </h1>
          <p className="mt-2 text-sm text-gray-600 max-w">
            This page demonstrates authentication providers supported by{' '}
            <a
              href="https://redwoodjs.com/docs/authentication"
              className="font-medium"
            >
              RedwoodJS
            </a>
          </p>
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default AppLayout
