import { CharacterType, FilmType } from './interface';

export const ghibliFilms: FilmType[] = [
  {
    id: 'a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6',
    title: 'Spirited Away',
    director: 'Hayao Miyazaki',
    releaseYear: 2001,
    description:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    duration: '125 minutes',
    rating: 'PG',
    image: {
      main: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      heading:
        'https://www.hollywoodreporter.com/wp-content/uploads/2020/01/poster02_2_1_1.jpg?w=1296',
    },
  },
  {
    id: 'ji82c3d4-e7ff-gsh8-i9j0-k1l2m3n4o5p6',
    title: 'My Neighbor Totoro',
    director: 'Hayao Miyazaki',
    releaseYear: 1988,
    description:
      'When two girls move to the country to be near their ailing mother, they have adventures with the wondrous forest spirits who live nearby.',
    duration: '86 minutes',
    rating: 'G',
    image: {
      main: 'https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      heading: 'https://cdn8.openculture.com/2022/06/30225502/totoro.jpeg',
    },
  },
  {
    id: 'po82c3d4-e7ff-gau8-i090-pol6f3n4o5p6',
    title: 'Princess Mononoke',
    director: 'Hayao Miyazaki',
    releaseYear: 1997,
    description:
      "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony.",
    duration: '134 minutes',
    rating: 'PG-13',
    image: {
      main: 'https://m.media-amazon.com/images/M/MV5BNTZkYmI0MmEtNGFlZC00OWZjLWFjMmItMjk1OWZkOWJiZGVjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      heading:
        'https://miro.medium.com/v2/resize:fit:758/1*ga8kbfjjbpIQ7FpiKJrGGA.jpeg',
    },
  },
  {
    id: 'lk82g2d4-e7tt-gsht-i9t0-k1l2maa4o5p6',
    title: "Howl's Moving Castle",
    director: 'Hayao Miyazaki',
    releaseYear: 2004,
    description:
      'When an unconfident young woman is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking castle.',
    duration: '119 minutes',
    rating: 'PG',
    image: {
      main: 'https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      heading:
        'https://www.kennedy-center.org/globalassets/nso/2023-2024/_nso_eventimage_1600x900_wolftrapjusticeforum_howlsmovingcastle.jpg?width=1600&quality=70',
    },
  },
  {
    id: '999993d4-e7ff-gsh8-i9j0-k1l2m3n4o5p6',
    title: "Kiki's Delivery Service",
    director: 'Hayao Miyazaki',
    releaseYear: 1989,
    description:
      'A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.',
    duration: '103 minutes',
    rating: 'G',
    image: {
      main: 'https://m.media-amazon.com/images/M/MV5BYTQ1ZTM1ZTgtN2Q2Ny00YjFkLTliNjEtN2I1ZmY5ZTY1OTEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
      heading:
        'https://thequaysidereviewmovie.files.wordpress.com/2020/03/kikisdelser-1.jpg',
    },
  },
  {
    id: 'mnopc3r5-e7ff-gsh8-i9j0-k1l2m3n4o5p6',
    title: 'Castle in the Sky',
    director: 'Hayao Miyazaki',
    releaseYear: 1986,
    description:
      'A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.',
    duration: '124 minutes',
    rating: 'PG',
    image: {
      main: 'https://m.media-amazon.com/images/M/MV5BNDFhZmY2NTgtMzljYy00MTlhLTgyMjItNTEwZWJkYThhYzkyXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg',
      heading:
        'https://static1.srcdn.com/wordpress/wp-content/uploads/castle-in-the-sky.jpg',
    },
  },
  {
    id: '12345678-e7ff-gsh8-i9j0-k1l2m3n4o5p6',
    title: 'The Wind Rises',
    director: 'Hayao Miyazaki',
    releaseYear: 2013,
    description:
      'A look at the life of Jiro Horikoshi, the man who designed Japanese fighter planes during World War II.',
    duration: '126 minutes',
    rating: 'PG-13',
    image: {
      main: 'https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg',
      heading:
        'https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/the-wind-rises-2013/WindRises-2014-1.jpg',
    },
  },
  {
    id: 'jibhiop4-e7ff-gsh8-i9j0-k1l2m3n4o5p6',
    title: 'Ponyo',
    director: 'Hayao Miyazaki',
    releaseYear: 2008,
    description:
      'A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.',
    duration: '101 minutes',
    rating: 'G',
    image: {
      main: 'https://m.media-amazon.com/images/M/MV5BOTc3YmM3N2QtODZkMC00ZDE5LThjMTQtYTljN2Y1YTYwYWJkXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_FMjpg_UX1000_.jpg',
      heading:
        'https://assets.vogue.com/photos/58920a3f9c1609bf7a72ff7d/master/pass/ponyo2.jpg',
    },
  },
];

