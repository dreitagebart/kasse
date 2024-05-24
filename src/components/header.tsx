import { AppShellHeader, Burger, Group, Title } from '@mantine/core'
import { FC } from 'react'

type Props = {
  opened: boolean
  onToggle: () => void
}

export const Header: FC<Props> = ({ opened, onToggle }) => {
  return (
    <AppShellHeader>
      <Group h='100%' px='md'>
        <Burger opened={opened} onClick={onToggle} size='sm' />
        <Title>Kasse</Title>
      </Group>
    </AppShellHeader>
  )
}
