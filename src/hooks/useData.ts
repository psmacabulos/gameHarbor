import { CanceledError } from "axios"
import { useEffect, useState } from "react"
import api from "../services/api"

interface FetchResponse<T> {
  count: number
  results: T[]
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await api.get<FetchResponse<T>>(endpoint, { signal: controller.signal })
        setData(response.data.results)
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

  return { data, error, isLoading }
}

export default useData
