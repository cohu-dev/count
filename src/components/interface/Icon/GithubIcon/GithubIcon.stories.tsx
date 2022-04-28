import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import GithubIcon from './GithubIcon'
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Icon/Icon/GithubIcon',
  component: GithubIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof GithubIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GithubIcon> = (args) => <GithubIcon />

export const Base = Template.bind({})
