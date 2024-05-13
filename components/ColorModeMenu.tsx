'use client'

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu'
import { LocalIcons } from './LocalIcons'
import { Button } from './ui/button'
import { useTheme } from './ThemeProvider'

export const ColorModeMenu = () => {
  const { setTheme: changeMode } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='sm' className='h-8 w-8 px-0'>
          <LocalIcons.sun className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <LocalIcons.moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => changeMode('light')}>
          <LocalIcons.sun className='mr-2 h-4 w-4' />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeMode('dark')}>
          <LocalIcons.moon className='mr-2 h-4 w-4' />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeMode('system')}>
          <LocalIcons.laptop className='mr-2 h-4 w-4' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

// `pnpm dlx shadcn-ui@latest add dropdown-menu`
