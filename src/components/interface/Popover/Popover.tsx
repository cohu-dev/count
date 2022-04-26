import { LinksType } from '@/types/link'
import { Popover, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { HiChevronDown } from 'react-icons/hi'

type Props = {
  label: string
  links: LinksType
  subLabel?: string
  subDesc?: string
}

const BasePopover: FC<Props> = ({ label, links, subDesc, subLabel }) => {
  return (
    <div className="w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                group inline-flex items-center rounded-md bg-stone-400 px-3 py-2 text-base font-medium text-stone-100 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-100 focus-visible:ring-opacity-75 dark:bg-stone-600`}
            >
              <span>{label}</span>
              <HiChevronDown
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-stone-300 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-0 z-10 mt-3 w-96  transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-stone-100 p-7 dark:bg-stone-700 ">
                    {links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="-m-3 flex items-center rounded-lg bg-stone-200 p-2 transition duration-150 ease-in-out hover:bg-stone-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:bg-stone-600 hover:dark:bg-stone-500"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-blue-400 text-stone-800  dark:bg-blue-200  dark:text-stone-100 sm:h-12 sm:w-12">
                          <link.Icon
                            aria-hidden="true"
                            className="h-8 w-8 text-stone-50 dark:text-stone-600"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-stone-900 dark:text-stone-100">
                            {link.label}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  {subLabel && (
                    <div className="bg-stone-50 p-4">
                      <a
                        href="#"
                        className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-stone-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50 dark:hover:bg-stone-500"
                      >
                        <span className="flex items-center">
                          <span className="text-sm font-medium text-stone-900">
                            {subLabel}
                          </span>
                        </span>
                        <span className="block text-sm text-stone-500">
                          {subDesc}
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
export default BasePopover
