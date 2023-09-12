import { GameQuery } from "../App"
import useData from "./useData"


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
  metacritic: number
}

const useGames = (gamesQuery : GameQuery) =>
  useData<Game>(
    "/games",
    { params: { genres: gamesQuery.genre?.id, parent_platforms: gamesQuery.platform?.id } },
    [gamesQuery]
  )

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
