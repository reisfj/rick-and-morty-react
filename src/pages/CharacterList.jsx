import { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  ListItem,
  Spinner,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import { useCharacter } from '../hooks/useCharacter'
import Search from '../components/Search'
import Card from '../components/Card'

export default function CharacterList() {
  const [searchTerm, setSearchTerm] = useState('')
  const { characters, loading, error, hasNextPage, loadNextPage } =
    useCharacter(searchTerm)

  return (
    <Box
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Search onSearch={setSearchTerm} />

      {loading && characters.length === 0 && (
        <Spinner
          display="flex"
          position="absolute"
          top="50%"
          left="50%"
          size="lg"
          color="#7fc447"
        />
      )}

      {error && <Text color="red.500">{error}</Text>}

      <UnorderedList
        display="flex"
        align="center"
        justifyContent="center"
        gap={4}
        flexWrap="wrap"
        maxW="900px"
      >
        {characters.map((character) => (
          <ListItem
            key={character.id}
            fontWeight="medium"
            color="white"
            listStyleType="none"
          >
            <Card
              image={character.image}
              name={character.name}
              episode={character.episode.length}
              status={character.status}
              species={character.species}
              origin={character.origin.name}
              location={character.location.name}
            />
          </ListItem>
        ))}
      </UnorderedList>

      {hasNextPage && (
        <Button mt={4} onClick={loadNextPage} isLoading={loading}>
          Visualizar mais
        </Button>
      )}

      {!hasNextPage && characters.length > 0 && (
        <Text mt={4} color="gray.500">
          Não há mais personagens.
        </Text>
      )}
    </Box>
  )
}
