import React, { memo } from 'react'
import { TwitterURL } from '../../../constants/urls'
import IconLinkButton from '../../interface/IconLinkButton/IconLinkButton'
import ToggleTheme from '../ToggleTheme/ToggleTheme'
import Logo from '../../interface/Logo/Logo'
import { LinksType } from '@/types/link'
import { classNames } from '@/libs/css'
import { HiMenu, HiX } from 'react-icons/hi'
import { Disclosure } from '@headlessui/react'
import LinkButton from '@/components/interface/LinkButton/LinkButton'
import TwitterIcon from '@/components/interface/Icon/TwitterIcon/TwitterIcon'
import { navLinks } from '@/constants/navLinks'

type Props = {
  popLinks: LinksType
}

const Navbar: React.FC<Props> = memo(({ popLinks }) => {
  return (
    <Disclosure as="nav" className="bg-stone-300 dark:bg-stone-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center md:hidden">
                {navLinks.length > 0 && (
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <HiX className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <HiMenu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                )}
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Logo />
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-4">
                    {popLinks &&
                      popLinks.map((l) => (
                        <LinkButton
                          key={l.label}
                          role="normal"
                          label={l.label}
                          href={l.href}
                          newTab={false}
                        />
                      ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center space-x-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ToggleTheme />
                <IconLinkButton
                  href={TwitterURL}
                  Icon={TwitterIcon}
                  newTab={true}
                  noFollow={true}
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {popLinks.map((l) => (
                <Disclosure.Button
                  key={l.label}
                  as="a"
                  href={l.href}
                  className={classNames(
                    true
                      ? 'bg-stone-200 text-stone-800 dark:bg-stone-700 dark:text-stone-50'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={true ? 'page' : undefined}
                >
                  {l.label}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
})
export default Navbar
