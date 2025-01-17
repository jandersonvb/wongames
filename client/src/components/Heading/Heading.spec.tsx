import { renderWithTheme } from '@/utils/tests/helpers'

import { screen } from '@testing-library/react'
import { Heading } from './Heading'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won games</Heading>)
    const heading = screen.getByRole('heading', { name: /won games/i })

    expect(heading).toHaveStyle({ color: '#FAFAFA' })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Won games</Heading>)
    const heading = screen.getByRole('heading', { name: /won games/i })

    expect(heading).toHaveStyle({ color: '#030517' })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Won games</Heading>)
    const heading = screen.getByRole('heading', { name: /won games/i })

    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won games</Heading>)
    const heading = screen.getByRole('heading', { name: /won games/i })

    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })
})
