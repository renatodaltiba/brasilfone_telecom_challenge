import { render, screen } from '@testing-library/react'

import ErrorMessage from '.'

describe('<ErrorMessage />', () => {
  it('should render the heading', () => {
    const { container } = render(<ErrorMessage />)

    expect(screen.getByRole('heading', { name: /ErrorMessage/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
