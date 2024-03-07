export interface FilmType {
  id: string;
  title: string;
  director: string;
  releaseYear: number;
  description: string;
  duration: string;
  rating: string;
  image: {
    main: string;
    heading: string;
  };
}

  export interface CharacterType {
    id: string;
    name: string;
    role: string;
    description: string;
    image: string;
    film: string;
  }
