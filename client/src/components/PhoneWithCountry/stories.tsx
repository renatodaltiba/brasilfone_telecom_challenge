import { Story, Meta } from '@storybook/react'
import { PhoneWithCountry } from '.'

export default {
  title: 'PhoneWithCountry',
  component: PhoneWithCountry
} as Meta

export const Default: Story = () => <PhoneWithCountry />
