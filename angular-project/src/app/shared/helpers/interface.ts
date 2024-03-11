export interface CharacterType {
  id: string;
  name: {
    real: string;
    hero: string;
  };
  role: string;
  class?: string;
  affiliation: string;
  image: {
    cover: string;
    portrait: string;
    banner: string;
  };
  address: {
    street: string;
    city: string;
    zipcode: string;
  }[];
  email: string;
  gender: string;
  ability: {
    image: string;
    name: string;
    description: string;
  }[];
  description: string;
  age: number;
  height: number;
  weight: number;
  contacts: {
    type: string;
    value: string;
  }[];
  bornDate: string;
  popularity: number;
}
