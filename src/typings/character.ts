export interface Character {
    id: number;
    image: string;
    name: string;
    episode: string;
    status: string;
    species: string;
    origin: {
        name?: string;
    };
    location: {
        name?: string;
    };
}
