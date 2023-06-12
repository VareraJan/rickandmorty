export interface Character {
    id: number;
    name: string;
    status: string; // The status of the character ('Alive', 'Dead' or 'unknown').
    species: string;
    type: string; // The type or subspecies of the character.
    gender: string; // The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
    origin: {
        name: string;
        url: string;
    }; 
    location: {
        name: string;
        url: string;
    };
    image: string; // url
    episoder: string[]; //url[]
    url: string; 
    created: string;
}