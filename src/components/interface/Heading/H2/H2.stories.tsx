import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import H2 from './H2'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Heading/H2',
  component: H2,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof H2>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof H2> = (args) => <H2 {...args} />

export const Base = Template.bind({})

Base.args = {
  label: 'title',
}
