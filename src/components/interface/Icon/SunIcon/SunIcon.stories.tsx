import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import SunIcon from './SunIcon'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/SunIcon',
  component: SunIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SunIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SunIcon> = (args) => <SunIcon />

export const Base = Template.bind({})
