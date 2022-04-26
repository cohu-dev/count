import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import IconButton from './IconButton'
import TwitterIcon from '../Icon/TwitterIcon/TwitterIcon'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/IconButton',
  component: IconButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof IconButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const Base = Template.bind({})

Base.args = {
  Icon: TwitterIcon,
  onClick: () => console.log(),
}
