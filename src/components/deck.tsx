import { Container, List, ListProps } from '@chakra-ui/react'
import React from 'react'
import { DeckData } from '../models/deck'
import { CardItem } from './card-item'

export interface DeckProp extends ListProps {
  data: DeckData
}

export const Deck = (prop: DeckProp) => {
  const { data } = prop
  return (
    <Container>
      <List
        children={data.main.map((card) => (
          <CardItem data={card}></CardItem>
        ))}
      />
    </Container>
  )
}
