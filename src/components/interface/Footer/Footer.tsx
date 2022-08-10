import { abouts, contacts, legals } from '@/constants/footer'
import { serviceDesc, serviceName } from '@/constants/service'
import { socials } from '@/constants/social'
import { LinksType } from '@/types/link'
import Link from 'next/link'
import React from 'react'
import IconLinkButton from '../IconLinkButton/IconLinkButton'
import Logo from '../Logo/Logo'

const footerMenues: { label: string; menues: LinksType }[] = [
  {
    label: 'Contant',
    menues: contacts,
  },
  {
    label: 'Legals',
    menues: legals,
  },
]

const Footer = () => {
  return (
    <footer className="border-t-2 border-stone-300 bg-stone-300 dark:border-stone-600 dark:bg-stone-800">
      <div className="container mx-auto px-6 py-4">
        <div className="lg:flex">
          <div className="w-full lg:w-2/5">
            <div>
              <Logo />
              <p className="mt-2 mb-6 max-w-md dark:text-stone-200 sm:pr-8">
                {serviceDesc}
              </p>
              <div className="space-x-4">
                {socials &&
                  socials.map((s) => (
                    <IconLinkButton
                      key={s.href}
                      href={s.href}
                      noFollow={true}
                      newTab={true}
                      Icon={s.Icon}
                    />
                  ))}
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 dark:text-stone-200 sm:grid-cols-3 md:grid-cols-4">
              {footerMenues &&
                footerMenues.map((f) => (
                  <div key={f.label}>
                    <h3 className="font-semibold">{f.label}</h3>
                    {f.menues.map((m) => (
                      <Link key={m.href} href={m.href} prefetch={false}>
                        <a className="mt-2 block text-sm hover:underline">
                          {m.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <hr className="my-6 h-px border-none bg-stone-300 dark:bg-stone-600" />
        <p className="text-center dark:text-stone-200">
          © {serviceName} {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default React.memo(Footer)
