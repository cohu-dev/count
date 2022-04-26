import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CogLoading from './CogLoading'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Loading/CogLoading',
  component: CogLoading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CogLoading>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CogLoading> = (args) => <CogLoading />

export const Base = Template.bind({})
