import { CharacterType, FilmType } from './interface';

export const ghibliFilms: FilmType[] = [
  {
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

export const ghibliCharacters: { [key: string]: CharacterType[] } = {
  'Spirited Away': [
    {
      name: 'Chihiro Ogino',
      role: 'Protagonist',
      description:
        'A 10-year-old girl who becomes trapped in the spirit world and works at a bathhouse to save her parents.',
      image:
        'https://static.wikia.nocookie.net/astro-boy-productions/images/e/e3/X39xc4.png/revision/latest/thumbnail/width/360/height/360?cb=20201106015804',
    },
    {
      name: 'Haku',
      role: 'River Spirit',
      description:
        'A boy who assists Chihiro in navigating the spirit world and helps her in her quest.',
      image:
        'https://static.wikia.nocookie.net/mattsayyay/images/9/90/Haku.png/revision/latest?cb=20221012013613',
    },
  ],
  'My Neighbor Totoro': [
    {
      name: 'Totoro',
      role: 'Forest Spirit',
      description:
        'A large, friendly creature who lives in the forest and befriends the two main characters.',
      image:
        'https://static.wikia.nocookie.net/p__/images/4/45/Totoro.png/revision/latest/thumbnail/width/360/height/360?cb=20160227174205&path-prefix=protagonist',
    },
    {
      name: 'Satsuki Kusakabe',
      role: 'Protagonist',
      description:
        'The older sister who takes care of her younger sister Mei while their mother is ill.',
      image:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fd64e9b-86ed-449d-b3b4-baf717dc5e6e/dgcp7xl-702997b1-bfd0-4c6b-83f1-7c04eebfaf0b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmZDY0ZTliLTg2ZWQtNDQ5ZC1iM2I0LWJhZjcxN2RjNWU2ZVwvZGdjcDd4bC03MDI5OTdiMS1iZmQwLTRjNmItODNmMS03YzA0ZWViZmFmMGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0Fmk7Nd5lZt8tYi5vEryXF5tlhHiNdeTvM8O_YEDmg0',
    },
  ],
  'Princess Mononoke': [
    {
      name: 'Ashitaka',
      role: 'Protagonist',
      description:
        'A prince who becomes involved in the conflict between the forest gods and humans.',
      image:
        'https://static.wikia.nocookie.net/vsbattles/images/c/ca/Ashitaka_render.png/revision/latest?cb=20160306081514',
    },
    {
      name: 'San',
      role: 'Princess Mononoke',
      description:
        'A human girl who was raised by wolves and seeks to protect the forest.',
      image:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2990b3df-eced-406e-ade8-631cfaa3b95d/df4wrhk-cbc89e88-0532-4d17-9766-1de360c88184.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5OTBiM2RmLWVjZWQtNDA2ZS1hZGU4LTYzMWNmYWEzYjk1ZFwvZGY0d3Joay1jYmM4OWU4OC0wNTMyLTRkMTctOTc2Ni0xZGUzNjBjODgxODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zMKcMy7aN76nlCeTY9ei7JiYUBf-ymq-D2gdU8gRVU8',
    },
  ],
  "Howl's Moving Castle": [
    {
      name: 'Howl Jenkins Pendragon',
      role: 'Wizard',
      description:
        'A young, powerful wizard who lives in a moving castle and is rumored to steal the hearts of beautiful girls.',
      image: 'https://pbs.twimg.com/media/EXOSs4DVcAA0LjS.png',
    },
    {
      name: 'Sophie Hatter',
      role: 'Protagonist',
      description:
        'A young woman who is cursed by a witch and transforms into an old woman. She seeks the help of Howl to break the curse.',
      image:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3985ce19-18a5-4d70-a8cb-37fec9c9163b/da8b1c0-28ba132b-f39d-4737-b612-8c261b4d7ab0.png/v1/fit/w_375,h_556/sophie_by_setsulko_da8b1c0-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTUxOSIsInBhdGgiOiJcL2ZcLzM5ODVjZTE5LTE4YTUtNGQ3MC1hOGNiLTM3ZmVjOWM5MTYzYlwvZGE4YjFjMC0yOGJhMTMyYi1mMzlkLTQ3MzctYjYxMi04YzI2MWI0ZDdhYjAucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EeLxSBJHU404G4zA0OVNgAbs-O1xiIyediU92PZgWww',
    },
  ],
  "Kiki's Delivery Service": [
    {
      name: 'Kiki',
      role: 'Witch',
      description:
        'A young witch who moves to a new town for her mandatory year of independent life and starts a delivery service.',
      image:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b82ba2b-aff7-44e6-9afe-a57a5c42014d/dg6hk92-9640a058-cd59-426a-b068-5ec1f2cedc20.png/v1/fill/w_1108,h_721/kiki_render_by_kingevan210_dg6hk92-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODMzIiwicGF0aCI6IlwvZlwvMWI4MmJhMmItYWZmNy00NGU2LTlhZmUtYTU3YTVjNDIwMTRkXC9kZzZoazkyLTk2NDBhMDU4LWNkNTktNDI2YS1iMDY4LTVlYzFmMmNlZGMyMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.qGTfAqaOkmuIs6hqOMFrS6mdXs_e9Xs-ft9mC-zCaB0',
    },
    {
      name: 'Jiji',
      role: 'Talking Cat',
      description:
        "Kiki's loyal companion and talking cat who provides moral support and comic relief.",
      image:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4bc8238a-57c9-470b-9cbf-f0ddda6065af/dervhse-5b9125c3-b334-4eda-89b1-5413cde374f0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiYzgyMzhhLTU3YzktNDcwYi05Y2JmLWYwZGRkYTYwNjVhZlwvZGVydmhzZS01YjkxMjVjMy1iMzM0LTRlZGEtODliMS01NDEzY2RlMzc0ZjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ITUh-g7aQIp2Nf48mj9O51D8gjqC9hYD2ZgCHqFBuQ8',
    },
  ],
  'Castle in the Sky': [
    {
      name: 'Pazu',
      role: 'Protagonist',
      description:
        'A young boy who dreams of finding the legendary floating castle and becomes involved in a quest to protect it.',
      image:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fd64e9b-86ed-449d-b3b4-baf717dc5e6e/dg17tuf-ba8b94ee-2e17-48a4-87c4-db5b2ee74466.png/v1/fill/w_176,h_433/pazu_by_animemovierenders18_dg17tuf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDMzIiwicGF0aCI6IlwvZlwvM2ZkNjRlOWItODZlZC00NDlkLWIzYjQtYmFmNzE3ZGM1ZTZlXC9kZzE3dHVmLWJhOGI5NGVlLTJlMTctNDhhNC04N2M0LWRiNWIyZWU3NDQ2Ni5wbmciLCJ3aWR0aCI6Ijw9MTc2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.R0IFr2dS-YuA9QYi4WdXwDdvxKnz6dySgXnEfQSLvBk',
    },
    {
      name: 'Sheeta',
      role: 'Protagonist',
      description:
        'A girl who possesses a mysterious crystal necklace and is pursued by both pirates and government agents.',
      image:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fd64e9b-86ed-449d-b3b4-baf717dc5e6e/dg17tyu-72d95a44-7213-4900-81a1-2ea74d9a0f65.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmZDY0ZTliLTg2ZWQtNDQ5ZC1iM2I0LWJhZjcxN2RjNWU2ZVwvZGcxN3R5dS03MmQ5NWE0NC03MjEzLTQ5MDAtODFhMS0yZWE3NGQ5YTBmNjUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YwcJkfznmzFFjCbIawqimDKCwi1Z_2tYbYhiNkN17qQ',
    },
  ],
  'The Wind Rises': [
    {
      name: 'Jiro Horikoshi',
      role: 'Protagonist',
      description:
        'A talented aircraft designer who dreams of creating beautiful airplanes, despite the tragedies of war.',
      image:
        'https://i.pinimg.com/originals/9a/e7/92/9ae7924208e0e769219452121b26a7da.png',
    },
    {
      name: 'Naoko Satomi',
      role: 'Love Interest',
      description:
        "A young woman who shares Jiro's passion for aircraft and becomes his love interest.",
      image:
        'https://i.pinimg.com/originals/84/73/ec/8473ec4290f884d48af8ce275723dafa.png',
    },
  ],
  'Ponyo': [
    {
      name: 'Ponyo',
      role: 'Goldfish Princess',
      description:
        'A young goldfish who longs to become human and befriends a young boy named Sosuke.',
      image:
        'https://mbavery.github.io/iffall2017/microsite/finished/images/ponyo.png',
    },
    {
      name: 'Sosuke',
      role: 'Protagonist',
      description:
        'A young boy who discovers Ponyo and helps her on her journey to become human.',
      image:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b83bd9fd-9059-4f6f-a1d6-cc3d385a5f6a/d37t0uc-965a4a46-b2b7-48e2-aa6a-fab4354365f0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2I4M2JkOWZkLTkwNTktNGY2Zi1hMWQ2LWNjM2QzODVhNWY2YVwvZDM3dDB1Yy05NjVhNGE0Ni1iMmI3LTQ4ZTItYWE2YS1mYWI0MzU0MzY1ZjAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Xj6kvz5YK5JDzuzJX1LjzwLsIXhqi6LvfeQcDdJsrJ8',
    },
  ],
};
