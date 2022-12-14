export interface CardData {
  id: string
  name: string
  quantity: number
}

export interface DeckData {
  id: number
  name: string
  quantity: number
  main: Array<CardData>
  side: Array<CardData>
  ex: Array<CardData>
}
