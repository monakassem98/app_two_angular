import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-links',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="dashboard" routerLinkActive="act">Dashboard</a>
      <a routerLink="table" routerLinkActive="act">Table</a>
      <a routerLink="forms" routerLinkActive="act">Forms</a>
      <a routerLink="items" routerLinkActive="act">Items </a>
      <a routerLink="invoice" routerLinkActive="act">Invoice</a>
    </nav>
  `,
})
export class LinksComponent {}
