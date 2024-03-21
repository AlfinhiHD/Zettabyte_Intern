import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ckeditor-output',
  templateUrl: './ckeditor-output.component.html',
  styleUrls: ['./ckeditor-output.component.scss']
})
export class CkeditorOutputComponent implements OnInit {
  @Input() editorData: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
