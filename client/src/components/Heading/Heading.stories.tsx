import { Meta, StoryObj } from '@storybook/react'
import { Heading } from './Heading'

export default {
  title: 'Heading',
  component: Heading,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    children: {
      control: {
        type: 'text'
      }
    },
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
    children: 'Most Populars',
    color: 'white'
  }
}
