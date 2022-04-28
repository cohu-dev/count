import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ScrollToTop from './ScrollToTop'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/ScrollToTop',
  component: ScrollToTop,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ScrollToTop>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ScrollToTop> = (args) => <ScrollToTop />

export const Base = Template.bind({})
