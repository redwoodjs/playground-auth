import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import { AuthProvider } from './auth'

import './index.css'
import 'highlight.js/styles/atom-one-dark.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider>
        <Toaster />
        <Routes />
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
