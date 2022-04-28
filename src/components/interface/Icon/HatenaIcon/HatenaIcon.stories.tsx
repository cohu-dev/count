import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import HatenaIcon from './HatenaIcon'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/Icon/HatenaIcon',
  component: HatenaIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HatenaIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HatenaIcon> = (args) => <HatenaIcon />

export const Base = Template.bind({})
