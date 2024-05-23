'use client'

import { IconMoonStars, IconSun } from '@tabler/icons-react'
import {
  Switch,
  rem,
  useComputedColorScheme,
  useMantineColorScheme
} from '@mantine/core'
import { useCallback } from 'react'

export const ColorSchemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: false
  })
  const toggleColorScheme = useCallback(
    () => setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark'),
    [computedColorScheme, setColorScheme]
  )

  return (
    <Switch
      size='lg'
      color='dark.4'
      checked={computedColorScheme === 'dark'}
      onChange={toggleColorScheme}
      onLabel={<IconSun style={{ width: rem(20), height: rem(20) }} />}
      offLabel={<IconMoonStars style={{ width: rem(20), height: rem(20) }} />}
    />
  )
}
