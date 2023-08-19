import { Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem bg='gold' area='aside'>
          Aside
        </GridItem>
      </Show>

      <GridItem bg='dodgerBlue' area='main'>
        Main
      </GridItem>
    </Grid>
  )
}

export default App
