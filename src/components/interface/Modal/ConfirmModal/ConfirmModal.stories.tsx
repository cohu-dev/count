import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ConfirmModal from './ConfirmModal'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Projects/Modal/ConfirmModal',
  component: ConfirmModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ConfirmModal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConfirmModal> = (args) => (
  <ConfirmModal {...args} />
)

export const Modal = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Modal.args = {
  label: 'OK!',
  desc: 'sample desc ',
  button: {
    label: 'hoge button',
    onClick: () => console.log(),
  },
}
