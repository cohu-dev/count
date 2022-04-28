import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BlogCard from './BlogCard'
import { dummyFrontMatter } from '@/constants/dummy'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Blog/BlogCard',
  component: BlogCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BlogCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BlogCard> = (args) => (
  <BlogCard {...args} />
)

export const Info = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = { post: dummyFrontMatter }
