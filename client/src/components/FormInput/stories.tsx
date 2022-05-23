import { Meta, Story } from '@storybook/react'
import { FormInput, FormInputProps } from '.'

export default {
  title: 'FormInput',
  component: FormInput
} as Meta

export const Default: Story<FormInputProps> = (args) => <FormInput {...args}/>

Default.args = {
  name: 'name',
  label: 'Nome:'
}
