import { useState, useEffect } from "react"
import api from "../services/api"
import { CanceledError } from "axios"

export interface Platform {
  id: number
  name: string
  slug: string
}

export interface Game {
  id: number
  name: string
  background_image: string
  parent_platforms: { platform: Platform }[]
}

interface FetchGamesResp {
  count: number
  results: Game[]
}

const useGames = () => {
  const [gamesList, setGamesList] = useState<Game[]>([])
  const [error, setError] = useState<string>("")

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        const response = await api.get<FetchGamesResp>("/games", { signal: controller.signal })
        setGamesList(response.data.results)
      } catch (err) {
        if (err instanceof CanceledError) {
          return // Request was aborted, no need to handle the error
        }
        const errorMessage = (err as Error).message
        setError(errorMessage)
      }
    }

    fetchData()

    return () => {
      controller.abort() // Cleanup: abort the ongoing request when the component unmounts
    }
  }, [])

  return { gamesList, error }
}

// const useGames = () => {
//   const [gamesList, setGamesList] = useState<Game[]>([])
//   const [error, setError] = useState("")

//   useEffect(() => {
//     const controller = new AbortController()
//     api
//       .get<FetchGamesResp>("/gamesx", { signal: controller.signal })
//       .then(res => setGamesList(res.data.results))
//       .catch(err => {
//         if (err instanceof CanceledError) return
//         setError(err.message)
//       })
//     return () => controller.abort()
//   }, [])

//   return { gamesList, error }
// }

export default useGames
