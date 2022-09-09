import {
  Button,
  Input,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  HTMLChakraProps,
  Grid,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { CardData } from '../models/deck'
import shortid from 'shortid'

export interface DeckImporterProp extends HTMLChakraProps<'div'> {
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

  return (
    <Grid gridColumn={'repeat(3,1fr)'} gap={2}>
      <FormControl gridColumn={1} isRequired isInvalid={!isNameVaild}>
        {!isNameVaild ? (
          <FormErrorMessage>卡牌名称为空</FormErrorMessage>
        ) : (
          <FormHelperText>卡牌名称</FormHelperText>
        )}
      </FormControl>
      <FormControl gridColumn={3} isRequired isInvalid={!isNumberVaild}>
        {!isNumberVaild ? (
          <FormErrorMessage>数量有误</FormErrorMessage>
        ) : (
          <FormHelperText>卡牌数量(1~3)</FormHelperText>
        )}
      </FormControl>
      <Input
        gridColumn={1}
        value={inputName === 'inited' ? '' : inputName}
        placeholder="名称"
        onChange={(e) => setInputName(e.target.value)}
        ref={nameRef}
        fontSize={'sm'}
      />
      <Input
        gridColumn={3}
        value={
          inputNum === 0 || isNaN(inputNum) || inputNum === 10 ? '' : inputNum
        }
        fontSize={'sm'}
        placeholder="数量"
        onKeyDown={(e) => {
          if (e.code === 'Tab') {
            if (nameRef.current) nameRef.current.focus()
          }
          if (e.code === 'Enter') {
            if (!isNameVaild || !isNumberVaild) return
            if (inputName === 'inited') {
              setInputName('')
              if (nameRef.current) nameRef.current.focus()
              return
            }
            if (inputNum === 0) {
              setInputNum(10)
              return
            }
            handleSumitCard()
            if (nameRef.current) nameRef.current.focus()
          }
        }}
        onChange={(e) => setInputNum(Number(e.target.value))}
      />
      <Button
        fontSize={'sm'}
        margin={'0'}
        type="submit"
        disabled={
          !isNameVaild ||
          !isNumberVaild ||
          inputName === 'inited' ||
          inputNum === 0
        }
        gridColumn={5}
        onClick={() => handleSumitCard()}
      >
        Add
      </Button>
    </Grid>
  )
}
