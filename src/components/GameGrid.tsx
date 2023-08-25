import useGames from "../hooks/useGames"
import { SimpleGrid, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"

const GameGrid = () => {
  const { gamesList, error } = useGames()

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} padding={10} spacing='10px'>
        {gamesList.map(game => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
