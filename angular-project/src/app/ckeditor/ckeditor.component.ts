import { Component, OnInit } from '@angular/core';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.scss'],
})
export class CkeditorComponent implements OnInit {
  public Editor = DecoupledEditor;
  public editorData: string = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.editorData);
  }

  onReady(editor: any) {
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );

    editor.model.document.on('change:data', () => {
      this.editorData = editor.getData();
    });
  }
}
