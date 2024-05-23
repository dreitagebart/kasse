import { ActionIcon, Flex, Group, Text } from '@mantine/core'
import { FC } from 'react'
import { IconPlus, IconMinus } from '@tabler/icons-react'

import { Item, SubOrAdd } from '~/types'

type Props = {
  item: Item
  onBook: (suboradd: SubOrAdd, item: Item) => void
}

export const BookItem: FC<Props> = ({ item, onBook }) => {
  return (
    <Flex gap='lg'>
      <Group gap='sm'>
        <ActionIcon onClick={() => onBook('+', item)}>
          <IconPlus></IconPlus>
        </ActionIcon>
        <ActionIcon onClick={() => onBook('-', item)}>
          <IconMinus></IconMinus>
        </ActionIcon>
      </Group>
      <Group gap='xs'>
        <Text size='lg'>{item.quantity}</Text>
        <Text size='lg' fw='bold'>
          {item.title}
        </Text>
        <Text>
          {item.price.toLocaleString('de-DE', {
            style: 'currency',
            currency: 'EUR'
          })}
        </Text>
      </Group>
    </Flex>
  )
}
