import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TwitterIcon from './TwitterIcon'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/TwitterIcon',
  component: TwitterIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TwitterIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TwitterIcon> = (args) => <TwitterIcon />

export const Base = Template.bind({})
