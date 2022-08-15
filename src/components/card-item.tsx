import { Flex, ListItem, ListItemProps } from '@chakra-ui/react'
import React from 'react'
import { CardData } from '../models/deck'

export interface CardProps extends ListItemProps {
  data: CardData
}

export const CardItem = (props: CardProps) => {
  return (
    <ListItem>
      <Flex>
        <div>{props.data.name}</div>
        <div>x{props.data.quantity}</div>
      </Flex>
    </ListItem>
  )
}
