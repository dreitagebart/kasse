'use client'

import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  Burger,
  Flex,
  Group,
  Stack,
  Text,
  Title
} from '@mantine/core'
import { useDisclosure, useLocalStorage } from '@mantine/hooks'
import { NextPage } from 'next'
import { useCallback } from 'react'

import { BookItem } from '~/components/book-item'
import { ColorSchemeToggle } from '~/components/color-scheme-toggle'
import { Total } from '~/components/total'
import { defaultItems } from '~/config'
import { Item, Items, SubOrAdd } from '~/types'

interface FormState {
  items: Items
  total: number
}

const items: Items = defaultItems.map((item, index) => ({
  ...item,
  quantity: 0,
  id: index
}))

const Page: NextPage = () => {
  const [opened, { toggle }] = useDisclosure(false)
  const [values, setValues] = useLocalStorage<FormState>({
    key: 'items',
    defaultValue: { items, total: 0 }
  })
  const bookItem = useCallback(
    (suboradd: SubOrAdd, item: Item) => {
      setValues((values) => ({
        items: values.items.map((i) =>
          i.id === item.id
            ? {
                ...i,
                quantity:
                  suboradd === '+'
                    ? item.quantity + 1
                    : suboradd === '-'
                    ? item.quantity - 1
                    : 0
              }
            : i
        ),
        total:
          suboradd === '+'
            ? values.total + item.price
            : suboradd === '-'
            ? values.total - item.price
            : 0
      }))
    },
    [setValues]
  )

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: !opened }
      }}
      padding='md'
    >
      <AppShellHeader>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} size='sm' />
          <Title>Kasse</Title>
        </Group>
      </AppShellHeader>
      <AppShellNavbar p='md'>
        <Title order={4}>Einstellungen</Title>
        <Group mt='xl' justify='space-between'>
          <Text fw='bold'>Dark mode</Text>
          <ColorSchemeToggle></ColorSchemeToggle>
        </Group>
      </AppShellNavbar>
      <AppShellMain>
        <Flex direction='column' gap='xl'>
          <Total
            onReset={() => setValues({ total: 0, items })}
            total={values.total}
          ></Total>
          <Stack>
            {values.items.map((item) => {
              return (
                <BookItem
                  key={item.id}
                  item={item}
                  onBook={(suboradd, item) => bookItem(suboradd, item)}
                ></BookItem>
              )
            })}
          </Stack>
        </Flex>
      </AppShellMain>
    </AppShell>
  )
}

export default Page
