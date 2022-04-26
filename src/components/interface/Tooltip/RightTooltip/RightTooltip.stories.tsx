import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RightTooltip from './RightTooltip'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Tooltip/RightTooltip',
  component: RightTooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RightTooltip>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RightTooltip> = (args) => (
  <RightTooltip {...args} />
)

export const Sample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = { label: 'hoge' }
