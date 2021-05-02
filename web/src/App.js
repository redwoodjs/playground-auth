import { FatalErrorBoundary } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import './index.css'
import 'highlight.js/styles/atom-one-dark.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <Toaster />
    <Routes />
  </FatalErrorBoundary>
)

export default App
