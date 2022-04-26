import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ButtonLinkGroup from './LinkButtonGroup'
import { HiXCircle } from 'react-icons/hi'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Group/ButtonLinkGroup',
  component: ButtonLinkGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ButtonLinkGroup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonLinkGroup> = (args) => (
  <ButtonLinkGroup {...args} />
)

export const Sample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = {
  links: [
    { label: 'hoge', href: '/hoge', Icon: HiXCircle },
    { label: 'hoge', href: '/hoge', Icon: HiXCircle },
    { label: 'hoge', href: '/hoge', Icon: HiXCircle },
    { label: 'hoge', href: '/hoge', Icon: HiXCircle },
  ],
}
