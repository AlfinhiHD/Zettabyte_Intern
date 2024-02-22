import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-hero-form',
  templateUrl: './add-hero-form.component.html',
  styleUrls: ['./add-hero-form.component.scss'],
})
export class AddHeroFormComponent implements OnInit {
  @Output() addSuperhero: EventEmitter<{
    name: string;
    actor: string;
    detail: string;
    image?: string;
  }> = new EventEmitter<{
    name: string;
    actor: string;
    detail: string;
    image?: string;
  }>();

  newSuperhero: {
    name: string;
    actor: string;
    detail: string;
    image?: string;
  } = { name: '', actor: '', detail: '', image: '' };

  submitForm(): void {
    this.addSuperhero.emit(this.newSuperhero);
    this.newSuperhero = { name: '', actor: '', detail: '', image: '' };
  }
  constructor() {}

  ngOnInit(): void {}
}
