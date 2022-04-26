import { ButtonType } from '@/types/button'
import { Dialog } from '@headlessui/react'
import React, { FC } from 'react'
import Button from '../../Button/Button'
import BaseModal from '../BaseModal/BaseModal'

type Props = {
  label: string
  desc: string
  button: ButtonType
}

const ConfirmModal: FC<Props> = ({ label, desc, button }) => {
  return (
    <BaseModal>
      <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-stone-50 p-6 text-left align-middle shadow-xl transition-all dark:bg-stone-800">
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-stone-900 dark:text-stone-100"
        >
          {label}
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-stone-500 dark:text-stone-200">{desc}</p>
        </div>

        <div className="mt-4">
          <Button role="info" onClick={button.onClick} label={button.label} />
        </div>
      </div>
    </BaseModal>
  )
}

export default ConfirmModal
