import { v4 as uuidv4 } from 'uuid';

export const Characters = [
  {
    id: uuidv4(),
    name: 'Izuku Midoriya',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/2/25/Izuku_Midoriya_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/0e/Izuku_Midoriya_2nd_Costume_Full.png',
      banner: 'https://i.pinimg.com/originals/50/00/83/5000835521c7a24438397d3b17a80e2b.png',
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
  },
  {
    id: uuidv4(),
    name: 'Katsuki Bakugo',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/c/cd/Katsuki_Bakugo_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/83/Katsuki_Bakugo_School_Uniform_Full_Body.png',
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
  },
  {
    id: uuidv4(),
    name: 'Shoto Todoroki',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/7f/Shoto_Todoroki_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/c/c4/Shoto_Todoroki_school_profile.png',
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
  },
  {
    id: uuidv4(),
    name: 'Ochaco Uraraka',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/78/Ochaco_Uraraka_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/69/Ochaco_School_Uniform_Full_Body.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/702/604/41/anime-boku-no-hero-boku-no-hero-academia-anime-girls-uraraka-ochako-hd-wallpaper-preview.jpg',
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
  },
  {
    id: uuidv4(),
    name: 'Shota Aizawa',
    role: 'Teacher',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/ba/Eraser_Head_Anime_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/77/Post-War_Shota_Aizawa_Hero_Costume_%28Anime%29.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/668/70/476/anime-my-hero-academia-shota-aizawa-hd-wallpaper-preview.jpg',
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
  },
  {
    id: uuidv4(),
    name: 'All Might',
    role: 'Teacher',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/ec/All_Might_Anime_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/c/cd/Toshinori_Yagi_Golden_Age_Hero_Costume_%28Anime%29.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/635/923/784/anime-my-hero-academia-all-might-hd-wallpaper-preview.jpg',
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
  },
  {
    id: uuidv4(),
    name: 'Tsuyu Asui',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/7c/Tsuyu_Asui_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/d/dc/Tsuyu_Asui_School_Uniform.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/900/93/120/anime-my-hero-academia-tsuyu-asui-wallpaper-preview.jpg',
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
  },
  {
    id: uuidv4(),
    name: 'Denki Kaminari',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/b0/Denki_Kaminari_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/bb/Denki_Kaminari.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/577/889/216/anime-my-hero-academia-denki-kaminari-wallpaper-preview.jpg',
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
  },
  {
    id: uuidv4(),
    name: 'Eijiro Kirishima',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/04/Eijiro_Kirishima_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/3a/Eijiro_Kirishima_Student_Uniform_Profile.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/543/897/249/anime-my-hero-academia-eijiro-kirishima-wallpaper-preview.jpg',
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
  },
  {
    id: uuidv4(),
    name: 'Momo Yaoyorozu',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/8d/Momo_Yaoyorozu_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/eb/Momo_Yaoyorozu_Full_Body_School_Uniform.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/25/426/493/anime-my-hero-academia-momo-yaoyorozu-wallpaper-preview.jpg',
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
  },
  {
    id: uuidv4(),
    name: 'Tetsutetsu Tetsutetsu',
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/83/Tetsutetsu_Tetsutetsu_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/8d/Tetsutetsu_Tetsutetsu_PE_Uniform.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/129/312/922/anime-my-hero-academia-tetsutetsu-tetsutetsu-hd-wallpaper-preview.jpg',
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
        description: `Tetsutetsu Tetsutetsu possesses the quirk Steel, which allows his body to transform into steel, 
                          granting him enhanced durability and strength.`,
      },
    ],
    description: `Tetsutetsu Tetsutetsu is one of the students in Class 1-B at U.A. High School. 
                      He is known for his straightforward personality and strong sense of determination.`,
    age: 15,
    height: 173, // in centimeters
    weight: 70, // in kilograms
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
  },
  {
    id: uuidv4(),
    name: 'Neito Monoma',
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/6f/Neito_Monoma_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/8e/Neito_Monoma_PE_Uniform.png',
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
        description: `Neito Monoma possesses the quirk Copy, which allows him to temporarily replicate the quirks of others after making physical contact with them.`,
      },
    ],
    description: `Neito Monoma is one of the students in Class 1-B at U.A. High School. 
                      He is known for his competitive nature and his desire to prove the superiority of Class 1-B over Class 1-A.`,
    age: 16,
    height: 165, // in centimeters
    weight: 58, // in kilograms
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
  },
  {
    id: uuidv4(),
    name: 'Itsuka Kendo',
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/ef/Itsuka_Kendo_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/1/16/Itsuka_Kendo_PE_Uniform.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/446/445/313/anime-my-hero-academia-itsuka-kendo-hd-wallpaper-preview.jpg',
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
        description: `Itsuka Kendo possesses the quirk Big Fist, which allows her to enlarge and strengthen her fists, 
                          granting her enhanced strength and striking power.`,
      },
    ],
    description: `Itsuka Kendo is one of the students in Class 1-B at U.A. High School. 
                      She is known for her leadership skills and her ability to bring out the best in her classmates.`,
    age: 16,
    height: 168, // in centimeters
    weight: 60, // in kilograms
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
  },
  {
    id: uuidv4(),
    name: 'Juzo Honenuki',
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/a/a4/Juzo_Honenuki_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/34/Juzo_Honenuki_PE_Uniform.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/868/591/740/anime-my-hero-academia-hiryu-rin-ibara-shiozaki-wallpaper-preview.jpg',
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
        description: `Juzo Honenuki possesses the quirk Softening, which allows him to soften and mold any non-living material with his hands, 
                          giving him the ability to reshape the environment to his advantage.`,
      },
    ],
    description: `Juzo Honenuki is one of the students in Class 1-B at U.A. High School. 
                      He is known for his calm and analytical demeanor, as well as his strategic use of his quirk in battle.`,
    age: 16,
    height: 175, // in centimeters
    weight: 65, // in kilograms
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
  },
  {
    id: uuidv4(),
    name: 'Setsuna Tokage',
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/d/dd/Setsuna_Tokage_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/0/0a/Setsuna_Tokage_PE_Uniform.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/467/169/302/anime-my-hero-academia-setsuna-tokage-hd-wallpaper-preview.jpg',
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
        description: `Setsuna Tokage possesses the quirk Lizard Tail Cut, which allows her to detach and control her own body parts like a lizard's tail, 
                          enabling her to use them for both offense and defense.`,
      },
    ],
    description: `Setsuna Tokage is one of the students in Class 1-B at U.A. High School. 
                      She is known for her quirky personality and her ability to surprise her opponents with her unique quirk.`,
    age: 15,
    height: 162, // in centimeters
    weight: 50, // in kilograms
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
  },
  {
    id: uuidv4(),
    name: 'Kinoko Komori',
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/2/29/Kinoko_Komori_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/b9/Kinoko_Komori_Anime_Profile.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/319/664/895/anime-my-hero-academia-kinoko-komori-wallpaper-preview.jpg',
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
        description: `Kinoko Komori possesses the quirk Mushroom, which allows her to produce and control mushrooms from her body. 
                          She can release spores that induce various effects on those who inhale them.`,
      },
    ],
    description: `Kinoko Komori is one of the students in Class 1-B at U.A. High School. 
                      She is known for her shy and reserved personality, as well as her creative use of her quirk in combat.`,
    age: 16,
    height: 160, // in centimeters
    weight: 52, // in kilograms
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
  },
  {
    id: uuidv4(),
    name: 'Pony Tsunotori',
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/74/Pony_Tsunotori_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/83/Pony_Tsunotori_Anime_Profile.png',
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
        description: `Pony Tsunotori possesses the quirk Horn Cannon, which allows her to extend and manipulate the horns on her head 
                          to shoot powerful energy blasts.`,
      },
    ],
    description: `Pony Tsunotori is one of the students in Class 1-B at U.A. High School. 
                      She is known for her straightforward and confident personality, as well as her powerful quirk.`,
    age: 15,
    height: 167, // in centimeters
    weight: 55, // in kilograms
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
  },
  {
    id: uuidv4(),
    name: 'Yui Kodai',
    role: 'Student',
    class: '1-B',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/f/fe/Yui_Kodai_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/a/a8/Yui_Kodai_PE_Uniform.png',
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
        description: `Yui Kodai possesses the quirk Size Manipulation, which allows her to shrink or enlarge the size of objects, 
                          including herself, at will.`,
      },
    ],
    description: `Yui Kodai is one of the students in Class 1-B at U.A. High School. 
                      She is known for her cheerful and optimistic personality, as well as her unique quirk.`,
    age: 16,
    height: 158, // in centimeters
    weight: 50, // in kilograms
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
  },
  {
    id: uuidv4(),
    name: 'Nemuri Kayama',
    role: 'Teacher',
    class: 'None',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/1/1e/Midnight_Anime_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/7c/Nemuri_Kayama_Hero_Costume_%28Anime%29.png',
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
        description: `Nemuri Kayama possesses the quirk Somnambulist, which allows her to put others to sleep by releasing a sleep-inducing aroma 
                          from her body. She can control the intensity and range of the aroma to affect multiple targets at once.`,
      },
    ],
    description: `Nemuri Kayama, also known as Midnight, is a pro hero and teacher at U.A. High School. 
                      She is known for her provocative costume and her ability to use her quirk to subdue villains.`,
    age: 28,
    height: 175, // in centimeters
    weight: 58, // in kilograms
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
  },
  {
    id: uuidv4(),
    name: 'Hizashi Yamada',
    role: 'Teacher',
    class: 'None',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/4/47/Present_Mic_Anime_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/64/Hizashi_Yamada_Hero_Costume_%28Anime%29.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/436/346/418/anime-my-hero-academia-hizashi-yamada-present-mic-boku-no-hero-academia-hd-wallpaper-preview.jpg',
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
        description: `Hizashi Yamada possesses the quirk Voice, which allows him to amplify the volume and power of his voice 
                          to use it as a sonic weapon or to reach distant targets with his messages.`,
      },
    ],
    description: `Hizashi Yamada, also known as Present Mic, is a pro hero and teacher at U.A. High School. 
                      He is known for his outgoing personality and his ability to use his quirk to inspire and motivate others.`,
    age: 31,
    height: 185, // in centimeters
    weight: 70, // in kilograms
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
  },
  {
    id: uuidv4(),
    name: 'Sekijiro Kan',
    role: 'Teacher',
    class: 'None',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/ba/Vlad_King_Anime_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/3c/Sekijiro_Kan_Hero_Costume_%28Anime%29.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/1014/445/95/anime-my-hero-academia-sekijiro-kan-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '123 Hero Street',
        city: 'Musutafu',
        zipcode: '14725',
      },
    ],
    email: 'kan@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'blood_control.jpg',
        name: 'Blood Control',
        description: `Sekijiro Kan possesses the quirk Blood Control, which allows him to manipulate his own blood 
                          to create defensive barriers or offensive attacks. He can also use his blood to enhance his physical abilities.`,
      },
    ],
    description: `Sekijiro Kan, also known as Blood Hero: Vlad King, is a pro hero and teacher at U.A. High School. 
                      He is known for his stern demeanor and his ability to use his quirk creatively in combat.`,
    age: 35,
    height: 190, // in centimeters
    weight: 80, // in kilograms
    contacts: [
      {
        type: 'linkedin',
        value: 'linkedin.com/in/sekijiro-kan',
      },
      {
        type: 'phone number',
        value: '+1 555-123-4567',
      },
      {
        type: 'email',
        value: 'kan@ua.academia.com',
      },
      {
        type: 'ig',
        value: '@vlad_king',
      },
    ],
  },
  {
    id: uuidv4(),
    name: 'Kyoka Jiro',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/32/Kyoka_Jiro_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/8c/Kyoka_Jiro_Full_Body_Uniform.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/848/912/63/anime-my-hero-academia-boku-no-hero-academia-kyoka-jiro-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '456 Sound Street',
        city: 'Musutafu',
        zipcode: '14725',
      },
    ],
    email: 'jiro@ua.academia.com',
    gender: 'Female',
    ability: [
      {
        image: 'earphone_jack.jpg',
        name: 'Earphone Jack',
        description: `Kyoka Jiro possesses the quirk Earphone Jack, which allows her to plug her earlobes into objects 
                      and channel the sound vibrations through them, using them as powerful weapons or for reconnaissance purposes.`,
      },
    ],
    description: `Kyoka Jiro is a student in Class 1-A at U.A. High School. She is known for her cool demeanor 
                  and her passion for music, often using her quirk in creative ways.`,
    age: 16,
    height: 165, // in centimeters
    weight: 55, // in kilograms
  },
  {
    id: uuidv4(),
    name: 'Fumikage Tokoyami',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/6c/Fumikage_Tokoyami_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/ba/Fumikage_Tokoyami_Uniform.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/965/309/220/anime-my-hero-academia-fumikage-tokoyami-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '123 Shadow Street',
        city: 'Musutafu',
        zipcode: '78542',
      },
    ],
    email: 'tokoyami@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'dark_shadow.jpg',
        name: 'Dark Shadow',
        description: `Fumikage Tokoyami possesses the quirk Dark Shadow, which manifests as a shadowy, sentient creature 
                      that he can summon and control. It becomes stronger in darkness and weaker in light.`,
      },
    ],
    description: `Fumikage Tokoyami is a student in Class 1-A at U.A. High School. He is known for his mysterious 
                  demeanor and his close bond with his quirk, Dark Shadow.`,
    age: 16,
    height: 170, // in centimeters
    weight: 60, // in kilograms
  },
  {
    id: uuidv4(),
    name: 'Hanta Sero',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/c/ca/Hanta_Sero_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/6c/Hanta_Sero_Full_Body_Uniform.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/873/471/767/anime-my-hero-academia-boku-no-hero-academia-kanto-sero-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '456 Tape Street',
        city: 'Musutafu',
        zipcode: '36985',
      },
    ],
    email: 'sero@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'tape.jpg',
        name: 'Tape',
        description: `Hanta Sero possesses the quirk Tape, which allows him to eject cellophane tape-like material 
                      from his elbows and manipulate it for various purposes, such as binding enemies or creating makeshift tools.`,
      },
    ],
    description: `Hanta Sero is a student in Class 1-A at U.A. High School. He is known for his easygoing personality 
                  and his creative use of his quirk in combat and everyday life.`,
    age: 16,
    height: 175, // in centimeters
    weight: 65, // in kilograms
  },
  {
    id: uuidv4(),
    name: 'Minoru Mineta',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/6a/Minoru_Mineta_Portrait.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/66/Minoru_Mineta_Full_Body_School_Uniform_Anime.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/41/477/303/anime-my-hero-academia-boku-no-hero-academia-minoru-mineta-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '123 Grape Street',
        city: 'Musutafu',
        zipcode: '36985',
      },
    ],
    email: 'mineta@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'pop_off.jpg',
        name: 'Pop Off',
        description: `Minoru Mineta possesses the quirk Pop Off, which allows him to produce and pluck off sticky balls 
                      from his head that can adhere to surfaces or opponents.`,
      },
    ],
    description: `Minoru Mineta is a student in Class 1-A at U.A. High School. He is known for his perverted behavior 
                  and his strategic thinking, often using his quirk creatively in combat situations.`,
    age: 16,
    height: 108, // in centimeters
    weight: 48, // in kilograms
  },
  {
    id: uuidv4(),
    name: 'Toru Hagakure',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/8f/Toru_Hagakure_Full_Body_Uniform.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/be/Toru_Hagakure_Portrait.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/846/427/687/anime-my-hero-academia-boku-no-hero-academia-toru-hagakure-wallpaper-thumb.jpg',
    },
    address: [
      {
        street: '456 Invisible Street',
        city: 'Musutafu',
        zipcode: '14725',
      },
    ],
    email: 'hagakure@ua.academia.com',
    gender: 'Female',
    ability: [
      {
        image: 'invisibility.jpg',
        name: 'Invisibility',
        description: `Toru Hagakure possesses the quirk Invisibility, which renders her body completely invisible to the naked eye.`,
      },
    ],
    description: `Toru Hagakure is a student in Class 1-A at U.A. High School. She is known for her cheerful personality 
                  and her ability to remain unseen in various situations.`,
    age: 16,
    height: 158, // in centimeters
    weight: 48, // in kilograms
  },
  {
    id: uuidv4(),
    name: 'Rikido Sato',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/c/c9/Rikido_Sato_Full_Body_Uniform.png',
      portrait: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/eb/Rikido_Sato_Portrait.png',
      banner: 'https://c4.wallpaperflare.com/wallpaper/395/69/127/anime-my-hero-academia-boku-no-hero-academia-riku-sato-wallpaper-preview.jpg',
    },
    address: [
      {
        street: '123 Sugar Street',
        city: 'Musutafu',
        zipcode: '78542',
      },
    ],
    email: 'sato@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'sugar_rush.jpg',
        name: 'Sugar Rush',
        description: `Rikido Sato possesses the quirk Sugar Rush, which grants him enhanced strength and 
                      temporary boosts in physical abilities after consuming sugar.`,
      },
    ],
    description: `Rikido Sato is a student in Class 1-A at U.A. High School. He is known for his love of sweets 
                  and his straightforward personality, often using his quirk to overpower opponents in battle.`,
    age: 16,
    height: 178, // in centimeters
    weight: 72, // in kilograms
  },
  {
    id: uuidv4(),
    name: 'Mezo Shoji',
    role: 'Student',
    class: '1-A',
    affiliation: 'U.A. High School',
    image: {
      cover: 'shoji_cover.jpg',
      portrait: 'shoji_portrait.jpg',
      banner: 'shoji_banner.jpg',
    },
    address: [
      {
        street: '456 Tentacle Street',
        city: 'Musutafu',
        zipcode: '36985',
      },
    ],
    email: 'shoji@ua.academia.com',
    gender: 'Male',
    ability: [
      {
        image: 'dupli_arms.jpg',
        name: 'Dupli-Arms',
        description: `Mezo Shoji possesses the quirk Dupli-Arms, which allows him to generate multiple extendable arms 
                      from various parts of his body, each with its own set of eyes and enhanced strength.`,
      },
    ],
    description: `Mezo Shoji is a student in Class 1-A at U.A. High School. He is known for his calm demeanor 
                  and his ability to adapt to different situations using his versatile quirk.`,
    age: 16,
    height: 177, // in centimeters
    weight: 70, // in kilograms
  },
];
