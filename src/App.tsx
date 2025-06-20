import {useRoutes} from 'react-router-dom';
import routes from './routes';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';



function App() {
  const routing = useRoutes(routes)
  
  return (
    <Box >
      <Navbar />
      <>{routing}</>
    </Box>
  )
}

export default App;
