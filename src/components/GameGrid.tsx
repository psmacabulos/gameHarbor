import { useState, useEffect } from "react"
import api from "../services/api"
import { Text } from "@chakra-ui/react"

interface Game {
  id: number
  name: string
}

interface FetchGamesResp {
  count: number
  results: Game[]
}

const GameGrid = () => {
  const [gamesList, setGamesList] = useState<Game[]>([])
  const [error, setError] = useState("")

  useEffect(() => {
    api
      .get<FetchGamesResp>("/gamesx")
      .then(res => setGamesList(res.data.results))
      .catch(err => setError(err.message))
  }, [])
  console.log(gamesList[0])

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
