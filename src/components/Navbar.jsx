import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react'
import slimeImage from '../assets/img/slime1.png'
import logo from '../assets/img/logo-rick-morty.png'
import '../styles/global.css'
import { Link } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'

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
        <Link to="/">
        <Box pl={{ base: 4, md: 0 }}>
          <Heading alignItems="center">
            <Image
              src={logo}
              alt="Rick and Morty"
              w={{ base: '8rem', md: '13.5rem' }}
              />
          </Heading>
        </Box>
        </Link>
        <Spacer />
        <ButtonGroup
          gap="2"
          pr="5px"
          pt="5px"
          display={['none', 'none', 'flex', 'flex']}
        >
          <Link to="/">
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
              <Image
                src={slimeImage}
                w="40px"
                position="absolute"
                top="-3"
                right="10"
                alt="Rick and Morty"
              />
              Home
          </Button>
            </Link>
            <Link to="/characters">
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
            Personagens
          </Button>
            </Link>
        </ButtonGroup>
        <Flex mr={4} display={['flex', 'flex', 'none', 'none']}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              color="white"
              _active={{
                bg: '#7fc447',
                color: '#1e1e26',
                border: '1px solid #1e1e26',
              }}
            />
            <MenuList  color="black" fontWeight="600">
              <MenuItem w="150px">Home</MenuItem>
              <MenuItem w="150px">Personagens</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  )
}
