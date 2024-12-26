import 'jest-styled-components'

import { renderWithTheme } from '@/utils/tests/helpers'
import { Logo } from './Logo'
import { screen } from '@testing-library/dom'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)
    const container = screen.getByLabelText(/won games/i).parentElement

    expect(container).toHaveStyle({ color: '#FAFAFA' })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    const container = screen.getByLabelText(/won games/i).parentElement

    expect(container).toHaveStyle({ color: '#030517' })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)

    const container = screen.getByLabelText(/won games/i).parentElement

    expect(container).toHaveStyle({ width: '20rem' })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo />)

    const container = screen.getByLabelText(/won games/i).parentElement

    expect(container).toHaveStyle({ width: '11rem' })
  })

  it('should render a logo without text on mobile if $hideOnMobile is passed', () => {
    renderWithTheme(<Logo $hideOnMobile />)

    const container = screen.getByLabelText(/won games/i).parentElement

    expect(container).toHaveStyleRule('width', '5.8rem', {
      media: '(max-width:  768px)'
    })
  })
})
