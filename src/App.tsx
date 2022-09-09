import './App.css'
import { Deck } from './panels/deck'
import { Conditions } from './panels/conditions'
import { Grid, GridItem, chakra, Box } from '@chakra-ui/react'

function App() {
  return (
    <Box textAlign={'center'} width="100vw" height="100vh" padding={'2em'}>
      <chakra.main width={'full'}>
        <Grid
          templateRows="repeat(9, 10vh)"
          templateColumns="repeat(9, 10fr)"
          column={2}
        >
          <GridItem rowSpan={9} colSpan={2}>
            <Deck
              data={{
                id: 1,
                name: '114514',
                quantity: 40,
                main: [],
                side: [],
                ex: [],
              }}
            />
          </GridItem>
          <GridItem colSpan={7} rowSpan={8}>
            <Conditions />
          </GridItem>
        </Grid>
      </chakra.main>
    </Box>
  )
}

export default App
