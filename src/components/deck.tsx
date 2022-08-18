import { Container, List, ListProps } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CardData, DeckData } from '../models/deck'
import { CardItem } from './card-item'
import { DeckImporter } from './deck-importer'

export interface DeckProp extends ListProps {
  data: DeckData
}

export const Deck = (prop: DeckProp) => {
  const { data } = prop
  const [cards, setCards] = useState(Array<CardData>)
  return (
    <Container>
      <List
        children={cards.map((card) => (
          <CardItem key={card.id} data={card}></CardItem>
        ))}
      />
      <DeckImporter
        OnAddCard={(card) => {
          setCards([card, ...cards])
        }}
      />
    </Container>
  )
}
