import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Info = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  role: 'info',
  label: 'Info Button',
}

export const Success = Template.bind({})
Success.args = {
  label: 'Success Button',
  role: 'success',
}

export const Warn = Template.bind({})
Warn.args = {
  label: 'Warn Button',
  role: 'warn',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Error Button',
  role: 'error',
}
