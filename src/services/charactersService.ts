
import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const getCharacters = (url: string = API_URL) => axios.get(url);
