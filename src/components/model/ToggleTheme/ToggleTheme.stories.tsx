import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ToggleTheme from './ToggleTheme'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Navbar/ToggleTheme',
  component: ToggleTheme,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ToggleTheme>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToggleTheme> = (args) => <ToggleTheme />

export const Toggle = Template.bind({})
