import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import InstagramIcon from './InstagramIcon'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/InstagramIcon',
  component: InstagramIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof InstagramIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InstagramIcon> = (args) => (
  <InstagramIcon />
)

export const Base = Template.bind({})
