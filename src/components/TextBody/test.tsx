import { render, screen } from '@testing-library/react'

import TextBody from '.'

describe('<TextBody />', () => {
  it('should render the heading', () => {
    const { container } = render(<TextBody />)
    expect(
      screen.getByRole('heading', { name: /TextBody/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
