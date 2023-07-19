

interface Character {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string,
        extension: string
    }
}


interface CharacterDataWrapper {
    results: Character[]
}