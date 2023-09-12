import { Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformMenu from "./components/PlatformMenu"
import { Platform } from "./hooks/usePlatform"
import SortMenu from "./components/SortMenu"


export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside' paddingX='20px'>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={genre => setGameQuery({...gameQuery, genre})}
          />
        </GridItem>
      </Show>

      <GridItem area='main'>
        <HStack spacing={5} marginLeft={10}>
          <PlatformMenu
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={platform => setGameQuery({...gameQuery, platform})}
          />
          <SortMenu />
        </HStack>
        <GameGrid gameQuery = {gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
