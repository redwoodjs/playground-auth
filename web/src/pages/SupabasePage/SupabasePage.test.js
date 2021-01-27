import { render } from '@redwoodjs/testing'

import SupabasePage from './SupabasePage'

describe('SupabasePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SupabasePage />)
    }).not.toThrow()
  })
})
