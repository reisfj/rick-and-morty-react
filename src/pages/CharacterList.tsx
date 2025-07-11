import { useState } from 'react'
import {
  Box,
  Button,
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

      {loading && characters.length === 0 && <Spinner variant="solidPrimary" />}

      {error && <Text color="red.500">{error}</Text>}

      <UnorderedList
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={4}
        flexWrap="wrap"
        maxW="900px"
      >
        {characters.map((character) => (
          <ListItem
            key={character.id}
            fontWeight="medium"
            color="brand.text"
            listStyleType="none"
          >
            <Card id={character.id} character={character} />
          </ListItem>
        ))}
      </UnorderedList>

      {!error && hasNextPage && (
        <Button
          mt={4}
          variant="solidPrimary"
          onClick={loadNextPage}
          isLoading={loading}
        >
          Visualizar mais
        </Button>
      )}

      {!hasNextPage && characters.length > 0 && (
        <Text mt={4} color="brand.text">
          Não há mais personagens.
        </Text>
      )}
    </Box>
  )
}
