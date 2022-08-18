import {
  Button,
  Input,
  HStack,
  FormControl,
  FormErrorMessage,
  VStack,
  Text,
  FormHelperText,
  Box,
} from '@chakra-ui/react'
import React, { createRef, ReactElement, useRef, useState } from 'react'
import { CardData } from '../models/deck'
import shortid from 'shortid'

export interface DeckImporterProp {
  OnAddCard: (card: CardData) => any
}

export const DeckImporter = (props: DeckImporterProp) => {
  const [inputName, setInputName] = useState('inited')
  const [inputNum, setInputNum] = useState<number>(0)
  const isNameVaild = inputName !== ''
  const isNumberVaild = inputNum < 4
  const handleSumitCard = () => {
    props.OnAddCard({
      id: shortid.generate(),
      name: inputName,
      quantity: inputNum,
    })
    setInputName('inited')
    setInputNum(0)
  }

  const nameRef = useRef<HTMLInputElement>(null)
  const nameInput = (
    <Input
      flex={5}
      value={inputName === 'inited' ? '' : inputName}
      placeholder="名称"
      onChange={(e) => setInputName(e.target.value)}
      ref={nameRef}
    />
  )
  return (
    <HStack alignItems="stretch">
      <FormControl isRequired isInvalid={!isNameVaild}>
        {!isNameVaild ? (
          <FormErrorMessage>卡牌名称为空</FormErrorMessage>
        ) : (
          <FormHelperText>输入卡牌名称</FormHelperText>
        )}
        {nameInput}
      </FormControl>
      <FormControl isRequired isInvalid={!isNumberVaild}>
        {!isNumberVaild ? (
          <FormErrorMessage>数量有误</FormErrorMessage>
        ) : (
          <FormHelperText>输入卡牌数量(1~3)</FormHelperText>
        )}
        <Input
          flex={1}
          value={inputNum === 0 || isNaN(inputNum) ? '' : inputNum}
          placeholder="数量"
          onKeyDown={(e) => {
            if (
              e.code === 'Enter' &&
              isNameVaild &&
              isNumberVaild &&
              inputName !== 'inited'
            ) {
              handleSumitCard()
              if (nameRef.current) nameRef.current.focus()
            }
          }}
          onChange={(e) => setInputNum(Number(e.target.value))}
        />
      </FormControl>
      <VStack>
        <Box flex={1}></Box>
        <Button
          type="submit"
          disabled={
            !isNameVaild ||
            !isNumberVaild ||
            inputName === 'inited' ||
            inputNum === 0
          }
          flex={2}
          onClick={() => handleSumitCard()}
        >
          Add
        </Button>
      </VStack>
    </HStack>
  )
}
