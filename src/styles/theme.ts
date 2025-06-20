import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
});


const theme = extendTheme({
  colors: {
    brand: {
      primary: '#1e1e26',
      secondary: '#5F4B8B'
    },
    surface: {
      light: '#d9d9d9',
      dark: '#1e1e26'
    }
  },

  styles: {
    global: {
      html: {
        height: '100%',
      },
      body: {
        bg: 'brand.primary',
        color: 'white',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
      },
      '#root': {
        height: '100%',
        minHeight: '100vh',
      },
    },
  },
})


export default theme