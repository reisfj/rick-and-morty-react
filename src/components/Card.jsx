import { Box, Flex, Image, Text } from "@chakra-ui/react";



export default function Card({ image, name, episode, status, species, origin, location }) {
  return (
    <Box
      h="500"
      w="270px"
      border="1px solid #fff"
      backgroundImage="svg/tech-background.svg"
      bgRepeat="no-repeat"
      backgroundSize="cover"
      color="white"
      fontWeight="700"
      mr={{base: 2}}
    >
      <Flex align="flex-start" flexDir="column" p="15px" gap={2} >
        <Image
          h="230px"
          w="270px"
          bg="white"
          my="10px"
          backgroundImage={image}
          bgRepeat="no-repeat"
          backgroundSize="cover"
        />
        <Text>Nome: {name}</Text>
        <Text>
          Episódios: {episode} <br />
        </Text>
        <Flex gap={4}>
          <Text>
            Status <br /> {status}
          </Text>
          <Text>
            Species <br /> {species}
          </Text>
        </Flex>
        <Flex gap={4} align="flex-start" justify="space-between" w="full">
          <Box textAlign="left">
            <Text>Origin</Text>
            <Text fontWeight="bold">{origin}</Text>
          </Box>

          <Box textAlign="left">
            <Text>Location</Text>
            <Text fontWeight="bold">{location}</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}
