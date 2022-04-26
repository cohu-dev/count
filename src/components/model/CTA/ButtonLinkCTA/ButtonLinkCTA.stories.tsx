import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ButtonLinkCTA from '@/components/model/CTA/ButtonLinkCTA/ButtonLinkCTA'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/CTA/ButtonLinkCTA',
  component: ButtonLinkCTA,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ButtonLinkCTA>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonLinkCTA> = (args) => (
  <ButtonLinkCTA {...args} />
)

export const Example = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  mainLabel: 'main',
  subLabel: 'sub',
  onClick: () => {},
  path: 'hoge',
  onClickText: 'hoge',
  pathText: 'ghoige',
}
