import React from 'react'
import { Container } from './Heading.styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

export const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => {
  return (
    <Container color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
      {children}
    </Container>
  )
}
