import { render, screen } from '@testing-library/react'

import PhoneWithCountry from '.'

describe('<PhoneWithCountry />', () => {
  it('should render the heading', () => {
    const { container } = render(<PhoneWithCountry />)

    expect(screen.getByRole('heading', { name: /PhoneWithCountry/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
