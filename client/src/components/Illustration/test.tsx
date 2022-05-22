import { render, screen } from '@testing-library/react'

import Illustration from '.'

describe('<Illustration />', () => {
  it('should render the heading', () => {
    const { container } = render(<Illustration />)

    expect(screen.getByRole('heading', { name: /Illustration/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
