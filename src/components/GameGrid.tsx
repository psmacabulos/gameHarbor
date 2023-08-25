import useGames from "../hooks/useGames"
import { SimpleGrid, Text } from "@chakra-ui/react"
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"

const GameGrid = () => {
  const { gamesList, error, isLoading } = useGames()
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2, xl: 3 }} padding={10} spacing='10px'>
        {isLoading &&
          skeletons.map(skeleton => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {gamesList.map(game => (
          <GameCardContainer>
            <GameCard game={game} key={game.id} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
