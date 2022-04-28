import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import IconLinkButton from './IconLinkButton'
import TwitterIcon from '../Icon/TwitterIcon/TwitterIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/IconLinkButton',
  component: IconLinkButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof IconLinkButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconLinkButton> = (args) => (
  <IconLinkButton {...args} />
)

export const Info = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  href: 'hoge',
  Icon: TwitterIcon,
  noFollow: false,
  newTab: false,
}
