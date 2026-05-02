import {Component} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './shared/components/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar/>
    <router-outlet/>
  `
})
export class AppComponent {
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => window.HSStaticMethods.autoInit(), 100);
      }
    });
  }

}
