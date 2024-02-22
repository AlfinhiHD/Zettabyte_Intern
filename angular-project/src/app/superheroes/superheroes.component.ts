import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superheroes',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.scss'],
})
export class SuperheroesComponent implements OnInit {
  heroes: any[] = [
    //ganti nanti tipe datanya
    {
      name: 'Spider-Man',
      actor: 'Tom Holland',
      detail:
        'Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko.',
      image:
        'https://images.tokopedia.net/img/KRMmCm/2023/10/18/f5e79ada-8ef6-4c10-928e-f53dc324dc9b.jpg',
    },
    {
      name: 'Iron Man',
      actor: 'Robert Downey Jr.',
      detail:
        'Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics.',
      image:
        'https://cdn1-production-images-kly.akamaized.net/ssFkLRTS8dwO-K_gCSOrXSfv8pg=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2789944/original/002331300_1556335962-iron_man_3.jpg',
    },
    {
      name: 'Captain America',
      actor: 'Chris Evans',
      detail:
        'Captain America is a fictional superhero appearing in American comic books published by Marvel Comics.',
      image:
        'https://www.cnet.com/a/img/resize/8bb1425f478823277caf4d4adbdc5c04a05d416a/hub/2017/08/03/75c3b0ae-5a2d-4d75-b72b-055247b4378f/marvelinfinitywar-captainamerica.jpg?auto=webp&fit=crop&height=675&width=1200',
    },
    {
      name: 'Thor',
      actor: 'Chris Hemsworth',
      detail:
        'Thor is a fictional superhero appearing in American comic books published by Marvel Comics.',
      image:
        'https://media.cnn.com/api/v1/images/stellar/prod/131108082143-thor-the-dark-world.jpg?q=x_112,y_0,h_1000,w_1777,c_crop/w_800',
    },
    {
      name: 'Hulk',
      actor: 'Mark Ruffalo',
      detail:
        'Hulk is a fictional superhero appearing in American comic books published by Marvel Comics.',
      image:
        'https://cdn.britannica.com/64/182864-050-8975B127/Scene-The-Incredible-Hulk-Louis-Leterrier.jpg',
    },
    {
      name: 'Black Widow',
      actor: 'Scarlett Johansson',
      detail:
        'Black Widow is a fictional superhero appearing in American comic books published by Marvel Comics.',
      image:
        'https://img2.beritasatu.com/cache/beritasatu/960x620-3/1515657658.jpg',
    },
    {
      name: 'Doctor Strange',
      actor: 'Benedict Cumberbatch',
      detail:
        'Doctor Strange is a fictional superhero appearing in American comic books published by Marvel Comics.',
      image:
        'https://variety.com/wp-content/uploads/2022/05/Doctor-STrange-2.jpg?w=1000',
    },
    {
      name: 'Black Panther',
      actor: 'Chadwick Boseman',
      detail:
        'Black Panther is a fictional superhero appearing in American comic books published by Marvel Comics.',
      image:
        'https://www.slashfilm.com/img/gallery/black-panther-wakanda-forever-production-delayed-again-due-to-positive-covid-tests/intro-1642618786.jpg',
    },
    {
      name: 'Ant-Man',
      actor: 'Paul Rudd',
      detail:
        'Ant-Man is a fictional superhero appearing in American comic books published by Marvel Comics.',
      image:
        'https://static01.nyt.com/images/2018/07/06/arts/06antman1-dressrefer/06antman1-dressrefer-superJumbo.jpg',
    },
  ];

  // newSuperhero: { name: string, actor: string, detail: string, image?: string } = { name: '', actor: '', detail: '', image: '' };

  addSuperhero(superhero: { name: string, actor: string, detail: string, image?: string }): void {
    this.heroes.push(superhero);
    // this.newSuperhero = { name: '', actor: '', detail: '', image: '' };
  }

  constructor() {}

  ngOnInit(): void {}
}
