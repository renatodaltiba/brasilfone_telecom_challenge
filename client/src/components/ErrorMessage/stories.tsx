import { Meta, Story } from '@storybook/react'
import { ErrorMessage, ErrorMessageProps } from '.'

export default {
  title: 'ErrorMessage',
  component: ErrorMessage
} as Meta

export const Default: Story<ErrorMessageProps> = (args) => <ErrorMessage {...args} />

Default.args = {
  message: 'Page not found'
}

