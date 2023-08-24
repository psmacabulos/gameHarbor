import useGames from "../hooks/useGames"
import { Text } from "@chakra-ui/react"

const GameGrid = () => {
  const { gamesList, error } = useGames()

  return (
    <>
      {error && <Text>{error}</Text>}

      <ul>
        {gamesList.map(games => (
          <li key={games.id}>{games.name}</li>
        ))}
      </ul>
    </>
  )
}

export default GameGrid
