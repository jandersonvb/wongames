import { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: 'symbol'
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'Buy now',
    size: 'medium'
  }
}

export const WithIcon: StoryObj = {
  args: {
    children: 'Buy now',
    icon: <AddShoppingCart />,
    size: 'small'
  }
}
