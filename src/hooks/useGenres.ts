import { CanceledError } from "axios"
import { useEffect, useState } from "react"
import api from "../services/api"

interface Genre {
  id: number
  name: string
}

interface FetchGenresResp {
  count: number
  results: Genre[]
}
const useGenres = () => {
  const [genreList, setGenreList] = useState<Genre[]>([])
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await api.get<FetchGenresResp>("/genres", { signal: controller.signal })
        setGenreList(response.data.results)
        setIsLoading(false)
      } catch (err) {
        if (err instanceof CanceledError) {
          return // Request was aborted, no need to handle the error
        }
        const errorMessage = (err as Error).message
        setError(errorMessage)
        setIsLoading(false)
      }
    }

    fetchData()

    return () => {
      controller.abort() // Cleanup: abort the ongoing request when the component unmounts
    }
  }, [])

  return { genreList, error, isLoading }
}

export default useGenres
