import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SpinnerLoading from './SpinnerLoading'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Loading/SpinnerLoading',
  component: SpinnerLoading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SpinnerLoading>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SpinnerLoading> = (args) => (
  <SpinnerLoading />
)

export const Base = Template.bind({})
