import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import { getCharacters } from '../services/charactersService'
import Card from '../components/Card'
import { Character } from '../typings/character'

export default function CharacterDetails() {
  const { id } = useParams()
  const location = useLocation()
  const [character, setCharacter] = useState<Character | null>(
    location.state?.character || null
  )
  const [loading, setLoading] = useState(!character)
  

  useEffect(() => {
    if (!character && id) {
      getCharacters(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => setCharacter(res.data))
        .finally(() => setLoading(false))
    }
  }, [character, id])

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
        h={{ base: 'auto', sm: '500px' }}
        overflowY="auto"
        border="1px solid #ccc"
        p={4}
        borderRadius="md"
        bg="brand.primary"
      >
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Episódios
        </Text>
        {character.episode.map((epUrl) => {
          const epNumber = epUrl.split('/').pop()
          return (
            <Text key={epUrl} fontSize="md" mb={2}>
              Episódio {epNumber}
            </Text>
          )
        })}
      </Box>
    </Flex>
  )
}
