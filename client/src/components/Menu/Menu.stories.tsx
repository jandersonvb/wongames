import { Meta, StoryObj } from '@storybook/react'
import { Menu } from './Menu'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen'
  },
  backgrounds: {
    default: 'dark'
  }
} as Meta

export const Default: StoryObj = {
  args: {
    username: ''
  }
}
