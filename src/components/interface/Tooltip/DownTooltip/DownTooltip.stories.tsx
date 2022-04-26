import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DownTooltip from './DownTooltip'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Tooltip/DownTooltip',
  component: DownTooltip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DownTooltip>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DownTooltip> = (args) => (
  <DownTooltip {...args} />
)

export const Sample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = { label: 'hoge' }
