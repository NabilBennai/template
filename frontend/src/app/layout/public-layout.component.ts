import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, RouterLink, TranslatePipe],
  template: `
    <main class="mx-auto max-w-3xl p-6">
      <header class="mb-6 rounded-xl bg-white p-4 shadow">
        <h1 class="text-2xl font-bold">{{ 'common.welcome' | translate }}</h1>
        <nav class="mt-2 flex gap-4">
          <a routerLink="/login">{{ 'auth.login' | translate }}</a>
          <a routerLink="/register">{{ 'auth.register' | translate }}</a>
        </nav>
      </header>
      <router-outlet/>
    </main>
  `
})
export class PublicLayoutComponent {
}
