import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getOptimizedImageUrl from "../services/imageUrl"

interface Props {
  onSelectedGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres()

  if (error) return null
  return (
    <>
      {isLoading && <Spinner size='xl' />}
      <List>
        {data.map(genre => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                src={getOptimizedImageUrl(genre.image_background)}
                boxSize='32px'
                borderRadius='8px'
              />
              <Button
                onClick={() => onSelectedGenre(genre)}
                variant='link'
                fontSize='lg'
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              >
                {genre.name === "Massively Multiplayer" ? "Multiplayer" : genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
