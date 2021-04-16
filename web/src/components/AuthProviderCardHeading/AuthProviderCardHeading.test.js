import { render } from '@redwoodjs/testing'

import AuthProviderCardHeading from './AuthProviderCardHeading'

describe('AuthProviderCardHeading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthProviderCardHeading />)
    }).not.toThrow()
  })
})
