import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LinkedinIcon from './LinkedinIcon'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/Icon/LinkedinIcon',
  component: LinkedinIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LinkedinIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LinkedinIcon> = (args) => <LinkedinIcon />

export const Base = Template.bind({})
