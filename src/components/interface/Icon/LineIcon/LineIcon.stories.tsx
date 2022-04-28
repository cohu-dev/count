import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LineIcon from './LineIcon'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/Icon/LineIcon',
  component: LineIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof LineIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LineIcon> = (args) => <LineIcon />

export const Base = Template.bind({})
