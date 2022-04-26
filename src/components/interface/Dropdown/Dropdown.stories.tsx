import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Dropdown from './Dropdown'
import { HiPencil, HiSearch, HiTrash } from 'react-icons/hi'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Dropdown',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Dropdown>

const dropdownMenues = [
  [
    { label: 'hoge1', onClick: () => console.log('hoge1'), Icon: HiSearch },
    { label: 'hoge2', onClick: () => console.log('hoge2'), Icon: HiTrash },
  ],
  [{ label: 'hoge3', onClick: () => console.log('hoge3'), Icon: HiPencil }],
]

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

export const Sample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = {
  label: 'hogehoge',
  menues: dropdownMenues,
}
