import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import { getCharacters } from '../services/charactersService'
import Card from '../components/Card'
import { Character } from '../typings/character'
import { useCharacterEpisodes } from '../hooks/useCharacterEpisodes'


export default function CharacterDetails() {
  const { id } = useParams()
  const location = useLocation()
  const [character, setCharacter] = useState<Character | null>(
    location.state?.character || null
  )
  const [loading, setLoading] = useState(!character)

  const {
    episodes,
    loading: episodesLoading,
    error: episodesError,
  } = useCharacterEpisodes(character!)

  useEffect(() => {
    if (!character && id) {
      setLoading(true)
      getCharacters(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => setCharacter(res.data))
        .catch((err) => console.error('Erro ao buscar personagem:', err))
        .finally(() => setLoading(false))
    }
  }, [id])

  if (loading || !character) {
    return (
      <Spinner
        display="flex"
        position="absolute"
        top="50%"
        left="50%"
        size="lg"
        color="brand.secondary"
      />
    )
  }

  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={6}
      p={6}
      mt={{ base: '30px', sm: '100px' }}
      justify="center"
      align={{ base: 'center', sm: 'flex-start' }}
    >
      <Card id={character.id} character={character} />

      <Box
        w={{ base: '100%', md: '60%' }}
        h={{ base: '500px', sm: '500px' }}
        overflowY="auto"
        border="1px solid #ccc"
        p={4}
        borderRadius="md"
        bg="brand.primary"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Episódios
        </Text>

        {episodesLoading && <Spinner variant="solidPrimary" />}

        {episodesError && (
          <Text color="red.400" fontSize="md" mb={2}>
            Erro ao carregar episódios: {episodesError}
          </Text>
        )}

        {!episodesLoading &&
          !episodesError &&
          episodes.length > 0 &&
          episodes.map((ep) => (
            <Box
              w={{ base: '100%', md: '100%' }}
              h={{ base: 'auto', sm: 'auto' }}
              overflowY="auto"
              border="1px solid #ccc"
              p={4}
              borderRadius="md"
              bg="brand.primary"
              mb={2}
            >
              <Text key={ep.id} fontSize="md" fontWeight="bold" mb={2}>
                Episódio {ep.id}: {ep.name} <br /> Lançamento: {ep.air_date}
                <br /> Episódio: {ep.episode}
              </Text>
            </Box>
          ))}

        {!episodesLoading && !episodesError && episodes.length === 0 && (
          <Text fontSize="md" color="gray.400">
            Nenhum episódio encontrado.
          </Text>
        )}
      </Box>
    </Flex>
  )
}
