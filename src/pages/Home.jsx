import { Box, Button, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Box display="flex" alignItems="center" height="calc(100vh - 5rem)">
      <Flex
        w="100%"
        maxWidth="1200px"
        mx="auto"
        alignItems="center"
        justify="space-between"
        gap={16}
      >
        <Box
          bg="brand.primary"
          color="white"
          ml="60px"
          p={6}
          alignContent="center"
          justifyItems="flex-start"
          flex="1"
        >
          <Text fontSize="4xl" fontWeight="700" mb={5} lineHeight="1.1">
            Descubra detalhes sobre seu personagem favorito
          </Text>
          <Text fontSize="sm" mb={8}>
            Aqui você terá acesso a centenas de personagens, imagens, locais e
            episódios, clique agora para novas descobertas.
          </Text>
          <Button
            width="200px"
            height="40px"
            border="1px solid #fff"
            bg="brand.primary"
            color="white"
            _hover={{
              bg: '#7fc447',
              color: '#1e1e26',
              border: '1px solid #1e1e26',
            }}
          >
           <Link to="/characters">Saiba mais</Link>
          </Button>
        </Box>
        <Box flexShrink={0} px="50px">
          <Image w="430px" src="svg/rick-morty-portal1.svg" alt="portal" />
        </Box>
      </Flex>
    </Box>
  )
}
