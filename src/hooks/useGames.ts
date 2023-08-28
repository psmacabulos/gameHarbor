import useData from "./useData"
import { Genre } from "./useGenres"

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

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [selectedGenre?.id])

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
