import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  backgroundColor: any = "#f0f0f0"
  searchTerm: string = '';
  showMenu: boolean = false;
  menus: any[] = [
    {
      image:
        'https://cdn0-production-images-kly.akamaized.net/z6HymlQZaLlLWprqVaRz-lWXeUU=/0x422:5760x3668/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4018264/original/019930600_1652166761-american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food__1_.jpg',
      name: 'Nasi Goreng',
      desc: 'Nasi goreng adalah makanan yang terbuat dari nasi yang digoreng dan dicampur dengan bumbu-bumbu tertentu seperti kecap manis, bawang merah, bawang putih, merica, dan garam.',
    },
    {
      image:
        'https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/13024827/ini-cara-membuat-mie-goreng-yang-lebih-sehat-dengan-bahan-sederhana-halodoc.jpg.webp',
      name: 'Mie Goreng',
      desc: 'Mie goreng adalah makanan yang terbuat dari mie yang digoreng dan dicampur dengan bumbu-bumbu tertentu seperti kecap manis, bawang merah, bawang putih, merica, dan garam.',
    },
    {
      image:
        'https://cdn1-production-images-kly.akamaized.net/zPot0XRSDLbKPyqqB-3tRB7_fwE=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2958639/original/057463300_1572940011-shutterstock_127677473.jpg',
      name: 'Ayam Goreng',
      desc: 'Ayam goreng adalah makanan yang terbuat dari ayam yang digoreng dan dicampur dengan bumbu-bumbu tertentu seperti kecap manis, bawang merah, bawang putih, merica, dan garam.',
    },
    {
      image:
        'https://www.blibli.com/friends-backend/wp-content/uploads/2023/04/B300045-Cover-resep-sate-ayam.jpg',
      name: 'Sate Ayam',
      desc: 'Sate ayam adalah makanan yang terbuat dari daging ayam yang ditusuk dan dipanggang dengan bumbu kacang atau bumbu kecap.',
    },
    {
      image:
        'https://asset.kompas.com/crops/hgYCTwrFpAN5wQ35-Z2STU9C0vQ=/3x0:700x465/750x500/data/photo/2020/11/08/5fa7d069849e2.jpg',
      name: 'Soto Ayam',
      desc: 'Soto ayam adalah makanan berupa sup ayam yang berisi potongan daging ayam, bihun, dan sayuran.',
    },
    {
      image:
        'https://cdn0-production-images-kly.akamaized.net/VTDiAj5ffuLCm1CEjR9VExObwkQ=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2763419/original/071857300_1553761217-shutterstock_1148354906.jpg',
      name: 'Bakso',
      desc: 'Bakso adalah makanan berupa bola daging yang terbuat dari campuran daging sapi, tepung tapioka, dan bumbu-bumbu tertentu.',
    },
    {
      image: 'https://cdn0-production-images-kly.akamaized.net/WZYZPMA5TseXST9AWCrnATkrGGo=/62x841:5670x4000/469x260/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2978831/original/070900100_1574827507-shutterstock_1375884227.jpg',
      name: 'Sambal Goreng Kentang',
      desc: 'Sambal goreng kentang adalah makanan yang terbuat dari kentang yang digoreng dan dicampur dengan sambal, santan, dan bumbu-bumbu lainnya.',
    },
    {
      image: 'https://asset.kompas.com/crops/95lbOeaNwZJy00eSdngWHEzuO4w=/0x381:667x826/750x500/data/photo/2021/03/17/60515f1ed8d5c.jpeg',
      name: 'Kue Lapis Ketan',
      desc: 'Kue lapis ketan adalah kue tradisional Indonesia yang terbuat dari ketan yang dikukus lapis demi lapis dengan warna yang berbeda.',
    },

  ];

  changeBackground() {
    this.backgroundColor = null;   
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;   
  }

  get filteredMenus(): any[] {
    return this.menus.filter(menu => menu.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  constructor() {}

  ngOnInit(): void {}
}
