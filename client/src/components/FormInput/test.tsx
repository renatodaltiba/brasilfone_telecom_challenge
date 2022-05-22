import { render, screen } from '@testing-library/react'

import FormInput from '.'

describe('<FormInput />', () => {
  it('should render the heading', () => {
    const { container } = render(<FormInput />)

    expect(screen.getByRole('heading', { name: /FormInput/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
