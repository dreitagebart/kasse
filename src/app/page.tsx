'use client'

import { AppShell, AppShellMain, Flex, Stack } from '@mantine/core'
import { useDisclosure, useLocalStorage } from '@mantine/hooks'
import { NextPage } from 'next'
import { useCallback } from 'react'

import { BookItem } from '~/components/book-item'
import { Header } from '~/components/header'
import { Navbar } from '~/components/navbar'
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
      <Header onToggle={toggle} opened={opened}></Header>
      <Navbar></Navbar>
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
