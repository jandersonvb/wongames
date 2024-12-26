import { Meta, StoryObj } from '@storybook/react'
import { MediaMatch } from './MediaMatch'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Desktop: StoryObj = {
  render: () => (
    <MediaMatch greaterThan="medium">
      <h1 data-testid="desktop">Desktop</h1>
    </MediaMatch>
  )
}

export const Mobile: StoryObj = {
  render: () => (
    <MediaMatch lessThan="medium">
      <h1 data-testid="mobile">Mobile</h1>
    </MediaMatch>
  )
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
