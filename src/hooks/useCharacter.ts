import { useState, useEffect, useRef } from 'react';
import { getCharacters } from '../services/charactersService';
import { Character } from '../typings/character';
import { useDebounce } from './useDebounce';

export function useCharacter(search = '') {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [nextUrl, setNextUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const hasFetched = useRef(false);
    const debouncedSearch = useDebounce(search, 300)

    const fetchCharacters = (url?: string, isNewSearch = false) => {
        setLoading(true);

        const fetchUrl = url ?? `https://rickandmortyapi.com/api/character?name=${debouncedSearch}`;

        getCharacters(fetchUrl)
            .then((res) => {
                const { results, info } = res.data;
                setCharacters((prev) => isNewSearch ? results : [...prev, ...results]);
                setNextUrl(info.next);
                setError(null);
            })
            .catch((err) => {
                setCharacters([]);
                setError(`Personagem não encontrado. ${err}` );
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        if (!hasFetched.current) {
            fetchCharacters(undefined, true);
            hasFetched.current = true;
        }
    }, []);

    useEffect(() => {
        fetchCharacters(undefined, true);     
    }, [debouncedSearch]);

    return {
        characters,
        loading,
        error,
        hasNextPage: !!nextUrl,
        loadNextPage: () => nextUrl && fetchCharacters(nextUrl),
    };
}
