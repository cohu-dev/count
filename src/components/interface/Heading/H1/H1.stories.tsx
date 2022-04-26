import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import H1 from './H1'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Heading/H1',
  component: H1,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof H1>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof H1> = (args) => <H1 {...args} />

export const Base = Template.bind({})

Base.args = {
  label: 'title',
}
