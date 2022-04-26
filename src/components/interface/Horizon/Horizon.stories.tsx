import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Horizon from './Horizon'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Horizon',
  component: Horizon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Horizon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Horizon> = (args) => <Horizon />

export const Base = Template.bind({})
