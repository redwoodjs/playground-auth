import { FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import './index.css'

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <Routes />
  </FatalErrorBoundary>
)

export default App
