import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Navbar from './Navbar'
import { HiZoomIn } from 'react-icons/hi'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Navbar',
  component: Navbar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Navbar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Nav = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Nav.args = {
  popLinks: [
    {
      label: 'Insights',
      href: '##',
      Icon: HiZoomIn,
    },
    {
      label: 'Automations',
      href: '##',
      Icon: HiZoomIn,
    },
    {
      label: 'Reports',
      href: '##',
      Icon: HiZoomIn,
    },
  ],
}
