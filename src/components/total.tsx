import { Button, Flex, Text } from '@mantine/core'
import { IconRestore } from '@tabler/icons-react'
import { FC } from 'react'

type Props = {
  total: number
  onReset: () => void
}

export const Total: FC<Props> = ({ total, onReset }) => {
  return (
    <Flex align='center' justify='space-between' gap='xl'>
      <Text fw='bold' size='24px'>
        {total.toLocaleString('de-DE', {
          style: 'currency',
          currency: 'EUR'
        })}
      </Text>
      <Button leftSection={<IconRestore></IconRestore>} onClick={onReset}>
        Reset
      </Button>
    </Flex>
  )
}
