import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinksComponent } from './component/links/links.component';
import { HeaderComponent } from './component/header/header.component';
import { PagesComponent } from './component/pages/pages.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LinksComponent, HeaderComponent, PagesComponent],
  template: `
    <div class="main">
      <div class="links">
        <div class="pro-name">Project Name</div>
        <app-links></app-links>
      </div>
      <div class="page-data">
        <app-header></app-header>
        <app-pages></app-pages>
        <footer>Created By Yat</footer>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'app_two';
}
