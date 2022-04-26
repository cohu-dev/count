import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Breadcrumb from '@/components/interface/Breadcrumbs/BreadCrumbs'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Breadcrumb',
  component: Breadcrumb,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Breadcrumb>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
)

export const One = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
One.args = {
  breads: [{ name: 'どこか', slug: 'where' }],
}

export const Two = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Two.args = {
  breads: [
    { name: 'どこか1', slug: 'where1' },
    { name: 'どこか2', slug: 'where2' },
  ],
}
