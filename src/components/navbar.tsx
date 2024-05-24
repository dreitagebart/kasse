import { AppShellNavbar, Group, Text, Title } from '@mantine/core'
import { FC } from 'react'

import { ColorSchemeToggle } from '~/components/color-scheme-toggle'

type Props = {}

export const Navbar: FC<Props> = () => {
  return (
    <AppShellNavbar p='md'>
      <Title order={4}>Einstellungen</Title>
      <Group mt='xl' justify='space-between'>
        <Text fw='bold'>Dark mode</Text>
        <ColorSchemeToggle></ColorSchemeToggle>
      </Group>
      {/* <Group justify='space-between'>
        <Text fw='bold'>Farbe</Text>
        <ColorInput
          placeholder='Pick color'
          label='Your favorite color'
          disallowInput
          withPicker={false}
          swatches={[
            ...DEFAULT_THEME.colors.blue,
            ...DEFAULT_THEME.colors.green,
            ...DEFAULT_THEME.colors.blue
          ]}
        ></ColorInput>
      </Group> */}
    </AppShellNavbar>
  )
}
