import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FacebookIcon from './FacebookIcon'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/Icon/FacebookIcon',
  component: FacebookIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FacebookIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FacebookIcon> = (args) => <FacebookIcon />

export const Base = Template.bind({})
