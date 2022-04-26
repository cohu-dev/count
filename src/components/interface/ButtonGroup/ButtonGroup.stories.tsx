import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ButtonGroup from './ButtonGroup'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Group/ButtonGroup',
  component: ButtonGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ButtonGroup>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
)

export const Sample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = {
  buttons: [
    { label: 'hoge', onClick: () => console.log() },
    { label: 'hoge', onClick: () => console.log() },
    { label: 'hoge', onClick: () => console.log() },
    { label: 'hoge', onClick: () => console.log() },
  ],
}
