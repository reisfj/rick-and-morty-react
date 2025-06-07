import { Box, Heading, Text, Center } from "@chakra-ui/react";

function App() {
  return (
    <Center minH="100vh" bg="surface.dark">
      <Box p={8} bg="surface.light" borderRadius="lg" boxShadow="lg" textAlign="center">
        <Heading as="h1" size="xl" mb={4} color="brand.primary">
          Bem-vindo!
        </Heading>
        <Text fontSize="lg" color="brand.secondary">
          Esta é uma página modelo, agora personalize da sua forma.
        </Text>
      </Box>
    </Center>
  );
}

export default App;
