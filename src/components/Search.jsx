import { Search2Icon } from '@chakra-ui/icons'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

export default function Search(){
  return (
    <Box p={8} mb={3}>  
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
        <Input
          focusBorderColor="#7fc447"
          w={{base: "320px", sm: "500px" }}
          type="text"
          placeholder="Encontre seu personagem..."
        />
      </InputGroup>
    </Box>
  )
}


