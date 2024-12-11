import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header>
      <div class="bars" (click)="action_one()">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div class="profile">
        <ul class="main-ul">
          <li (click)="action_two()">
            Mona Ahmed Kassem
            <i class="fas fa-chevron-down " id="icon-arrow"></i>

            <ul class="sub-ul h-s">
              <li>
                <a href="">Change Password</a>
              </li>
              <li><a href="">Log out</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  action_one(): void {
    let links_box = <HTMLElement>document.querySelector('.links');
    let main_box = <HTMLElement>document.querySelector('.main');
    links_box.classList.toggle('h-s');
    main_box.classList.toggle('c-100');
  }

  action_two(): void {
    let sub_links = <HTMLElement>document.querySelector('.sub-ul');
    let icon_arrow = <HTMLElement>document.getElementById('icon-arrow');
    sub_links.classList.toggle('h-s');
    icon_arrow.classList.toggle('ro');
  }
}
