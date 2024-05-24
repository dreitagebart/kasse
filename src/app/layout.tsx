import '@mantine/core/styles.css'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
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
        <ColorSchemeScript defaultColorScheme='light' />
      </head>
      <body>
        <MantineProvider defaultColorScheme='light'>{children}</MantineProvider>
      </body>
    </html>
  )
}

export default RootLayout
