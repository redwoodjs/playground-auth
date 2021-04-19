import { FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import './index.css'
import 'highlight.js/styles/atom-one-dark.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <Routes />
  </FatalErrorBoundary>
)

export default App
