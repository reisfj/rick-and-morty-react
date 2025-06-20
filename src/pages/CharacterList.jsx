import { Box, Button, ListItem, Spinner, Text, UnorderedList } from "@chakra-ui/react";
import {useCharacter} from "../hooks/useCharacter"

export default function CharacterList(){
   const {characters, loading, error, hasNextPage, loadNextPage} = useCharacter();
   
   if (loading && characters.length === 0) return <Spinner size="lg"/>;
   if (error) return <Text color="red.500">Erro: {error}</Text>


    return (
      <Box p={4}>
        <UnorderedList  spacing={3} pl={4}>
          {characters.map((character) => (
            <ListItem key={character.id} fontWeight="medium" color="white">
              {character.name}
            </ListItem>
          ))}
        </UnorderedList>

        {hasNextPage && (
          <Button mt={4} onClick={loadNextPage} isLoading={loading}>
            Vizualizar mais
          </Button>
        )}

        {!hasNextPage && (
          <Text mt={4} color="gray.500">
            Não há mais personagens.
          </Text>
        )}
      </Box>
    )
};