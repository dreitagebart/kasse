'use client'

import { IconMoonStars, IconSun } from '@tabler/icons-react'
import {
  Switch,
  rem,
  useComputedColorScheme,
  useMantineColorScheme
} from '@mantine/core'
import { useCallback, useEffect, useState } from 'react'

export const ColorSchemeToggle = () => {
  const [darkmode, setDarkmode] = useState(false)
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: false
  })
  const toggleColorScheme = useCallback(
    () => setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark'),
    [computedColorScheme, setColorScheme]
  )

  useEffect(() => {
    if (computedColorScheme === 'dark') {
      setDarkmode(true)
    } else {
      setDarkmode(false)
    }
  }, [computedColorScheme])

  return (
    <Switch
      size='lg'
      color='dark.4'
      checked={darkmode}
      onChange={toggleColorScheme}
      onLabel={<IconSun style={{ width: rem(20), height: rem(20) }} />}
      offLabel={<IconMoonStars style={{ width: rem(20), height: rem(20) }} />}
    />
  )
}
