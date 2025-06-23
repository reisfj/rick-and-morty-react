import { useState, useEffect, useRef } from 'react';
import { getCharacters } from '../services/charactersService';


export function useCharacter() {
    const [characters, setCharacters] = useState<string[]>([]);
    const [nextUrl, setNextUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const hasFetched = useRef(false);

    const fetchCharacters = (url?: string) => {
        setLoading(true);
        getCharacters(url)
            .then((res) => {
                const { results, info } = res.data;
                setCharacters((prev) => [...prev, ...results]);
                setNextUrl(info.next);
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));

    }

    useEffect(() => {
        if (!hasFetched.current) {
            fetchCharacters();
            hasFetched.current = true;}
    }, []);

    return { characters, loading, error, hasNextPage: !!nextUrl, loadNextPage: () => nextUrl && fetchCharacters(nextUrl) };
}
