import { classNames } from '@/libs/css'
import { LinksType } from '@/types/link'
import { ButtonsType } from '@/types/button'
import { Menu, Transition } from '@headlessui/react'
import React, { FC, Fragment } from 'react'

type Props = {
  imgSrc: string
  imgAlt: string
  links: LinksType
  buttons: ButtonsType
}
const menuColor = 'text-stone-700 dark:text-stone-100'

const Avatar: FC<Props> = ({ imgSrc, imgAlt, links, buttons }) => {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full bg-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-stone-800">
          <span className="sr-only">Open user menu</span>
          <img className="h-8 w-8 rounded-full" src={imgSrc} alt={imgAlt} />
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
        <Menu.Items className="absolute mt-2 w-48 origin-top-right rounded-md  bg-stone-50 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-stone-800">
          {links &&
            links.map((link) => (
              <Menu.Item key={link.href}>
                {({ active }) => (
                  <a
                    href={link.href}
                    className={classNames(
                      active ? 'bg-stone-100 dark:bg-stone-700' : '',
                      `${menuColor} block px-4 py-2 text-sm `
                    )}
                  >
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          {buttons &&
            buttons.map((b) => (
              <Menu.Item key={b.label}>
                {({ active }) => (
                  <button
                    onClick={b.onClick}
                    type="button"
                    className={classNames(
                      active ? 'bg-stone-100 dark:bg-stone-700' : '',
                      `${menuColor} inline-block w-full px-4 py-2 text-left text-sm`
                    )}
                  >
                    {b.label}
                  </button>
                )}
              </Menu.Item>
            ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}


export default Avatar