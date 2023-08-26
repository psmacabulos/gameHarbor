import useGenres from "../hooks/useGenres"

const GenreList = () => {
  const { genreList } = useGenres()
  return (
    <ul>
      {genreList.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  )
}

export default GenreList
