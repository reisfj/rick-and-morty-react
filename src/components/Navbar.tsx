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
        gap="2"
        h="5rem"
        borderBottom="1px solid transparent"
        position="relative"
      >
        <Box pl="12">
          <Heading alignItems="center">
            <Image src={logo} alt="Rick and Morty" w="13.5rem" />
          </Heading>
        </Box>
        <Spacer />
        <ButtonGroup
          gap="2"
          pr="12"
          pt="5px"
          colorScheme="#313B64"
          textColor="#ffffff"
        >
          <Button border="1px solid #fff">
            <Link to="/">Home</Link>
            <Image
              src={slimeImage}
              w="45px"
              position="absolute"
              top="-3"
              right="10"
              alt="Rick and Morty"
            />
          </Button>
          <Button border="1px solid #fff">
            <Link to="/characters">Personagens</Link>
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}
