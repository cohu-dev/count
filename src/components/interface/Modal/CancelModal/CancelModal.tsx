import { ButtonType } from '@/types/button'
import { Dialog } from '@headlessui/react'
import React, { FC } from 'react'
import { HiExclamation } from 'react-icons/hi'
import Button from '../../Button/Button'
import BaseModal from '../BaseModal/BaseModal'

type Props = {
  label: string
  desc: string
  button: ButtonType
}
const CancelModal: FC<Props> = ({ label, button, desc }) => {
  return (
    <BaseModal>
      <div className="relative inline-block transform overflow-hidden rounded-lg text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
        <div className="bg-white px-4 pt-5 pb-4 dark:bg-stone-700 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <HiExclamation
                className="h-6 w-6 text-red-600"
                aria-hidden="true"
              />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-stone-900 dark:text-stone-50"
              >
                {label}
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-stone-500 dark:text-stone-100">
                  {desc}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-stone-50 px-4 py-3 dark:bg-stone-800 sm:flex sm:flex-row-reverse sm:px-6">
          <Button label="Delete" onClick={() => console.log()} role="error" />
          <Button label="Cancel" onClick={() => console.log()} role="normal" />
        </div>
      </div>
    </BaseModal>
  )
}

export default CancelModal
