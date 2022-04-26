import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import MoonIcon from './MoonIcon'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/MoonIcon',
  component: MoonIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MoonIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MoonIcon> = (args) => <MoonIcon />

export const Base = Template.bind({})
