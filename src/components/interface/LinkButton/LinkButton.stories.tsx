import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LinkButton from '@/components/interface/LinkButton/LinkButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/LinkButton',
  component: LinkButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LinkButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args} />
)

export const Info = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  label: 'Info LinkButton',
  role: 'info',
  href: 'href',
}

export const Success = Template.bind({})
Success.args = {
  label: 'Success LinkButton',
  role: 'success',
  href: 'href',
}

export const Warn = Template.bind({})
Warn.args = {
  label: 'Warn LinkButton',
  role: 'warn',
  href: 'href',
}

export const Error = Template.bind({})
Error.args = {
  label: 'Error LinkButton',
  role: 'error',
  href: 'href',
}
