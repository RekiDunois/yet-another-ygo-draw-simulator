import { Box, Container, Flex, Grid, GridItem, List, ListProps, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CardData, DeckData } from '../models/deck'
import { CardItem } from '../components/card-item'
import { DeckImporter } from '../components/deck-importer'

export interface DeckProp extends ListProps {
  data: DeckData
}

export const Deck = (prop: DeckProp) => {
  const { data } = prop
  const [cards, setCards] = useState(Array<CardData>)
  return (
    <Grid templateRows='repeat(9, 10vh)'>
      <GridItem rowSpan={8}>
        <List
        children={cards.map((card) => (
          <CardItem key={card.id} data={card}></CardItem>
        ))}
      />
      </GridItem>
      <GridItem>
        <DeckImporter
          OnAddCard={(card) => {
          setCards([card, ...cards])
        }}
      />
      </GridItem>
    </Grid>
  )
}
