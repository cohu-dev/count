import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Avatar from './Avatar'
import { HiX } from 'react-icons/hi'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/User/Avatar',
  component: Avatar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Avatar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Sample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = {
  imgSrc:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  imgAlt: 'hoge',
  links: [
    { label: 'label1', href: 'href1', Icon: HiX },
    { label: 'label1', href: 'href1', Icon: HiX },
  ],
  buttons: [{ label: 'label1', onClick: () => console.log() }],
}
