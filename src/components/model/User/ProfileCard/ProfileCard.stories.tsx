import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProfileCard from './ProfileCard'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/User/ProfileCard',
  component: ProfileCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProfileCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard />

export const Sample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
