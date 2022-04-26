import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import BaseModal from './BaseModal'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Modal/Base',
  component: BaseModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseModal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseModal> = (args) => (
  <BaseModal {...args} />
)

export const Modal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Modal.args = {
  children: <p>modal</p>,
}
