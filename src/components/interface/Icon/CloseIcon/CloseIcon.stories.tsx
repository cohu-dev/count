import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CloseIcon from './CloseIcon'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/Icon/CloseIcon',
  component: CloseIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CloseIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CloseIcon> = (args) => <CloseIcon />

export const Base = Template.bind({})
