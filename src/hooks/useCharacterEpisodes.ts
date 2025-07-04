import { useEffect, useState } from 'react';
import { Character } from '../typings/character';
import { Episode } from '../typings/episode';
import { getCharacters } from '../services/charactersService';

export function useCharacterEpisodes(character?: Character) {
    const [episodes, setEpisodes] = useState<Episode[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!character) return;

        const fetchEpisodes = async () => {
            try {
                setLoading(true);
                const episodeNumbers = character.episode.map((url) => url.split('/').pop()) as string[];
                const response = await getCharacters(`https://rickandmortyapi.com/api/episode/${episodeNumbers}`);
                const data = Array.isArray(response.data) ? response.data : [response.data];
                setEpisodes(data);
            } catch (err: any) {
                setError(err.message || 'Erro ao buscar episódios');
            } finally {
                setLoading(false);
            }
        };

        fetchEpisodes();
    }, [character]);

    return { episodes, loading, error };
}
