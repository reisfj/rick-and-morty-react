import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Card({ id, character }) {
  return (
    <Link to={`/details/${id}`} state={{ character }}>
      <Box
        cursor="pointer"
        h="500"
        w="270px"
        border="1px solid #fff"
        backgroundImage="svg/tech-background.svg"
        bgRepeat="no-repeat"
        backgroundSize="cover"
        color="white"
        fontWeight="700"
        mr={{ base: 2 }}
      >
        <Flex align="flex-start" flexDir="column" p="15px" gap={2}>
          <Image
            h="230px"
            w="270px"
            bg="white"
            my="10px"
            backgroundImage={character.image}
            bgRepeat="no-repeat"
            backgroundSize="cover"
          />
          <Text>Nome: {character.name}</Text>
          <Text>
            Episódios: {character.episode.length} <br />
          </Text>
          <Flex gap={4}>
            <Text>
              Status <br /> {character.status}
            </Text>
            <Text>
              Species <br /> {character.species}
            </Text>
          </Flex>
          <Flex gap={4} align="flex-start" justify="space-between" w="full">
            <Box textAlign="left">
              <Text>Origin</Text>
              <Text fontWeight="bold">{character.origin.name}</Text>
            </Box>

            <Box textAlign="left">
              <Text>Location</Text>
              <Text fontWeight="bold">{character.location.name}</Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Link>
  )
}
