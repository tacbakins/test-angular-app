import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // <body id="something" class="some-class"> 'body', '#something', '.some-class'
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test app';
}
