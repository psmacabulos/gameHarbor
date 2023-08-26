import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getOptimizedImageUrl from "../services/imageUrl"

const GenreList = () => {
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
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default GenreList
