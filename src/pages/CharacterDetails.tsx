import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import { getCharacters } from '../services/charactersService'
import Card from '../components/Card'
import { Character } from '../typings/character'
import { Episode } from '../typings/episode'


export default function CharacterDetails() {
  const { id } = useParams()
  const location = useLocation()
  const [character, setCharacter] = useState<Character | null>(
    location.state?.character || null
  )
  const [loading, setLoading] = useState(!character)
  const [episode, setEpisode] = useState<Episode[]>([])
  


  useEffect(() => {
    if (!character && id) {
      getCharacters(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => setCharacter(res.data))
        .finally(() => setLoading(false))
    }
  }, [character, id])


  useEffect(() => {
    if (character) {
      const episodes = character.episode.map((epUrl) =>
        epUrl.split('/').pop()
      ) as string[]

      getCharacters(`https://rickandmortyapi.com/api/episode/${episodes}`)
        .then((res) => {
          const data = res.data
          const normalized = Array.isArray(data) ? data : [data]
          setEpisode(normalized)
        })
        .finally(() => setLoading(false))
    }
  }, [character])
  

 
  

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

        {episode?.map((ep) => (
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
      </Box>
    </Flex>
  )
}
