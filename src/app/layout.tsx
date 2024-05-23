import '@mantine/core/styles.css'
import {
  ColorSchemeScript,
  MantineProvider,
  localStorageColorSchemeManager
} from '@mantine/core'
import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren

export const metadata: Metadata = {
  title: 'Kasse',
  description: 'Die Kassenapp'
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang='de'>
      <head>
        <ColorSchemeScript defaultColorScheme='auto' />
      </head>
      <body>
        <MantineProvider defaultColorScheme='auto'>{children}</MantineProvider>
      </body>
    </html>
  )
}

export default RootLayout
