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
    id: 'sa1',
    name: 'Chihiro Ogino',
    role: 'Protagonist',
    description:
      'A 10-year-old girl who becomes trapped in the spirit world and works at a bathhouse to save her parents.',
    image:
      'https://static.wikia.nocookie.net/astro-boy-productions/images/e/e3/X39xc4.png/revision/latest/thumbnail/width/360/height/360?cb=20201106015804',
    film: 'Spirited Away',
  },
  {
    id: 'sa2',
    name: 'Haku',
    role: 'River Spirit',
    description:
      'A boy who assists Chihiro in navigating the spirit world and helps her in her quest.',
    image:
      'https://static.wikia.nocookie.net/mattsayyay/images/9/90/Haku.png/revision/latest?cb=20221012013613',
    film: 'Spirited Away',
  },
  {
    id: 'mnt1',
    name: 'Totoro',
    role: 'Forest Spirit',
    description:
      'A large, friendly creature who lives in the forest and befriends the two main characters.',
    image:
      'https://static.wikia.nocookie.net/p__/images/4/45/Totoro.png/revision/latest/thumbnail/width/360/height/360?cb=20160227174205&path-prefix=protagonist',
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
      'https://static.wikia.nocookie.net/vsbattles/images/c/ca/Ashitaka_render.png/revision/latest?cb=20160306081514',
    film: 'Princess Mononoke',
  },
  {
    id: 'pm2',
    name: 'San',
    role: 'Princess Mononoke',
    description:
      'A human girl who was raised by wolves and seeks to protect the forest.',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2990b3df-eced-406e-ade8-631cfaa3b95d/df4wrhk-cbc89e88-0532-4d17-9766-1de360c88184.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI5OTBiM2RmLWVjZWQtNDA2ZS1hZGU4LTYzMWNmYWEzYjk1ZFwvZGY0d3Joay1jYmM4OWU4OC0wNTMyLTRkMTctOTc2Ni0xZGUzNjBjODgxODQucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EeLxSBJHU404G4zA0OVNgAbs-O1xiIyediU92PZgWww',
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
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3985ce19-18a5-4d70-a8cb-37fec9c9163b/da8b1c0-28ba132b-f39d-4737-b612-8c261b4d7ab0.png/v1/fit/w_375,h_556/sophie_by_setsulko_da8b1c0-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5ODVjZTE5LTE4YTUtNGQ3MC1hOGNiLTM3ZmVjOWM5MTYzYlwvZGE4YjFjMC0yOGJhMTMyYi1mMzlkLTQ3MzctYjYxMi04YzI2MWI0ZDdhYjAucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EeLxSBJHU404G4zA0OVNgAbs-O1xiIyediU92PZgWww',
    film: "Howl's Moving Castle",
  },
  {
    id: 'kds1',
    name: 'Kiki',
    role: 'Witch',
    description:
      'A young witch who moves to a new town for her mandatory year of independent life and starts a delivery service.',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b82ba2b-aff7-44e6-9afe-a57a5c42014d/dg6hk92-9640a058-cd59-426a-b068-5ec1f2cedc20.png/v1/fill/w_1108,h_721/kiki_render_by_kingevan210_dg6hk92-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFiODJiYTJiLWFmZjctNDRlNi05YWZlLWE1N2E1YzQyMDE0ZFwvZGc2aGs5Mi05NjQwYTA1OC1jZDU5LTQyNmEtYjA2OC01ZWMxZjJjZWRjMjAucG5nIiwid2lkdGgiOiI8PTEyMTQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Xj6kvz5YK5JDzuzJX1LjzwLsIXhqi6LvfeQcDdJsrJ8',
    film: "Kiki's Delivery Service",
  },
  {
    id: 'kds2',
    name: 'Jiji',
    role: 'Talking Cat',
    description:
      "Kiki's loyal companion and talking cat who provides moral support and comic relief.",
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4bc8238a-57c9-470b-9cbf-f0ddda6065af/dervhse-5b9125c3-b334-4eda-89b1-5413cde374f0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiYzgyMzhhLTU3YzktNDcwYi05Y2JmLWYwZGRkYTYwNjVhZlwvZGVydmhzZS01YjkxMjVjMy1iMzM0LTRlZGEtODliMS01NDEzY2RlMzc0ZjAucG5nIiwid2lkdGgiOiI8PTEwODIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.EeLxSBJHU404G4zA0OVNgAbs-O1xiIyediU92PZgWww',
    film: "Kiki's Delivery Service",
  },
  {
    id: 'cits1',
    name: 'Pazu',
    role: 'Protagonist',
    description:
      'A young boy who dreams of finding the legendary floating castle and becomes involved in a quest to protect it.',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fd64e9b-86ed-449d-b3b4-baf717dc5e6e/dg17tuf-ba8b94ee-2e17-48a4-87c4-db5b2ee74466.png/v1/fill/w_176,h_433/pazu_by_animemovierenders18_dg17tuf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDMzIiwicGF0aCI6IlwvZlwvM2ZkNjRlOWItODZlZC00NDlkLWIzYjQtYmFmNzE3ZGM1ZTZlXC9kZzE3dHVmLWJhOGI5NGVlLTJlMTctNDhhNC04N2M0LWRiNWIyZWU3NDQ2Ni5wbmciLCJ3aWR0aCI6Ijw9MTc2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0IFr2dS-YuA9QYi4WdXwDdvxKnz6dySgXnEfQSLvBk',
    film: 'Castle in the Sky',
  },
  {
    id: 'cits2',
    name: 'Sheeta',
    role: 'Protagonist',
    description:
      'A girl who possesses a mysterious crystal necklace and is pursued by both pirates and government agents.',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3fd64e9b-86ed-449d-b3b4-baf717dc5e6e/dg17tyu-72d95a44-7213-4900-81a1-2ea74d9a0f65.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmZDY0ZTliLTg2ZWQtNDQ5ZC1iM2I0LWJhZjcxN2RjNWU2ZVwvZGcxN3R5dS03MmQ5NWE0NC03MjEzLTQ5MDAtODFhMS0yZWE3NGQ5YTBmNjUucG5nIiwid2lkdGgiOiI8PTEyMTQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Xj6kvz5YK5JDzuzJX1LjzwLsIXhqi6LvfeQcDdJsrJ8',
    film: 'Castle in the Sky',
  },
  {
    id: 'twr1',
    name: 'Jiro Horikoshi',
    role: 'Protagonist',
    description:
      'A talented aircraft designer who dreams of creating beautiful airplanes, despite the tragedies of war.',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8122b14-7ad5-468e-8211-20d2941906eb/dbul1bd-d2683d01-7b2f-4d50-bd7b-944b1c37ec37.png/v1/fill/w_1024,h_614,q_80,strp/jiro_horikoshi_by_theautumnsoldier_dbul1bd-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4MTIyYjE0LTdhZDUtNDY4ZS04MjExLTIwZDI5NDE5MDZlYlwvZGJ1bDFiZC1kMjY4M2QwMS03YjJmLTRkNTAtYmQ3Yi05NDRiMWMzN2VjMzcuZ2lmIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sngYpKxF8PtmdejjV2TWw-d_pMxopJ5CzA5aEwPSN3s',
    film: 'The Wind Rises',
  },
  {
    id: 'twr2',
    name: 'Naoko Satomi',
    role: 'Protagonist',
    description:
      'A young woman suffering from tuberculosis who provides inspiration and love for Jiro.',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8122b14-7ad5-468e-8211-20d2941906eb/dbul1b2-6b8d1a91-7242-4ff0-95f5-9fc187fb7997.png/v1/fill/w_1024,h_819,q_80,strp/naoko_satomi_by_theautumnsoldier_dbul1b2-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4MTIyYjE0LTdhZDUtNDY4ZS04MjExLTIwZDI5NDE5MDZlYlwvZGJ1bDFiMi02YjhkMWE5MS03MjQyLTRmZjAtOTVmNS05ZmMxODdmYjc5OTcucG5nIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTEyODkifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.CkrsdOe9I-P_zk7em7K-JtDpvgC8w1M2k48X4vgyrS0',
    film: 'The Wind Rises',
  },
  {
    id: 'ear1',
    name: 'Umi Matsuzaki',
    role: 'Protagonist',
    description:
      'A high school girl who raises flags every morning as a signal to her father, who died during the Korean War.',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2cb7b8c-39f8-4df7-a165-33fc0d1cfb1b/d4q7ymz-10b6c540-c73a-4f7f-b13b-5040b465ef49.png/v1/fill/w_1600,h_1943,q_80,strp/umi_matsuzaki_by_twikidarkness_d4q7ymz-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyY2I3YjhjLTM5ZjgtNGRmNy1hMTY1LTMzZmMwZDFjZmIxYlwvZDRxN3ltei0xMGI2YzU0MC1jNzNhLTRmN2YtYjEzYi01MDQwYjQ2NWVmNDkucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Xj6kvz5YK5JDzuzJX1LjzwLsIXhqi6LvfeQcDdJsrJ8',
    film: 'From Up on Poppy Hill',
  },
  {
    id: 'ear2',
    name: 'Shun Kazama',
    role: 'Protagonist',
    description:
      'A member of the school\'s "Latin Quarter" who dreams of becoming a writer and falls in love with Umi.',
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2cb7b8c-39f8-4df7-a165-33fc0d1cfb1b/d4q7yw7-624e5e95-ee94-40b1-a48c-15de5e7cb381.png/v1/fill/w_1024,h_640,q_80,strp/shun_kazama_by_twikidarkness_d4q7yw7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyY2I3YjhjLTM5ZjgtNGRmNy1hMTY1LTMzZmMwZDFjZmIxYlwvZDRxN3l3Ny02MjRlNWU5NS1lZTk0LTQwYjEtYTQ4Yy0xNWRlNWU3Y2IzODEucG5nIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Xj6kvz5YK5JDzuzJX1LjzwLsIXhqi6LvfeQcDdJsrJ8',
    film: 'From Up on Poppy Hill',
  },
  {
    id: 'emb1',
    name: 'Anna Sasaki',
    role: 'Protagonist',
    description:
      'A young girl who moves to the countryside and befriends Marnie, uncovering the secrets of her past.',
    image:
      'https://static.wikia.nocookie.net/studio-ghibli/images/2/25/Anna.png/revision/latest?cb=20171008114347',
    film: 'When Marnie Was There',
  },
  {
    id: 'emb2',
    name: 'Marnie',
    role: 'Protagonist',
    description:
      'A mysterious girl who befriends Anna and lives in the old mansion by the marsh.',
    image:
      'https://static.wikia.nocookie.net/studio-ghibli/images/3/34/Marnie.png/revision/latest?cb=20160602153805',
    film: 'When Marnie Was There',
  },
];
