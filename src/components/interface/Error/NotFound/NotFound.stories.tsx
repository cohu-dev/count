import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NotFound from './NotFound'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Error/NotFound',
  component: NotFound,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NotFound>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotFound> = (args) => <NotFound />

export const Info = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {}
