import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Hero } from '../helpers/hero.interface';

@Component({
  selector: 'app-add-hero-form',
  templateUrl: './add-hero-form.component.html',
  styleUrls: ['./add-hero-form.component.scss']
})
export class AddHeroFormComponent implements OnInit {
  @Output() addSuperhero: EventEmitter<Hero> = new EventEmitter<Hero>();

  newSuperhero: Hero = { name: '', actor: '', detail: '', image: '' };

  submitForm(): void {
    this.addSuperhero.emit(this.newSuperhero);
    this.newSuperhero = { name: '', actor: '', detail: '', image: '' };
  }
  constructor() {}

  ngOnInit(): void {}
}
