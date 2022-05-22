import { Story, Meta } from '@storybook/react'
import { ErrorMessage } from '.'

export default {
  title: 'ErrorMessage',
  component: ErrorMessage
} as Meta

export const Default: Story = () => <ErrorMessage />
