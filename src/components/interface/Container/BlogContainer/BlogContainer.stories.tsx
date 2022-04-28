import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlogContainer from './BlogContainer'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Container/BlogContainer',
  component: BlogContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BlogContainer>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BlogContainer> = (args) => (
  <BlogContainer {...args} />
)

export const Info = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {}
// pass markdown files
