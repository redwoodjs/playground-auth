import { render } from '@redwoodjs/testing'

import ProviderPage from './ProviderPage'

describe('ProviderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProviderPage />)
    }).not.toThrow()
  })
})
