import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <Box display="flex" alignItems="center" minH="calc(100vh - 5rem)">
      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        w="100%"
        maxW="1200px"
        mx="auto"
        alignItems="center"
        justify="space-between"
        gap={{ base: 8, md: 16 }}
        px={{ base: 6, md: 12 }}
        py={{ base: 8, md: 0 }}
      >
        
        <Box
          bg="brand.primary"
          color="white"
          p={{ base: 4, md: 6 }}
          flex="1"
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Text
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="700"
            mb={4}
            lineHeight="1.2"
          >
            Descubra detalhes sobre seu personagem favorito
          </Text>
          <Text fontSize={{ base: 'sm', md: 'md' }} mb={6}>
            Aqui você terá acesso a centenas de personagens, imagens, locais e
            episódios, clique agora para novas descobertas.
          </Text>
          <Link to="/characters">
          <Button
            width={{ base: '100%', sm: '200px' }}
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
            Saiba mais
          </Button>
            </Link>
        </Box>

        {/* Imagem */}
        <Box flexShrink={0}>
          <Image
            src="svg/rick-morty-portal1.svg"
            alt="portal"
            w={{ sm: '300px', lg: '450px' }}
            mx={{ base: 'auto', md: 0 }}
          />
        </Box>
      </Flex>
    </Box>
  )
}
