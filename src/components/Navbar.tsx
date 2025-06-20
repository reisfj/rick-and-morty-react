import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Image,
  Spacer,
} from '@chakra-ui/react'
import slimeImage from '../assets/img/slime1.png'
import logo from '../assets/img/logo-rick-morty.png'
import '../styles/global.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <Box className="nav-effect" position="relative" zIndex="1">
      <Flex
        minWidth="max-content"
        alignItems="center"
        justify="center"
        h="5rem"
        px={{ base: 0, md: 16 }}
        mx={{ base: 0, md: 2 }}
        borderBottom="1px solid transparent"
        position="relative"
      >
        <Box pl={{base: 4, md: 0}}>
          <Heading alignItems="center">
            <Image src={logo} alt="Rick and Morty" w={{base: '8rem', md: '13.5rem',}} />
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2" pr="5px" pt="5px">
          <Button            
            border="1px solid #fff"
            bg="brand.primary"
            color="white"
            _hover={{
              bg: '#7fc447',
              color: '#1e1e26',
              border: '1px solid #1e1e26',
            }}
          >
            <Link to="/">
              <Image
                src={slimeImage}
                w="40px"
                position="absolute"
                top="-3"
                right="10"
                alt="Rick and Morty"
              />
              Home
            </Link>
          </Button>
          <Button
            border="1px solid #fff"
            bg="brand.primary"
            color="white"
            _hover={{
              bg: '#7fc447',
              color: '#1e1e26',
              border: '1px solid #1e1e26',
            }}
          >
            <Link to="/characters">Personagens</Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}
