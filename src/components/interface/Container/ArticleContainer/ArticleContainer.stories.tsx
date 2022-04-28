import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ArticleContainer from './ArticleContainer'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Container/ArticleContainer',
  component: ArticleContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ArticleContainer>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleContainer> = (args) => (
  <ArticleContainer {...args} />
)

export const Info = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
  markdown: `# hoge
  ## hogehoge
  
  - isadf`,
}
