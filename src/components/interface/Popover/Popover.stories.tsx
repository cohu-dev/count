import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BasePopover from './Popover'
import { HiBan, HiBookmark, HiServer, HiZoomIn } from 'react-icons/hi'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Popover',
  component: BasePopover,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BasePopover>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BasePopover> = (args) => (
  <BasePopover {...args} />
)

export const Modal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Modal.args = {
  label: 'hoge',
  links: [
    {
      label: 'Insights',
      href: '##',
      Icon: HiServer,
    },
    {
      label: 'Automations',
      href: '##',
      Icon: HiBan,
    },
    {
      label: 'Reports',
      href: '##',
      Icon: HiBookmark,
    },
  ],
}
