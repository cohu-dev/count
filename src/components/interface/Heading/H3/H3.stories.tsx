import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import H3 from './H3'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Heading/H3',
  component: H3,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof H3>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof H3> = (args) => <H3 {...args} />

export const Base = Template.bind({})

Base.args = {
  label: 'title',
}
