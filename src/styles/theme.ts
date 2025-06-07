import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  // Crie aqui seu tema customizado do ChakraUI
  colors: {
    brand: {
       primary: '#d10039',
       secondary: '#2a252c'
    },
    surface: {
      light: '#d9d9d9',
      dark: '#1e1e26'
    }
  },
})

export default theme
