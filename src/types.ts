export type DefaultItems = Array<Omit<Item, 'quantity' | 'id'>>

export type Item = {
  id: number
  title: string
  price: number
  quantity: number
}

export type Items = Array<Item>

export type SubOrAdd = '+' | '-'
