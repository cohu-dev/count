import { roleType } from '../components/interface/Button/Button'

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}

export const bgColor = (role: roleType) => {
  switch (role) {
    case 'info':
      return 'bg-blue-400 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800'
    case 'success':
      return 'bg-green-400 hover:bg-green-500 dark:bg-green-700 dark:hover:bg-green-800'
    case 'warn':
      return 'bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-700 dark:hover:bg-yellow-800'
    case 'error':
      return 'bg-red-400 hover:bg-red-500 dark:bg-red-700 dark:hover:bg-red-800'
    case 'normal':
      return 'bg-stone-400 hover:bg-stone-500 dark:bg-stone-700 dark:hover:bg-stone-800'
    default:
      return ''
  }
}
