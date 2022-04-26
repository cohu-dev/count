import { Menu, Transition } from '@headlessui/react'
import { FC, Fragment } from 'react'
import { IconType } from 'react-icons'
import { HiChevronDown } from 'react-icons/hi'

type dropdownMenues = {
  onClick: () => void
  label: string
  Icon: IconType
}[][]
type Props = {
  label: string
  menues: dropdownMenues
}

const Dropdown: FC<Props> = ({ label, menues }) => {
  return (
    <div className="fixed top-16 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-stone-600 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {label}
            <HiChevronDown
              className="ml-2 -mr-1 h-5 w-5 text-stone-200 hover:text-stone-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-stone-800 rounded-md bg-stone-50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-stone-200 dark:bg-stone-700 dark:text-stone-100">
            {menues.map((menus) => (
              <div className="px-1 py-1 ">
                {menus.map((m) => (
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active
                            ? 'bg-stone-100 dark:bg-stone-600'
                            : 'text-stone-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm dark:text-stone-200`}
                      >
                        {active ? (
                          <m.Icon className="mr-2 h-5 w-5" aria-hidden="true" />
                        ) : (
                          <m.Icon className="mr-2 h-5 w-5" aria-hidden="true" />
                        )}
                        {m.label}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default Dropdown
