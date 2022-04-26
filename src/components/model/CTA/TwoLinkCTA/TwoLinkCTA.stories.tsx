import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import TwoLinkCTA from '@/components/model/CTA/TwoLinkCTA/TwoLinkCTA'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/CTA/TwoLinkCTA',
  component: TwoLinkCTA,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TwoLinkCTA>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TwoLinkCTA> = (args) => (
  <TwoLinkCTA {...args} />
)

export const Example = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  mainText: 'string',
  subText: 'string',
  mainPath: 'string',
  mainLabel: 'string',
  subPath: 'string',
  subLabel: 'string',
}
