import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss'],
})
export class CardMenuComponent implements OnInit {
  @Input() menu: any ={};

  constructor() {}

  ngOnInit(): void {}
}
