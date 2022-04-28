import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import YoutubeIcon from './YoutubeIcon'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/Icon/YoutubeIcon',
  component: YoutubeIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof YoutubeIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof YoutubeIcon> = (args) => <YoutubeIcon />

export const Base = Template.bind({})
