import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss'],
})
export class CardMenuComponent implements OnInit {
  showMenu: boolean = false;
  menus: any[] = [
    {
      image:
        'https://cdn0-production-images-kly.akamaized.net/z6HymlQZaLlLWprqVaRz-lWXeUU=/0x422:5760x3668/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4018264/original/019930600_1652166761-american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food__1_.jpg',
      name: 'Nasi Goreng',
      description:
        'Nasi goreng adalah makanan yang terbuat dari nasi yang digoreng dan dicampur dengan bumbu-bumbu tertentu seperti kecap manis, bawang merah, bawang putih, merica, dan garam.',
    },
    {
      image:
        'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/13024827/ini-cara-membuat-mie-goreng-yang-lebih-sehat-dengan-bahan-sederhana-halodoc.jpg.webp',
      name: 'Mie Goreng',
      description:
        'Mie goreng adalah makanan yang terbuat dari mie yang digoreng dan dicampur dengan bumbu-bumbu tertentu seperti kecap manis, bawang merah, bawang putih, merica, dan garam.',
    },
    {
      image:
        'https://cdn1-production-images-kly.akamaized.net/zPot0XRSDLbKPyqqB-3tRB7_fwE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2958639/original/057463300_1572940011-shutterstock_127677473.jpg',
      name: 'Ayam Goreng',
      description:
        'Ayam goreng adalah makanan yang terbuat dari ayam yang digoreng dan dicampur dengan bumbu-bumbu tertentu seperti kecap manis, bawang merah, bawang putih, merica, dan garam.',
    },
    {
      image: 'https://www.blibli.com/friends-backend/wp-content/uploads/2023/04/B300045-Cover-resep-sate-ayam.jpg',
      name: 'Sate Ayam',
      description:
        'Sate ayam adalah makanan yang terbuat dari daging ayam yang ditusuk dan dipanggang dengan bumbu kacang atau bumbu kecap.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Soto Ayam',
      description:
        'Soto ayam adalah makanan berupa sup ayam yang berisi potongan daging ayam, bihun, dan sayuran.',
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Bakso',
      description:
        'Bakso adalah makanan berupa bola daging yang terbuat dari campuran daging sapi, tepung tapioka, dan bumbu-bumbu tertentu.',
    },
  ];
  selectedMenu: any = {};

  constructor() {}

  ngOnInit(): void {}
}
