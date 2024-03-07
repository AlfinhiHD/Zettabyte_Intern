export interface FilmType {
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
  name: string;
  role: string;
  description: string;
  image: string;
}
