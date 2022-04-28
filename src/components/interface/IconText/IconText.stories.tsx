import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import IconText from './IconText'
import TwitterIcon from '../Icon/TwitterIcon/TwitterIcon'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/IconText',
  component: IconText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof IconText>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconText> = (args) => (
  <IconText {...args} />
)

export const Info = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  label: 'hoge',
  Icon: TwitterIcon,
}