export const ghibliCharacters: CharacterType[] = [
  {
    id: 'kds2',
    name: 'Jiji',
    role: 'Talking Cat',
    description:
      "Kiki's loyal companion and talking cat who provides moral support and comic relief.",
    image:
      'https://i.pinimg.com/564x/07/73/5a/07735a9af5e13f3601c7572d623d1aa3.jpg',
    film: "Kiki's Delivery Service",
  },
  {
    id: 'cits1',
    name: 'Pazu',
    role: 'Protagonist',
    description:
      'A young boy who dreams of finding the legendary floating castle and becomes involved in a quest to protect it.',
    image:
      'https://i.pinimg.com/originals/8e/51/9a/8e519a20a4abcf5dc43b27a60a2df792.jpg',
    film: 'Castle in the Sky',
  },
  {
    id: 'cits2',
    name: 'Sheeta',
    role: 'Protagonist',
    description:
      'A girl who possesses a mysterious crystal necklace and is pursued by both pirates and government agents.',
    image:
      'https://i.pinimg.com/736x/0c/3b/0d/0c3b0dd3db4c557d08b5335f6def330b.jpg',
    film: 'Castle in the Sky',
  },
  {
    id: 'twr1',
    name: 'Jiro Horikoshi',
    role: 'Protagonist',
    description:
      'A talented aircraft designer who dreams of creating beautiful airplanes, despite the tragedies of war.',
    image:
      'https://i.pinimg.com/originals/ca/78/ad/ca78ad83e9c9a5caaf1c9fdc0eab87eb.jpg',
    film: 'The Wind Rises',
  },
  {
    id: 'twr2',
    name: 'Naoko Satomi',
    role: 'Protagonist',
    description:
      'A young woman suffering from tuberculosis who provides inspiration and love for Jiro.',
    image:
      'https://i.pinimg.com/736x/fd/d5/7c/fdd57c2f14ca8e28ff4b9fd7996f0d75.jpg',
    film: 'The Wind Rises',
  },
  {
    id: 'ear1',
    name: 'Umi Matsuzaki',
    role: 'Protagonist',
    description:
      'A high school girl who raises flags every morning as a signal to her father, who died during the Korean War.',
    image:
      'https://i.pinimg.com/736x/97/e7/60/97e76054312b178e76e898d3959aba43.jpg',
    film: 'From Up on Poppy Hill',
  },
  {
    id: 'ear2',
    name: 'Shun Kazama',
    role: 'Protagonist',
    description:
      'A member of the school\'s "Latin Quarter" who dreams of becoming a writer and falls in love with Umi.',
    image:
      'https://i.pinimg.com/originals/92/db/37/92db37191783e653531023abd2354924.jpg',
    film: 'From Up on Poppy Hill',
  },
  {
    id: 'emb1',
    name: 'Anna Sasaki',
    role: 'Protagonist',
    description:
      'A young girl who moves to the countryside and befriends Marnie, uncovering the secrets of her past.',
    image:
      'https://i.pinimg.com/736x/e0/36/64/e036646592f20d3aa85564cbd9cd612e.jpg',
    film: 'When Marnie Was There',
  },
  {
    id: 'emb2',
    name: 'Marnie',
    role: 'Protagonist',
    description:
      'A mysterious girl who befriends Anna and lives in the old mansion by the marsh.',
    image:
      'https://i.pinimg.com/originals/b1/b1/6f/b1b16f41b55fb1583ecfa09b8c9ee24c.jpg',
    film: 'When Marnie Was There',
  },
  {
    id: 'sa1',
    name: 'Chihiro Ogino',
    role: 'Protagonist',
    description:
      'A 10-year-old girl who becomes trapped in the spirit world and works at a bathhouse to save her parents.',
    image:
      'https://static.wikia.nocookie.net/astro-boy-productions/images/e/e3/X39xc4.png',
    film: 'Spirited Away',
  },
  {
    id: 'sa2',
    name: 'Haku',
    role: 'River Spirit',
    description:
      'A boy who assists Chihiro in navigating the spirit world and helps her in her quest.',
    image: 'https://static.wikia.nocookie.net/mattsayyay/images/9/90/Haku.png',
    film: 'Spirited Away',
  },
  {
    id: 'mnt1',
    name: 'Totoro',
    role: 'Forest Spirit',
    description:
      'A large, friendly creature who lives in the forest and befriends the two main characters.',
    image:
      'https://cdnb.artstation.com/p/assets/images/images/023/696/733/large/marina-orgaz-totoro-5.jpg?1580067203',
    film: 'My Neighbor Totoro',
  },
  {
    id: 'mnt2',
    name: 'Satsuki Kusakabe',
    role: 'Protagonist',
    description:
      'The older sister who takes care of her younger sister Mei while their mother is ill.',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fd64e9b-86ed-449d-b3b4-baf717dc5e6e/dgcp7xl-702997b1-bfd0-4c6b-83f1-7c04eebfaf0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmZDY0ZTliLTg2ZWQtNDQ5ZC1iM2I0LWJhZjcxN2RjNWU2ZVwvZGdjcDd4bC03MDI5OTdiMS1iZmQwLTRjNmItODNmMS03YzA0ZWViZmFmMGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0Fmk7Nd5lZt8tYi5vEryXF5tlhHiNdeTvM8O_YEDmg0',
    film: 'My Neighbor Totoro',
  },
  {
    id: 'pm1',
    name: 'Ashitaka',
    role: 'Protagonist',
    description:
      'A prince who becomes involved in the conflict between the forest gods and humans.',
    image:
      'https://static.wikia.nocookie.net/vsbattles/images/c/ca/Ashitaka_render.png',
    film: 'Princess Mononoke',
  },
  {
    id: 'pm2',
    name: 'San',
    role: 'Princess Mononoke',
    description:
      'A human girl who was raised by wolves and seeks to protect the forest.',
    image:
      'https://i.pinimg.com/736x/74/70/27/7470271ad2bdf5c2152979c1ac89af19.jpg',
    film: 'Princess Mononoke',
  },
  {
    id: 'hmc1',
    name: 'Howl Jenkins Pendragon',
    role: 'Wizard',
    description:
      'A young, powerful wizard who lives in a moving castle and is rumored to steal the hearts of beautiful girls.',
    image: 'https://pbs.twimg.com/media/EXOSs4DVcAA0LjS.png',
    film: "Howl's Moving Castle",
  },
  {
    id: 'hmc2',
    name: 'Sophie Hatter',
    role: 'Protagonist',
    description:
      'A young woman who is cursed by a witch and transforms into an old woman. She seeks the help of Howl to break the curse.',
    image:
      'https://thicc.mywaifulist.moe/waifus/18127/7b673b37bc9076e7872b5259d5a61c7bf067c8ffb37a39409578fbe58c6cb9ab_thumb.jpg',
    film: "Howl's Moving Castle",
  },
  {
    id: 'kds1',
    name: 'Kiki',
    role: 'Witch',
    description:
      'A young witch who moves to a new town for her mandatory year of independent life and starts a delivery service.',
    image:
      'https://i.pinimg.com/originals/d5/c4/30/d5c4309a9315b63ca1b37d32727eb012.jpg',
    film: "Kiki's Delivery Service",
  },
];
