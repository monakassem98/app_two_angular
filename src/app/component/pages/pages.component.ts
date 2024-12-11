import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  imports: [RouterOutlet],
  template: ` <router-outlet /> `,
})
export class PagesComponent {}
