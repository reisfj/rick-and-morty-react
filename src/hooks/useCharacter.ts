import { useState, useEffect, useRef } from 'react';
import { getCharacters } from '../services/charactersService';

export function useCharacter(search = '') {
    const [characters, setCharacters] = useState<string[]>([]);
    const [nextUrl, setNextUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const hasFetched = useRef(false);

    const fetchCharacters = (url?: string, isNewSearch = false) => {
        setLoading(true);

        const fetchUrl = url ?? `https://rickandmortyapi.com/api/character?name=${search}`;

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
        if (search !== '') {
            fetchCharacters(undefined, true);
        }
    }, [search]);

    return {
        characters,
        loading,
        error,
        hasNextPage: !!nextUrl,
        loadNextPage: () => nextUrl && fetchCharacters(nextUrl),
    };
}
