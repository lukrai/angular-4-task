import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-root',
  template: `
    <md-toolbar color="primary">
      <span>Posts</span>
      <span class="example-spacer"></span>
      <button md-button [mdMenuTriggerFor]="appMenu"><md-icon>menu</md-icon> Menu</button>
    </md-toolbar>

    <md-menu #appMenu="mdMenu">
      <button md-menu-item  routerLink="/posts"> Posts </button>
    </md-menu>
    <nav>
      <a routerLink="/posts" routerLinkActive="active">Home</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {

}
