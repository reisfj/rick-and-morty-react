import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  breakpoints: {
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
  },
  colors: {
    brand: {
      primary: '#1e1e26',
      secondary: '#7fc447',
      text: "#ffffff"
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

  components: {
    Button: {
      variants: {
        solidPrimary: {
          border: "1px solid #fff",
          bg: "brand.primary",
          color: "brand.text",
          _hover: {
            bg: 'brand.secondary',
            color: 'brand.primary',
            border: '1px solid',
          },
        },
      },
    },
    Spinner: {
      variants: {
        solidPrimary: {
          display: "flex",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", 
          color: "brand.secondary", 
        },
      },
      defaultProps: {
        size: "lg", 
        variant: "solidPrimary",
      },
    },
  },

})

export default theme