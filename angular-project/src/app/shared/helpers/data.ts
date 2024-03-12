import { v4 as uuidv4 } from 'uuid';
import { CharacterType } from './interface';

export const CharactersData: CharacterType[] = [
  {
    id: uuidv4(),
    name: {
      real: 'Izuku Midoriya',
      hero: 'Deku',
    },
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/2/25/Izuku_Midoriya_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/0e/Izuku_Midoriya_2nd_Costume_Full.png',
      banner:
        'https://i.pinimg.com/originals/50/00/83/5000835521c7a24438397d3b17a80e2b.png',
    },
    address: [
      {
        street: '123 Deku Street',
        city: 'Musutafu',
        zipcode: '36985',
      },
    ],
    email: 'midoriya@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'one_for_all.jpg',
        name: 'One For All',
        description: `Izuku Midoriya is the ninth user of the quirk One For All, which stockpiles power and can be passed 
                          down from one user to another. It grants immense strength, speed, and agility to its wielder.`,
      },
      {
        image: 'full_cowl.jpg',
        name: 'Full Cowl',
        description: `Full Cowl is a technique developed by Izuku Midoriya to utilize One For All throughout his body, 
                          granting him enhanced physical abilities without the risk of injuring himself.`,
      },
    ],
    description: `Izuku Midoriya is the main protagonist of Boku no Hero Academia. 
                      He is a student in Class 1-A at U.A. High School known for his strong sense of justice and determination to become a hero.`,
    age: 16,
    height: 166, // in centimeters
    weight: 62, // in kilograms
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/izuku-midoriya',
      },
      {
        type: 'phone number',
        value: '+1 123-456-7890',
      },
      {
        type: 'email',
        value: 'izuku@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@izuku_midoriya',
      },
    ],
    bornDate: '07/15/2008', // Born Date format: MM/DD/YYYY
    popularity: 95, // Popularity range: 1-100
  },
  {
    id: uuidv4(),
    name: {
      real: 'Katsuki Bakugo',
      hero: 'Daibaku Kisshin',
    },
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/c/cd/Katsuki_Bakugo_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/83/Katsuki_Bakugo_School_Uniform_Full_Body.png',
      banner: 'https://picfiles.alphacoders.com/616/616092.png',
    },
    address: [
      {
        street: '456 Explosive Lane',
        city: 'Musutafu',
        zipcode: '14725',
      },
    ],
    email: 'bakugo@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'explosion.jpg',
        name: 'Explosion',
        description: `Katsuki Bakugo possesses the quirk Explosion, which allows him to secrete nitroglycerin-like sweat 
                          from his palms, which he can ignite to create powerful explosions.`,
      },
    ],
    description: `Katsuki Bakugo is one of the main characters of Boku no Hero Academia. 
                      He is a student in Class 1-A at U.A. High School known for his explosive temper and fierce determination.`,
    age: 16,
    height: 172, // in centimeters
    weight: 70, // in kilograms
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/katsuki-bakugo',
      },
      {
        type: 'phone number',
        value: '+1 987-654-3210',
      },
      {
        type: 'email',
        value: 'bakugo@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@bakugo_katsuki',
      },
    ],
    bornDate: '04/20/2008', // Born Date format: MM/DD/YYYY
    popularity: 90, // Popularity range: 1-100
  },
  {
    id: uuidv4(),
    name: {
      real: 'Shoto Todoroki',
      hero: 'Shoto',
    },
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/7f/Shoto_Todoroki_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/c/c4/Shoto_Todoroki_school_profile.png',
      banner: 'https://artfiles.alphacoders.com/115/115157.jpg',
    },
    address: [
      {
        street: '789 Ice Avenue',
        city: 'Musutafu',
        zipcode: '25841',
      },
    ],
    email: 'todoroki@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'half_hot_half_cold.jpg',
        name: 'Half Hot Half Cold',
        description: `Shoto Todoroki possesses the quirk Half Hot Half Cold, inherited from his father, Enji Todoroki 
                            (also known as Endeavor), which allows him to generate and control fire with his left side and ice with his right side.`,
      },
    ],
    description: `Shoto Todoroki is one of the main characters of Boku no Hero Academia. 
                        He is a student in Class 1-A at U.A. High School known for his stoic demeanor and powerful quirk.`,
    age: 16,
    height: 176, // in centimeters
    weight: 68, // in kilograms
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/shoto-todoroki',
      },
      {
        type: 'phone number',
        value: '+1 555-123-4567',
      },
      {
        type: 'email',
        value: 'todoroki@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@shoto_todoroki',
      },
    ],
    bornDate: '01/11/2008', // Born Date format: MM/DD/YYYY
    popularity: 85, // Popularity range: 1-100
  },
  {
    id: uuidv4(),
    name: {
      real: 'Ochaco Uraraka',
      hero: 'Uravity',
    },
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/78/Ochaco_Uraraka_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/69/Ochaco_School_Uniform_Full_Body.png',
      banner:
        'https://c4.wallpaperflare.com/wallpaper/702/604/41/anime-boku-no-hero-boku-no-hero-academia-anime-girls-uraraka-ochako-hd-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '246 Gravity Road',
        city: 'Musutafu',
        zipcode: '78542',
      },
    ],
    email: 'uraraka@ua.academia.com',
    gender: 'Female',
    ability: [
      {
        image: 'zero_gravity.jpg',
        name: 'Zero Gravity',
        description: `Ochaco Uraraka possesses the quirk Zero Gravity, which allows her to make objects she touches float 
                            by removing their gravitational pull temporarily.`,
      },
    ],
    description: `Ochaco Uraraka is one of the main characters of Boku no Hero Academia. 
                        She is a student in Class 1-A at U.A. High School known for her bubbly personality and strong determination to become a hero.`,
    age: 16,
    height: 156, // in centimeters
    weight: 49, // in kilograms
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/ochaco-uraraka',
      },
      {
        type: 'phone number',
        value: '+1 555-987-6543',
      },
      {
        type: 'email',
        value: 'uraraka@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@ochaco_uraraka',
      },
    ],
    bornDate: '12/27/2008', // Born Date format: MM/DD/YYYY
    popularity: 80, // Popularity range: 1-100
  },
  {
    id: uuidv4(),
    name: {
      real: 'Shota Aizawa',
      hero: 'Eraser Head',
    },
    role: 'Teacher',
    class: '',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/ba/Eraser_Head_Anime_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/77/Post-War_Shota_Aizawa_Hero_Costume_%28Anime%29.png',
      banner:
        'https://c4.wallpaperflare.com/wallpaper/668/70/476/anime-my-hero-academia-shota-aizawa-hd-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '789 Eraserhead Street',
        city: 'Musutafu',
        zipcode: '36985',
      },
    ],
    email: 'aizawa@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'eraserhead.jpg',
        name: 'Erasure',
        description: `Shota Aizawa possesses the quirk Erasure, which allows him to nullify the quirks of anyone he looks at 
                            by maintaining eye contact.`,
      },
    ],
    description: `Shota Aizawa, also known as Eraser Head, is a Pro Hero and the homeroom teacher of Class 1-A at U.A. High School. 
                        He is known for his strict demeanor and unwavering dedication to training his students.`,
    age: 30,
    height: 183, // in centimeters
    weight: 76, // in kilograms
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/shota-aizawa',
      },
      {
        type: 'phone number',
        value: '+1 555-987-6543',
      },
      {
        type: 'email',
        value: 'aizawa@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@eraser_head',
      },
    ],
    bornDate: '11/08/1978', // Born Date format: MM/DD/YYYY
    popularity: 85, // Popularity range: 1-100
  },
  {
    id: uuidv4(),
    name: {
      real: 'Toshinori Yagi',
      hero: 'All Might',
    },
    role: 'Teacher',
    class: '',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/ec/All_Might_Anime_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/c/cd/Toshinori_Yagi_Golden_Age_Hero_Costume_%28Anime%29.png',
      banner:
        'https://c4.wallpaperflare.com/wallpaper/635/923/784/anime-my-hero-academia-all-might-hd-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '246 Symbol of Peace Avenue',
        city: 'Musutafu',
        zipcode: '78542',
      },
    ],
    email: 'allmight@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'one_for_all.jpg',
        name: 'One For All',
        description: `All Might is the eighth user of the quirk One For All, which stockpiles power and can be passed 
                          down from one user to another. It grants immense strength, speed, and agility to its wielder.`,
      },
    ],
    description: `All Might, also known as Toshinori Yagi, is the Symbol of Peace and the No. 1 Pro Hero. 
                      He was the previous wielder of One For All and a teacher at U.A. High School.`,
    age: 49,
    height: 220, // in centimeters
    weight: 255, // in kilograms
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/all-might',
      },
      {
        type: 'phone number',
        value: '+1 555-123-4567',
      },
      {
        type: 'email',
        value: 'allmight@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@symbol_of_peace',
      },
    ],
    bornDate: '03/08/1975', // Born Date format: MM/DD/YYYY
    popularity: 100, // Popularity range: 1-100
  },
  {
    id: uuidv4(),
    name: {
      real: 'Tsuyu Asui',
      hero: 'Froppy',
    },
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/7c/Tsuyu_Asui_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/d/dc/Tsuyu_Asui_School_Uniform.png',
      banner:
        'https://c4.wallpaperflare.com/wallpaper/900/93/120/anime-my-hero-academia-tsuyu-asui-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '123 Froggy Lane',
        city: 'Musutafu',
        zipcode: '36985',
      },
    ],
    email: 'asui@ua.academia.com',
    gender: 'Female',
    ability: [
      {
        image: 'frog_form.jpg',
        name: 'Frog Form',
        description: `Tsuyu Asui possesses the quirk Frog, which grants her a frog-like appearance and abilities, 
                          including enhanced agility, a prehensile tongue, and the ability to stick to walls.`,
      },
    ],
    description: `Tsuyu Asui is one of the main characters of Boku no Hero Academia. 
                      She is a student in Class 1-A at U.A. High School known for her calm and level-headed demeanor, 
                      as well as her ability to adapt to various situations.`,
    age: 16,
    height: 150, // in centimeters
    weight: 45, // in kilograms
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/tsuyu-asui',
      },
      {
        type: 'phone number',
        value: '+1 555-123-4567',
      },
      {
        type: 'email',
        value: 'asui@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@froppy',
      },
    ],
    bornDate: '03/08/2008', // Born Date format: MM/DD/YYYY
    popularity: 80, // Popularity range: 1-100
  },
  {
    id: uuidv4(),
    name: {
      real: 'Denki Kaminari',
      hero: 'Chargebolt',
    },
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/b0/Denki_Kaminari_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/bb/Denki_Kaminari.png',
      banner:
        'https://c4.wallpaperflare.com/wallpaper/577/889/216/anime-my-hero-academia-denki-kaminari-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '789 Voltage Road',
        city: 'Musutafu',
        zipcode: '14725',
      },
    ],
    email: 'kaminari@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'electrification.jpg',
        name: 'Electrification',
        description: `Denki Kaminari possesses the quirk Electrification, which allows him to generate and manipulate electricity. 
                          However, overuse of his quirk can cause him to short-circuit and become temporarily brain-dead.`,
      },
    ],
    description: `Denki Kaminari is one of the main characters of Boku no Hero Academia. 
                      He is a student in Class 1-A at U.A. High School known for his friendly personality and electric quirk.`,
    age: 16,
    height: 177, // in centimeters
    weight: 65, // in kilograms
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/denki-kaminari',
      },
      {
        type: 'phone number',
        value: '+1 555-987-6543',
      },
      {
        type: 'email',
        value: 'kaminari@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@denki_kaminari',
      },
    ],
    bornDate: '03/08/2008', // Born Date format: MM/DD/YYYY
    popularity: 70, // Popularity range: 1-100
  },
  {
    id: uuidv4(),
    name: {
      real: 'Eijiro Kirishima',
      hero: 'Red Riot',
    },
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/04/Eijiro_Kirishima_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/3a/Eijiro_Kirishima_Student_Uniform_Profile.png',
      banner:
        'https://c4.wallpaperflare.com/wallpaper/543/897/249/anime-my-hero-academia-eijiro-kirishima-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '246 Unbreakable Avenue',
        city: 'Musutafu',
        zipcode: '78542',
      },
    ],
    email: 'kirishima@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'hardening.jpg',
        name: 'Hardening',
        description: `Eijiro Kirishima possesses the quirk Hardening, which allows him to harden and sharpen any part of his body at will, 
                          granting him enhanced defense and offense.`,
      },
    ],
    description: `Eijiro Kirishima is one of the main characters of Boku no Hero Academia. 
                      He is a student in Class 1-A at U.A. High School known for his tough exterior and unyielding spirit.`,
    age: 16,
    height: 170, // in centimeters
    weight: 68, // in kilograms
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/eijiro-kirishima',
      },
      {
        type: 'phone number',
        value: '+1 555-987-6543',
      },
      {
        type: 'email',
        value: 'kirishima@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@hardened_hero',
      },
    ],
    bornDate: '03/08/2008', // Born Date format: MM/DD/YYYY
    popularity: 75, // Popularity range: 1-100
  },
  {
    id: uuidv4(),
    name: {
      real: 'Momo Yaoyorozu',
      hero: 'Creati',
    },
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/8d/Momo_Yaoyorozu_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/eb/Momo_Yaoyorozu_Full_Body_School_Uniform.png',
      banner:
        'https://c4.wallpaperflare.com/wallpaper/25/426/493/anime-my-hero-academia-momo-yaoyorozu-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '123 Creation Street',
        city: 'Musutafu',
        zipcode: '36985',
      },
    ],
    email: 'yaoyorozu@ua.academia.com',
    gender: 'Female',
    ability: [
      {
        image: 'creation.jpg',
        name: 'Creation',
        description: `Momo Yaoyorozu possesses the quirk Creation, which allows her to materialize any non-living object, 
                          as long as she understands its molecular structure.`,
      },
    ],
    description: `Momo Yaoyorozu is one of the main characters of Boku no Hero Academia. 
                      She is a student in Class 1-A at U.A. High School known for her intelligence, leadership skills, and versatile quirk.`,
    age: 16,
    height: 165, // in centimeters
    weight: 55, // in kilograms
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/momo-yaoyorozu',
      },
      {
        type: 'phone number',
        value: '+1 555-123-4567',
      },
      {
        type: 'email',
        value: 'yaoyorozu@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@creativity_hero',
      },
    ],
    bornDate: '03/08/2008', // Born Date format: MM/DD/YYYY
    popularity: 85, // Popularity range: 1-100
  },
  {
    id: '7c6d532c-2ba1-4a2b-896b-4501373fb77a',
    name: {
      real: 'Tetsutetsu Tetsutetsu',
      hero: 'Real Steel',
    },
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/83/Tetsutetsu_Tetsutetsu_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/8d/Tetsutetsu_Tetsutetsu_PE_Uniform.png',
      banner:
        'https://c4.wallpaperflare.com/wallpaper/129/312/922/anime-my-hero-academia-tetsutetsu-tetsutetsu-hd-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '789 Steel Street',
        city: 'Musutafu',
        zipcode: '14725',
      },
    ],
    email: 'tetsutetsu@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'steel_form.jpg',
        name: 'Steel Form',
        description:
          'Tetsutetsu Tetsutetsu possesses the quirk Steel, which allows his body to transform into steel, granting him enhanced durability and strength.',
      },
    ],
    description:
      'Tetsutetsu Tetsutetsu is one of the students in Class 1-B at U.A. High School. He is known for his straightforward personality and strong sense of determination.',
    age: 15,
    bornDate: '02/20/2009',
    height: 173,
    weight: 70,
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/tetsutetsu-tetsutetsu',
      },
      {
        type: 'phone number',
        value: '+1 555-123-4567',
      },
      {
        type: 'email',
        value: 'tetsutetsu@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@steel_hero',
      },
    ],
    popularity: 92,
  },
  {
    id: 'b35f0405-512b-45b4-a7d7-90e71479166e',
    name: {
      real: 'Neito Monoma',
      hero: 'Copycat',
    },
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/6f/Neito_Monoma_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/8e/Neito_Monoma_PE_Uniform.png',
      banner: 'https://wallpapercave.com/wp/wp4767117.png',
    },
    address: [
      {
        street: '123 Copycat Street',
        city: 'Musutafu',
        zipcode: '36985',
      },
    ],
    email: 'monoma@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'copy.jpg',
        name: 'Copy',
        description:
          'Neito Monoma possesses the quirk Copy, which allows him to temporarily replicate the quirks of others after making physical contact with them.',
      },
    ],
    description:
      'Neito Monoma is one of the students in Class 1-B at U.A. High School. He is known for his competitive nature and his desire to prove the superiority of Class 1-B over Class 1-A.',
    age: 16,
    bornDate: '01/15/2008',
    height: 165,
    weight: 58,
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/neito-monoma',
      },
      {
        type: 'phone number',
        value: '+1 555-987-6543',
      },
      {
        type: 'email',
        value: 'monoma@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@copycat_hero',
      },
    ],
    popularity: 78,
  },
  {
    id: 'cc4916c1-4b63-4fc4-bff6-2351d249e59a',
    name: {
      real: 'Itsuka Kendo',
      hero: 'Big Fist',
    },
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/ef/Itsuka_Kendo_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/1/16/Itsuka_Kendo_PE_Uniform.png',
      banner:
        'https://c4.wallpaperflare.com/wallpaper/446/445/313/anime-my-hero-academia-itsuka-kendo-hd-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '246 Leadership Avenue',
        city: 'Musutafu',
        zipcode: '78542',
      },
    ],
    email: 'kendo@ua.academia.com',
    gender: 'Female',
    ability: [
      {
        image: 'big_fist.jpg',
        name: 'Big Fist',
        description:
          'Itsuka Kendo possesses the quirk Big Fist, which allows her to enlarge and strengthen her fists, granting her enhanced strength and striking power.',
      },
    ],
    description:
      'Itsuka Kendo is one of the students in Class 1-B at U.A. High School. She is known for her leadership skills and her ability to bring out the best in her classmates.',
    age: 16,
    bornDate: '03/24/2007',
    height: 168,
    weight: 60,
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/itsuka-kendo',
      },
      {
        type: 'phone number',
        value: '+1 555-123-4567',
      },
      {
        type: 'email',
        value: 'kendo@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@big_fist_hero',
      },
    ],
    popularity: 85,
  },
  {
    id: '688b451e-3e2a-4f16-8e17-6652e9e53d16',
    name: {
      real: 'Juzo Honenuki',
      hero: 'Softening',
    },
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/a/a4/Juzo_Honenuki_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/34/Juzo_Honenuki_PE_Uniform.png',
      banner:
        'https://c4.wallpaperflare.com/wallpaper/868/591/740/anime-my-hero-academia-hiryu-rin-ibara-shiozaki-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '789 Elasticity Street',
        city: 'Musutafu',
        zipcode: '14725',
      },
    ],
    email: 'honenuki@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'softening.jpg',
        name: 'Softening',
        description:
          'Juzo Honenuki possesses the quirk Softening, which allows him to soften and mold any non-living material with his hands, giving him the ability to reshape the environment to his advantage.',
      },
    ],
    description:
      'Juzo Honenuki is one of the students in Class 1-B at U.A. High School. He is known for his calm and analytical demeanor, as well as his strategic use of his quirk in battle.',
    age: 16,
    bornDate: '11/03/2008',
    height: 175,
    weight: 65,
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/juzo-honenuki',
      },
      {
        type: 'phone number',
        value: '+1 555-987-6543',
      },
      {
        type: 'email',
        value: 'honenuki@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@softening_hero',
      },
    ],
    popularity: 70,
  },
  {
    id: '5c5264be-2fc0-487e-9417-fb58b4c9cb4a',
    name: {
      real: 'Setsuna Tokage',
      hero: 'Lizard Tail Cut',
    },
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/d/dd/Setsuna_Tokage_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/0a/Setsuna_Tokage_PE_Uniform.png',
      banner:
        'https://c4.wallpaperflare.com/wallpaper/467/169/302/anime-my-hero-academia-setsuna-tokage-hd-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '123 Camouflage Street',
        city: 'Musutafu',
        zipcode: '36985',
      },
    ],
    email: 'tokage@ua.academia.com',
    gender: 'Female',
    ability: [
      {
        image: 'lizard_tail_cut.jpg',
        name: 'Lizard Tail Cut',
        description:
          "Setsuna Tokage possesses the quirk Lizard Tail Cut, which allows her to detach and control her own body parts like a lizard's tail, enabling her to use them for both offense and defense.",
      },
    ],
    description:
      'Setsuna Tokage is one of the students in Class 1-B at U.A. High School. She is known for her quirky personality and her ability to surprise her opponents with her unique quirk.',
    age: 15,
    bornDate: '12/19/2008',
    height: 162,
    weight: 50,
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/setsuna-tokage',
      },
      {
        type: 'phone number',
        value: '+1 555-123-4567',
      },
      {
        type: 'email',
        value: 'tokage@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@lizard_tail_hero',
      },
    ],
    popularity: 85,
  },
  {
    id: '490624b1-c6b5-4a5d-81c3-9a198e80ac0b',
    name: {
      real: 'Kinoko Komori',
      hero: 'Mushroom',
    },
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/2/29/Kinoko_Komori_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/b9/Kinoko_Komori_Anime_Profile.png',
      banner:
        'https://c4.wallpaperflare.com/wallpaper/319/664/895/anime-my-hero-academia-kinoko-komori-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '246 Mushroom Street',
        city: 'Musutafu',
        zipcode: '78542',
      },
    ],
    email: 'komori@ua.academia.com',
    gender: 'Female',
    ability: [
      {
        image: 'mushroom.jpg',
        name: 'Mushroom',
        description:
          'Kinoko Komori possesses the quirk Mushroom, which allows her to produce and control mushrooms from her body. She can release spores that induce various effects on those who inhale them.',
      },
    ],
    description:
      'Kinoko Komori is one of the students in Class 1-B at U.A. High School. She is known for her shy and reserved personality, as well as her creative use of her quirk in combat.',
    age: 16,
    bornDate: '07/06/2007',
    height: 160,
    weight: 52,
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/kinoko-komori',
      },
      {
        type: 'phone number',
        value: '+1 555-987-6543',
      },
      {
        type: 'email',
        value: 'komori@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@mushroom_hero',
      },
    ],
    popularity: 70,
  },
  {
    id: '20406e26-7c4b-4f29-94fb-4d9a930ee239',
    name: {
      real: 'Pony Tsunotori',
      hero: 'Horn Cannon',
    },
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/74/Pony_Tsunotori_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/83/Pony_Tsunotori_Anime_Profile.png',
      banner: 'https://wallpapercave.com/wp/wp9279749.jpg',
    },
    address: [
      {
        street: '789 Horn Street',
        city: 'Musutafu',
        zipcode: '14725',
      },
    ],
    email: 'tsunotori@ua.academia.com',
    gender: 'Female',
    ability: [
      {
        image: 'horn_cannon.jpg',
        name: 'Horn Cannon',
        description:
          'Pony Tsunotori possesses the quirk Horn Cannon, which allows her to extend and manipulate the horns on her head to shoot powerful energy blasts.',
      },
    ],
    description:
      'Pony Tsunotori is one of the students in Class 1-B at U.A. High School. She is known for her straightforward and confident personality, as well as her powerful quirk.',
    age: 15,
    bornDate: '09/17/2009',
    height: 167,
    weight: 55,
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/pony-tsunotori',
      },
      {
        type: 'phone number',
        value: '+1 555-123-4567',
      },
      {
        type: 'email',
        value: 'tsunotori@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@horn_cannon_hero',
      },
    ],
    popularity: 92,
  },
  {
    id: 'ee2460e1-c40e-4e0a-bf15-37a74bceff50',
    name: {
      real: 'Yui Kodai',
      hero: 'Size Manipulation',
    },
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/f/fe/Yui_Kodai_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/a/a8/Yui_Kodai_PE_Uniform.png',
      banner: 'https://wallpapercave.com/wp/wp10208922.jpg',
    },
    address: [
      {
        street: '123 Miniature Street',
        city: 'Musutafu',
        zipcode: '36985',
      },
    ],
    email: 'kodai@ua.academia.com',
    gender: 'Female',
    ability: [
      {
        image: 'size_manipulation.jpg',
        name: 'Size Manipulation',
        description:
          'Yui Kodai possesses the quirk Size Manipulation, which allows her to shrink or enlarge the size of objects, including herself, at will.',
      },
    ],
    description:
      'Yui Kodai is one of the students in Class 1-B at U.A. High School. She is known for her cheerful and optimistic personality, as well as her unique quirk.',
    age: 16,
    bornDate: '03/27/2007',
    height: 158,
    weight: 50,
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/yui-kodai',
      },
      {
        type: 'phone number',
        value: '+1 555-987-6543',
      },
      {
        type: 'email',
        value: 'kodai@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@size_manipulator_hero',
      },
    ],
    popularity: 80,
  },
  {
    id: '163f1890-71d7-44fc-8e7d-251087d820d6',
    name: {
      real: 'Nemuri Kayama',
      hero: 'Midnight',
    },
    role: 'Teacher',
    class: '',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/1/1e/Midnight_Anime_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/7c/Nemuri_Kayama_Hero_Costume_%28Anime%29.png',
      banner: 'https://wallpapercave.com/wp/wp9003279.jpg',
    },
    address: [
      {
        street: '123 Dream Street',
        city: 'Musutafu',
        zipcode: '78542',
      },
    ],
    email: 'kayama@ua.academia.com',
    gender: 'Female',
    ability: [
      {
        image: 'somnambulist.jpg',
        name: 'Somnambulist',
        description:
          'Nemuri Kayama possesses the quirk Somnambulist, which allows her to put others to sleep by releasing a sleep-inducing aroma from her body. She can control the intensity and range of the aroma to affect multiple targets at once.',
      },
    ],
    description:
      'Nemuri Kayama, also known as Midnight, is a pro hero and teacher at U.A. High School. She is known for her provocative costume and her ability to use her quirk to subdue villains.',
    age: 28,
    bornDate: '05/07/1995',
    height: 175,
    weight: 58,
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/nemuri-kayama',
      },
      {
        type: 'phone number',
        value: '+1 555-123-4567',
      },
      {
        type: 'email',
        value: 'kayama@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@midnight_hero',
      },
    ],
    popularity: 95,
  },
  {
    id: '4ecf5f9c-8505-4a28-97ac-ba7ff33a17bb',
    name: {
      real: 'Hizashi Yamada',
      hero: 'Present Mic',
    },
    role: 'Teacher',
    class: '',
    affiliation: 'U.A. High School',
    image: {
      cover:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/4/47/Present_Mic_Anime_Portrait.png',
      portrait:
        'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/64/Hizashi_Yamada_Hero_Costume_%28Anime%29.png',
      banner:
        'https://c4.wallpaperflare.com/wallpaper/436/346/418/anime-my-hero-academia-hizashi-yamada-present-mic-boku-no-hero-academia-hd-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '456 Loudspeaker Street',
        city: 'Musutafu',
        zipcode: '36985',
      },
    ],
    email: 'yamada@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'voice.jpg',
        name: 'Voice',
        description:
          'Hizashi Yamada possesses the quirk Voice, which allows him to amplify the volume and power of his voice to use it as a sonic weapon or to reach distant targets with his messages.',
      },
    ],
    description:
      'Hizashi Yamada, also known as Present Mic, is a pro hero and teacher at U.A. High School. He is known for his outgoing personality and his ability to use his quirk to inspire and motivate others.',
    age: 31,
    height: 185,
    weight: 70,
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/hizashi-yamada',
      },
      {
        type: 'phone number',
        value: '+1 555-987-6543',
      },
      {
        type: 'email',
        value: 'yamada@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@present_mic',
      },
    ],
    popularity: 80,
    bornDate: '06/06/1993',
  },
];
