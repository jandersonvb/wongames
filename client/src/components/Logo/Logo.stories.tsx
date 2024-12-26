import { Meta, StoryObj } from '@storybook/react'
import { Logo } from './Logo'

export default {
  title: 'Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['white', 'black']
      }
    }
  }
} as Meta

export const Default: StoryObj = {
  args: {
    color: 'white',
    size: 'normal',
    $hideOnMobile: false
  }
}
