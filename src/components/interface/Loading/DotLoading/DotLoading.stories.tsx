import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DotLoading from './DotLoading'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Loading/DotLoading',
  component: DotLoading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DotLoading>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DotLoading> = (args) => <DotLoading />

export const Base = Template.bind({})
